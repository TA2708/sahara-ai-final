const express = require("express");
const mongoose = require("mongoose");
const authRoutes = require("./routes/auth");
const bodyParser = require("body-parser");
const cors = require("cors");

require("dotenv").config();

const app = express();

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Routes
app.use("/api/auth", authRoutes);

// Mongodb COnnection
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB Database Connected SUccesfully....."))
  .catch((err) => console.log(err));

  const PORT = process.env.PORT || 5005

  app.listen(PORT, ()=> console.log(`Server is running on port ${PORT}`))