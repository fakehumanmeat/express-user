const express = require('express');
const path = require('path');
const app = express();
const port = process.env.PORT || 3000;

// middleware static files
app.use(express.static(path.join(__dirname, 'public')));


// get static pages
app.get('/', (req, res) => {
    res.send('index.html');
});

app.get('/about', (req, res) => {
    res.json({ message: 'This is the about page' });
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});