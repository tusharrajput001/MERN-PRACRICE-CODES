
con 
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



// 75fdc7b433d767c0cd4ab0f2dbf0de07-us11


// List id
// e96fd0a81d  