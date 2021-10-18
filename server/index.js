const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const mongoose = require("mongoose");
const app = express();

/*
mongoose.connect("",
{
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false
}).then(db => console.log("DB is connected")).catch(err => console.error(err));*/


// Settings

app.set("port", process.env.PORT || 5000);


// Middlewares

app.use(morgan("dev"));
app.use(express.json());
app.use(cors());


// Routes



// Static files

app.use(express.static(__dirname + "/public"));

if (process.env.NODE_ENV === 'production') 
{
    // Static folder
    app.use(express.static(__dirname + '/public/'));
  
    // Handle SPA
    app.get(/.*/, (req, res) => res.sendFile(__dirname + '/public/index.html'));
}


// Server Listening

app.listen(app.get("port"), () =>
{
    console.log("Server on port", app.get("port"));
});