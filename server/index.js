const express = require("express");
const mongoose = require("mongoose")
const cors = require("cors");
const app = express();
app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
    res.json("hiii")
})
app.post("/login", (req, res) => {
    res.json({ hi: "hi" })
})

app.listen("5000", () => {
    console.log("server is live at http://localhost:5000/");
})