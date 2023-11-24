const express = require('express')
const app=express();
// app.get('/',function(req,res){
//     res.send("hello world")

// })
const User = [
    {name: 'Arshiya', age:22, city:'Bangalore'},
    {name: 'shadab', age:33, city:'Pune'},
    {name: 'asif', age:24, city:'Mumbai'},
    ];

app.use(express.json())    // <==== parse request body as JSON
// app.listen(8080)
// app.listen(8080,()=>{
//     console.log("application is running on port 8080")
// })
app.post('/test', (req, res) => {
  res.json({requestBody: req.user})  // <==== req.body will be a parsed JSON object
})
//date function
const requestTime = function (req, res, next) {
    req.requestTime = Date.now()
    next()
  }
  app.use(requestTime)

app.get('/test', (req, res) => {
  let responseText = 'Hello World!<br>'
  responseText += `<small>Requested at: ${req.requestTime}</small>`
  res.send(responseText)
})

app.listen(8080)
    