const express = require('express');
const app = express();
const PORT = 3000;

app.get('/', (req, res) => {
    res.send('Welcome to our Clean Code Sample Project! We are thrilled to have you here!');
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});