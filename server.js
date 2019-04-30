const express = require('express');
const app = express();
const path = require('path');

app.use('/static', express.static(__dirname + "/public"));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'))
});

app.get('/api/whoami', (req, res) => {
    const ip = req.headers['x-forwarded-for'] || req.connection.remoteAddress;
    res.json({
        ipaddress: ip,
        language: req.headers['accept-language'],
        software: req.headers['user-agent']      
    });
});

app.listen(3000, ()=> {
    console.log("Your app is listening on port 3000");
})