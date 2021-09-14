require("dotenv").config();

const express = require("express");

const connectDB = require("./src/config/db");
const errorHandler = require("./src/middleware/errorHandler");
const path = require("path");
const cors = require("cors");

connectDB();

const app = express();

// Middleware
app.use(express.json());
app.use(cors())

// Routes
app.use("/api/v1/bootcamps", require("./src/routes/bootcampRoutes"));

app.get("/test",(req, res)=>res.send("api is working"))

if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));

  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
  });
}

// Error Handler
app.use(errorHandler);

const PORT = process.env.PORT || 7000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
