const express = require('express');
const path = require('path');
const app = express();
const port = process.env.PORT || 3000;

// middleware static files
app.use(express.static(path.join(__dirname, 'public')));


// get index.html file
app.get('/', (req, res) => {
    res.sendFile(index.html);
} );

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});