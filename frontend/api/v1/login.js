// Specific handler for login endpoint
export default async function handler(req, res) {
  // Only allow POST requests for login
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  try {
    console.log('Login request received');
    
    // Forward the request to the actual API
    const response = await fetch('http://3.111.196.92:8020/api/v1/login/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify(req.body),
    });

    // Get the response data
    const data = await response.json();
    console.log('Login response:', data);

    // Return the response with the same status
    return res.status(response.status).json(data);
  } catch (error) {
    console.error('Login API error:', error);
    return res.status(500).json({ 
      message: 'Internal server error', 
      error: error.message 
    });
  }
}
