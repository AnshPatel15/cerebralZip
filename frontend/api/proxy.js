// General API proxy for all endpoints
export default async function handler(req, res) {
  // Get the path from the request
  const { path } = req.query;
  
  if (!path) {
    return res.status(400).json({ message: 'Path parameter is required' });
  }

  try {
    // Construct the full URL to the backend API
    const apiUrl = `http://3.111.196.92:8020/api/${path}`;
    
    // Forward the request with the same method, headers, and body
    const response = await fetch(apiUrl, {
      method: req.method,
      headers: {
        'Content-Type': 'application/json',
        ...req.headers
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
    console.error(`API proxy error for path ${path}:`, error);
    return res.status(500).json({ 
      message: 'Internal server error', 
      error: error.message,
      path: path
    });
  }
}
