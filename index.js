const express = require('express');
const app = express();
/*app.use(function(request, response){
    console.log("A new request");
    response.send("We got a request and this is the response");
})*/

app.get('/', (req, res) => {
    res.send('Welcome to the new express app')
})

app.get('/abhijit', (req, res) => {
    res.send('Hello Abhijit!')
})

app.post('/abhijit', (req, res) => {
    res.send('Hello Abhijit! This is a post request')
})

app.get('/pattanaik', (req, res) => {
    res.send('Hello Pattanaik!')
})

app.get('/abhijit/:param', (req, res) => {
    console.log(req.params);
    res.send('Hello Abhijit!' + req.params.param);
})

app.get('/abhijit/:param/:new', (req, res) => {
    console.log(req.params);
    res.send('Hello Abhijit!' + req.params.param + req.params.new);
})

app.get('/search', (req, res) => {
    console.log(req.query);
    if(!req.query.name) {
        res.send('Nothing is searched !!!!!');
    } else {
        res.send('Hello Abhijit!' + req.query.name);
    }
})

app.get('*', (req, res) => {
    res.send('No route available!!!!')
})

app.listen(3000, function() {
    console.log("Listening to Port 3000");
})