import express from 'express'
const app = express();
const port = 3000;


const logger = (req, res, next) => {
  const timestamp = new Date().toISOString();
  const method = req.method;
  const url = req.url;
  console.log(`[${timestamp}] ${method} ${url}`);
  next(); 
};
app.use(logger);
app.get('/', (req, res) => {
  res.send('Welcome to the Home Page');
});

app.get('/about', (req, res) => {
  res.send('This is the About Page');
});

app.get('/contact', (req, res) => {
  res.send('Contact us at contact@example.com');
});

app.post('/submit', (req, res) => {
  res.send('Form submitted successfully!');
});
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
