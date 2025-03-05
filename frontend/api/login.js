// Vercel serverless function
export default async function handler(req, res) {
  // Only allow POST requests
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  try {
    // Forward the request to the actual API
    const response = await fetch('http://3.111.196.92:8020/api/v1/login/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(req.body),
    });

    // Get the response data
    const data = await response.json();

    // Return the response with the same status
    return res.status(response.status).json(data);
  } catch (error) {
    console.error('API proxy error:', error);
    return res.status(500).json({ message: 'Internal server error', error: error.message });
  }
}
