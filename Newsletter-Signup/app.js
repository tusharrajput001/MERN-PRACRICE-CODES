
const express = require("express")
const bodyParser = require("body-parser")
const request = require("request")


const app = express()

app.use(bodyParser.urlencoded({extended:true}));


app.use(express.static("public"));


app.get("/",function (req,res) {
    res.sendFile(__dirname + "/signup.html")

})


app.post("/",function(req,res){
    var fname = req.body.fname
    var lname = req.body.lname
    var email = req.body.email


    
    console.log(fname,lname,email)
})





app.listen(3000,function(){
    console.log("server running at 3000 port")
})