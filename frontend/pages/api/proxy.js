// export default async function handler(req, res) {
//   const { endpoint } = req.query;
//   const apiUrl = `http://3.111.196.92:8020/api/v1/${endpoint || ''}`;

//   try {
//     const response = await fetch(apiUrl, {
//       method: req.method,
//       headers: {
//         "Content-Type": "application/json",
//         Accept: "application/json",
//       },
//       body: req.method === "POST" ? JSON.stringify(req.body) : null,
//     });

//     const data = await response.json();
//     res.status(response.status).json(data);
//   } catch (error) {
//     res.status(500).json({ error: "Failed to connect to API" });
//   }
// }