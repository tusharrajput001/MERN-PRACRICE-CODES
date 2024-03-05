const express = require("express");
const https = require("https");
const bodyParser = require("body-parser")

const app = express();

app.use(bodyParser.urlencoded({extended:true}));



app.get("/", function(req,res){

    res.sendFile(__dirname + "/index.html")

 

});

app.post("/",function(req,res) {
    
    console.log(req.body.zipName);


    const zip = req.body.zipName
    const cntry = "in"
    const url = "https://api.openweathermap.org/data/2.5/weather?zip=" + zip + "," + cntry + "&appid=6574d19087c616db868bc04d9fffda77"
    https.get(url,function(response){
        console.log(response.statusCode);

        response.on("data", function(data){
            const weatherData = JSON.parse(data)
            const temp = weatherData.main.temp-273
            const place = weatherData.name
            const wdesc = weatherData.weather[0].description
           
            res.write("<h1>The temprature in  "+ place + " is : " + Math.round(temp) + " DegCelcius   " + wdesc + "</h1>")

            const icon_code = weatherData.weather[0].icon
            const url = `https://openweathermap.org/img/wn/${icon_code}@2x.png`
            res.write(`<img src=${url}>`)
            
            

 
        })
    })
})

app.listen(3000, function(){
    console.log("Server is running is port 3000");
})