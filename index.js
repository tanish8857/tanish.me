const fs = require("fs");
const path = require("path");
const express = require("express");
const { env } = require("process");
const app = express();
const cors = require("cors");
const port = process.env.PORT || 5000;
const mongoose = require("mongoose");

mongoose
  .connect(
    "mongodb+srv://Tanish:TanishAryan2003@cluster0.0yptwol.mongodb.net/Portfoliodb"
  )
  .then(() => {
    console.log("MongoDb connected");
  })
  .catch((err) => {
    console.log("error");
  });

const formSchema = new mongoose.Schema({
  name:{
    type: String,
    required: true,
  },
  email:{
    type: String,
    required: true,
  },
  message:{
    type: String,
    required: true,
  },
});

const collection = new mongoose.model("Form", formSchema);

// data = { name: "Tanish", email: "Tanish@cluster0.0y", message: "Hi Thanish" };

// collection.insertMany(data);
app.use(cors());
// const HTMLfile = fs.readFileSync("index.html", "utf-8");

// The code to host the files locally
const static_path = path.join(__dirname, "public");
app.use(express.static(static_path));

app.get("/", (req, res) => {
  res.send("File is uploading...");
});

app.post("/", (req, res) => {
  // redirect is addded to redirect on main page when submit is clicked
  res.redirect("/");
});
app.listen(port, () => {
  console.log("We are live");
});
