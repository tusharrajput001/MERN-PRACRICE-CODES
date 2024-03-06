const express = require("express");
const bodyParser = require("body-parser");

const app = express();

var items = ["Buy food","cook Food","eat Food"];



app.set('view engine', 'ejs');

// Configure body-parser middleware
app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static("Public"));

app.get("/", function(req, res) {
    var today = new Date();
    var options = {
        weekday: "long",
        day: "numeric",
        month: "long"
    };

    var day = today.toLocaleDateString("en-US", options)
    res.render('list', { kindOfDay: day,newListItems:items });
});

app.post("/", function(req, res) {
    // Log the value of req.body.NewInput
    var item = req.body.newItem;

    items.push(item);
    res.redirect("/");
    
});

app.listen(3000, function() {
    console.log("server started at port 3000 ");
});
