// require("dotenv").config();
const express = require("express");
const app = express();
const mongoose = require("mongoose");
const cors = require("cors");
const PORT = process.env.PORT || 3001;
const DATABASE_URL = "mongodb://localhost:27017/blocks";

mongoose.connect(DATABASE_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;
db.on("error", (error) => console.log(error));
db.once("open", () => console.log("Connected to database"));

// Handling JSON
app.use(express.json());
app.use(express.urlencoded());

// Cross-origin resource sharing

app.use(cors());

// Static folder and files
// app.use(express.static("public"));

// routers
app.use("/operations", require("./routes/operations"));
app.use("/block", require("./routes/block"));

// Server start
app.listen(PORT, () => {
  console.log("Server running on port", PORT);
});
