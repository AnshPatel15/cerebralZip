// Proxy API requests to the backend server for login
import { request } from 'http';

export default async (req, res) => {
  res.setHeader('Access-Control-Allow-Credentials', true);
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS,PATCH,DELETE,POST,PUT');
  res.setHeader('Access-Control-Allow-Headers', 'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version, Authorization');

  if (req.method === 'OPTIONS') {
    res.status(200).end();
    return;
  }

  try {
    const apiUrl = new URL('http://3.111.196.92:8020/api/v1/login/');
    
    console.log('Proxying login request to:', apiUrl.toString());
    
    const options = {
      method: req.method,
      headers: { ...req.headers },
    };
    
    delete options.headers.host;
    delete options.headers['content-length'];
    
    const proxyRequest = new Promise((resolve, reject) => {
      const proxyReq = request(apiUrl, options, (proxyRes) => {
        res.status(proxyRes.statusCode);
        
        for (const [key, value] of Object.entries(proxyRes.headers)) {
          if (key && value) {
            res.setHeader(key, value);
          }
        }

        const chunks = [];
        proxyRes.on('data', (chunk) => chunks.push(chunk));
        proxyRes.on('end', () => {
          const body = Buffer.concat(chunks);
          resolve(body);
        });
      });

      proxyReq.on('error', (error) => {
        console.error('Proxy request error:', error);
        reject(error);
      });

      if (req.body) {
        const bodyData = typeof req.body === 'object' ? JSON.stringify(req.body) : req.body;
        proxyReq.write(bodyData);
      }
      proxyReq.end();
    });

    const responseBody = await proxyRequest;
    res.send(responseBody);
  } catch (error) {
    console.error('Proxy error:', error);
    res.status(500).json({ error: 'Proxy request failed', message: error.message });
  }
};
