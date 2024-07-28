const express = require("express");
const cors = require("cors");
const axios = require("axios");
const bodyParser = require("body-parser");

const app = express();
app.use(cors({ origin: true }));
app.use(bodyParser.json());  // Use body-parser to parse JSON bodies

app.post("/authenticate", async (req, res) => {
  const { username } = req.body;

  if (!username) {
    return res.status(400).json({ error: "Username is required" });
  }

  try {
    const r = await axios.put(
      'https://api.chatengine.io/users/',
      { username: username, secret: username, first_name: username, last_name: username },
      { headers: { "private-key": "aed39ec9-c330-4a25-afa2-50658e373b79" } }
    );
    return res.status(r.status).json(r.data);
  } catch (e) {
    return res.status(e.response ? e.response.status : 500).json(e.response ? e.response.data : { error: "Internal Server Error" });
  }
});

app.listen(3001, () => {
  console.log("Server is running on port 3001");
});
