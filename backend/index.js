const express=require('express');

const app=express();

app.get('/',(req,res)=>{
    res.send("Server is Started");
})

app.listen(5000);