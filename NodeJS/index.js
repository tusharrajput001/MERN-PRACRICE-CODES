const http = require("http");
// import fs from "fs"
const fs = require("fs");

const home = fs.readFileSync("./index.html");

console.log(home)

const server = http.createServer((req,res) =>{
//   res.end("Noicee")
//   res.end("<h1>Noicees </h1>")

    if(req.url === "/about"){
        res.end("<h1>About Page</h1>")
    }

    
    else if(req.url === "/Contact"){
        res.end("<h1>Contact Page</h1>")
    }

    
    else if(req.url === "/"){
        res.end(home)
    }

    else{
        res.end("<h1>Page Not Found</h1>")
    }







});




server.listen(5000,()=>{
    console.log("Server is working");
})


