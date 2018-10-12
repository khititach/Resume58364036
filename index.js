const express = require('express')
const app = express()
const port = 8000
const path = require('path')

//app.use('/static', express.static('public'))

//app.get('/', (req, res) => res.sendFile(path.join(__dirname + '/index.html')))
//app.get('/', (req, res) => res.sendFile(path.join(__dirname + '/resume/index.html')))

app.use(express.static(path.join(__dirname, 'resume')));

app.get('/*', function(req, res){
  res.sendFile(path.join(__dirname, 'resume', 'index.html'));
});

app.listen(port, () => console.log('app listening on port'+port))

