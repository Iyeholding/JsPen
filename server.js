const express = require("express");
const path = require("path");
const app = express();


app.get('/', function(request, response){
  response.sendFile(path.join(__dirname, './public', 'index.html'))

});
app.get('*', function(request, response){
  response.send('page not found')

});
app.get('/pen', function(request, response){
  response.sendFile(path.join(__dirname, './', 'pen.js'))
});

app.listen(1000, function() {
  console.log("Server is up port 1000")
});
