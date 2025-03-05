// General API proxy for all endpoints
export default async function handler(req, res) {
  try {
    // Get the path from the URL
    const url = new URL(req.url, `http://${req.headers.host}`);
    const pathSegments = url.pathname.split('/').filter(Boolean);
    
    // Remove 'api' from the path segments if it exists
    if (pathSegments[0] === 'api') {
      pathSegments.shift();
    }
    
    // Reconstruct the path for the backend API
    const apiPath = pathSegments.join('/');
    
    // Construct the full URL to the backend API
    const apiUrl = `http://3.111.196.92:8020/api/${apiPath}${url.search}`;
    
    console.log(`Proxying request to: ${apiUrl}`);
    
    // Forward the request with the same method, headers, and body
    const response = await fetch(apiUrl, {
      method: req.method,
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        // Add any authentication headers if needed
        ...(req.headers.authorization && { 
          'Authorization': req.headers.authorization 
        })
      },
      // Only include body for POST, PUT, PATCH
      ...(["POST", "PUT", "PATCH"].includes(req.method) && {
        body: JSON.stringify(req.body)
      })
    });

    // Get the response data
    const data = await response.json();

    // Return the response with the same status
    return res.status(response.status).json(data);
  } catch (error) {
    console.error(`API proxy error:`, error);
    return res.status(500).json({ 
      message: 'Internal server error', 
      error: error.message
    });
  }
}
