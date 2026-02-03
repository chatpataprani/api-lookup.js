export default async function handler(req, res) {
  const num = req.query.num;

  if (!num || !/^\d{10}$/.test(num)) {
    return res.status(400).json({
      error: "Invalid number. Must be 10 digits."
    });
  }

  const apiUrl =
    `https://darzz-num.vercel.app/api/v1/?api=DARZZ&num=${num}`;

  try {
    const response = await fetch(apiUrl);
    const data = await response.json();

    res.setHeader("Access-Control-Allow-Origin", "*");
    res.status(200).json(data);
  } catch (err) {
    res.status(500).json({
      error: "Failed to fetch external API"
    });
  }
}
