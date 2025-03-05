// Proxy API requests to the backend server
const http = require('http');

module.exports = async (req, res) => {
  // Set CORS headers
  res.setHeader('Access-Control-Allow-Credentials', true);
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS,PATCH,DELETE,POST,PUT');
  res.setHeader('Access-Control-Allow-Headers', 'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version, Authorization');

  // Handle preflight OPTIONS request
  if (req.method === 'OPTIONS') {
    res.status(200).end();
    return;
  }

  // Get the path from the request URL
  const path = req.url.replace(/^\/api\/proxy/, '');
  
  // Forward the request to the backend API
  const apiUrl = `http://3.111.196.92:8020${path}`;
  
  // Create options for the HTTP request
  const options = {
    method: req.method,
    headers: {
      ...req.headers,
      host: '3.111.196.92:8020',
    },
  };

  // Remove headers that might cause issues
  delete options.headers.host;
  
  try {
    // Create a promise to handle the HTTP request
    const proxyRequest = new Promise((resolve, reject) => {
      const proxyReq = http.request(apiUrl, options, (proxyRes) => {
        // Set the status code and headers from the proxied response
        res.statusCode = proxyRes.statusCode;
        Object.keys(proxyRes.headers).forEach((key) => {
          res.setHeader(key, proxyRes.headers[key]);
        });

        // Collect the response data
        const chunks = [];
        proxyRes.on('data', (chunk) => chunks.push(chunk));
        proxyRes.on('end', () => {
          const body = Buffer.concat(chunks);
          resolve(body);
        });
      });

      // Handle errors in the proxy request
      proxyReq.on('error', (error) => {
        reject(error);
      });

      // If there's a request body, write it to the proxy request
      if (req.body) {
        proxyReq.write(JSON.stringify(req.body));
      }

      // End the proxy request
      proxyReq.end();
    });

    // Wait for the proxy request to complete and send the response
    const responseBody = await proxyRequest;
    res.send(responseBody);
  } catch (error) {
    console.error('Proxy error:', error);
    res.status(500).json({ error: 'Proxy request failed' });
  }
};
