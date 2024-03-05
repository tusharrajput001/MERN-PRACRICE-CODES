const express = require('express')
const bodyParser = require("body-parser")



const app = express()
app.use(bodyParser.urlencoded({extended:true}));


app.get('/',function (req,res){
    res.sendFile(__dirname + "/index.html")
})

app.get("/bmicalculator",function(req,res){
    res.sendFile(__dirname + "/bmiCalculator.html")
})


app.post("/bmicalculator" ,function(req,res){
    var w = Number(req.body.weight)
    var h = Number(req.body.height)
    var bmi = w/(h*h)
    res.send(bmi.toString())

})


app.post("/",function (req,res) {
    
    var n1 = Number(req.body.num1)
    var n2 = Number(req.body.num2)
    var result = n1+n2
    res.send(result.toString())
})


app.listen(3000, ()=>{
    console.log('Server started at 3000')
})