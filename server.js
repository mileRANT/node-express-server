const express = require("express");

const app = express();  //looks similar to python/flask

// app.listen(3000); //listens to a specific port. run this by using node
//note that ctrl+c will exit the node loop
//often request and response and shortened to req and res
app.get("/", function(req, res){
    // console.log(request);
    res.send("Hello");
});


app.listen(3000, function(){
    //callback function so we can see it respond in node
    console.log("Server started on port 3000");
});
