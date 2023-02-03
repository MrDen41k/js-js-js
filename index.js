const express = require('express');
const app = express();
const http = require('http');
const server = http.createServer(app);
const config = require('./config');
server.listen(9666, () => {
    console.log(`Server is started on port ${config}`);
})

app.get('/', (req, res)=>{
    res.sendFile(__dirname + '/index.html')
})
app.get('/blog', (req, res)=>{
    res.sendFile(__dirname + '/blog.html')
})
app.get('/about', (req, res)=>{
    res.sendFile(__dirname + '/about.html')
})
app.get('/rate', (req, res)=>{
    res.sendFile(__dirname + '/rate.html')
})
app.use('/public', express.static(__dirname + '/static'))
console.log(__dirname)