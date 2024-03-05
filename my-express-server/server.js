const express = require('express')

const app = express()

const port = 3000

app.get("/",function(req,res){
    res.send("<h1>Hello World </h1>")

})

app.get("/contact",function(req,res){
    res.send("contact me at :tusharr0491@gmail.com")
})


app.get("/about",function(req,res){
    res.send("Hello i aasdm tushar rajput a web dev")
})


app.listen(port, ()=>{
    console.log('Server started at 3000')
})