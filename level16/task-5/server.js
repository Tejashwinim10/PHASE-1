const express = require('express');
const app = express();
const PORT = 3000;

app.get('/search', (req, res) => {
  const query = req.query.q || 'none';
  const limit = req.query.limit || 5;
  res.send(`Search for: ${query}, Limit: ${limit}`);
});

app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});
