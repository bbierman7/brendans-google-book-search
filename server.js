const express = require("express");
const mongoose = require("mongoose");
const routes = require("./routes");

const app = express();
const PORT = process.env.PORT || 3001;

// Defining middleware below
app.use(express.urlencoded({ extended: true}));
app.use(express.json);

// Serving up static assets (usually on heroku)
if(process.env.NODE_ENV === "production"){
    app.use(express.static("client/build"))
};

app.get("/api/books", (req, res) => res.send("Hello World!!!"))
// Adding routes, both API and view
app.use(routes);

// Connecting to the Mongo DB
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost:27017/googlebooks", { useNewUrlParser: true });

// Starting the API server
app.listen(PORT, () => console.log("Now listening on http://localhost:" + PORT));


