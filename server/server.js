// require("dotenv").config();
const express = require("express");
const app = express();
// const mongoose = require("mongoose");
const cors = require("cors");
const PORT = process.env.PORT || 3001;

// mongoose.connect(process.env.DATABASE_URL, {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
// });

// const db = mongoose.connection;
// db.on("error", (error) => console.log(error));
// db.once("open", () => console.log("Connected to database"));

// Handling JSON
app.use(express.json());
app.use(express.urlencoded());

// Cross-origin resource sharing

app.use(cors());

// Static folder and files
// app.use(express.static("public"));

// routers
const operationsRouter = require("./routes/operations");
app.use("/operations", operationsRouter);

// Server start
app.listen(PORT, () => {
  console.log("Server running on port", PORT);
});
