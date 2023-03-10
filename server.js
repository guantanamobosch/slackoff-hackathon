const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send('<h1>Hey there</h1>');
})

app.listen(4000, () => {
    console.log('I am listening on port 4000');
})