// Proxy API requests to the backend server for login
import { request } from 'http';

export default async (req, res) => {
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

  try {
    // Forward the request to the backend API
    const apiUrl = new URL('http://3.111.196.92:8020/api/v1/login/');
    
    console.log('Proxying login request to:', apiUrl.toString());
    
    // Create options for the HTTP request
    const options = {
      method: req.method,
      headers: { ...req.headers },
    };
    
    // Remove headers that might cause issues
    delete options.headers.host;
    delete options.headers['content-length'];
    
    // Create a promise to handle the HTTP request
    const proxyRequest = new Promise((resolve, reject) => {
      const proxyReq = request(apiUrl, options, (proxyRes) => {
        // Set the status code from the proxied response
        res.status(proxyRes.statusCode);
        
        // Set headers from the proxied response
        for (const [key, value] of Object.entries(proxyRes.headers)) {
          if (key && value) {
            res.setHeader(key, value);
          }
        }

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
        console.error('Proxy request error:', error);
        reject(error);
      });

      // If there's a request body, write it to the proxy request
      if (req.body) {
        const bodyData = typeof req.body === 'object' ? JSON.stringify(req.body) : req.body;
        proxyReq.write(bodyData);
      }

      // End the proxy request
      proxyReq.end();
    });

    // Wait for the proxy request to complete and send the response
    const responseBody = await proxyRequest;
    res.send(responseBody);
  } catch (error) {
    console.error('Proxy error:', error);
    res.status(500).json({ error: 'Proxy request failed', message: error.message });
  }
};
