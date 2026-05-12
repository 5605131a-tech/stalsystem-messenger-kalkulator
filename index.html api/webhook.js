export default async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
 
  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }
 
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }
 
  try {
    const response = await fetch('https://hook.eu1.make.com/qjojq8dj8ppdj5thinkyd5dbds17ksuc', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(req.body)
    });
 
    const result = await response.text();
    return res.status(200).json({ success: true, makeResponse: result });
 
  } catch (error) {
    return res.status(500).json({ success: false, error: error.message });
  }
}
