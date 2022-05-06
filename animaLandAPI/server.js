const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const multer = require("multer");
const cloudinary = require("cloudinary");

const uploadFile = require("./helpers/uploadFile.js");

require("dotenv").config();

const connectDB = require("./config/db.js");
connectDB();

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Configure Cors to be able to use the server for a front-end application
const CORS_OPTIONS = {
  origin: process.env.REACT_APP_API_URL,
  credentials: true,
  allowedHeaders: ["Content-Type", "Authorization"],
};

app.use(cors(CORS_OPTIONS));

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", process.env.REACT_APP_API_URL);
  res.setHeader("Access-Control-Allow-Methods", "POST,GET,OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization");
  res.setHeader("Access-Control-Allow-Credentials", true);
  if (req.method === "OPTIONS") {
    return res.sendStatus(200);
  }
  next();
});

app.use("/api/users", require("./routes/userRouter"));
app.use("/api/products", require("./routes/productRouter"));
app.use("/auth", require("./routes/authRouter"));

const storage = multer.memoryStorage();
const upload = multer({ storage });

cloudinary.config({
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.CLOUD_API_KEY,
  api_secret: process.env.CLOUD_API_SECRET,
});

app.post("/files", upload.single("file"), uploadFile);

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server started on port ${port}`));
