const express = require('express');
const res = require('express/lib/response');
const app= express();
app.get('/',(req,res)=>{
    res.send('Hello,Node.js!');
});
const port=3000;
app.listen(port, ()=>{
    console.log('server running on port ${port}');
});