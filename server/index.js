const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const mongoose = require("mongoose");
const app = express();

mongoose.connect("",
{
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false
}).then(db => console.log("DB is connected")).catch(err => console.error(err));


// Settings

app.set("port", process.env.PORT || 5000);


// Middlewares

app.use(morgan("dev"));
app.use(express.json());
app.use(cors());


// Routes






// Server Listening

app.listen(app.get("port"), () =>
{
    console.log("Server on port", app.get("port"));
});