require('dotenv').config()
const express = require('express');

const app = express();

const port = 3000;

app.get('/',(req,res)=>{
    res.send(`hello guys\nwe are DP Medicine`);
})

app.get('/login',(req,res)=>{
    res.send("here is the Login page of DP medicine");
})

app.get('/twitter',(req,res)=>{
    res.send("DP_Medicinedotcom")
})

app.get('/youtube',(req,res)=>{
    res.send("<h2>DP Medicine</h2>");
})

app.listen(port,()=>{
    console.log(`DP Medicine app listening on port ${port}`);
})