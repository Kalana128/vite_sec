// Packages
import path from "path";
import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import cors from "cors"; // Import cors package

// Utils
import connectDB from "./config/db.js";
import userRoutes from "./routes/userRoutes.js";
import markRoutes from "./routes/markRoutes.js";

dotenv.config();
const port = process.env.PORT || 5000;

connectDB();

const app = express();

// Enable CORS

app.use(
  cors({
    origin: "http://localhost:5173", // or "*" for all origins
    credentials: true, // Allow credentials (cookies) to be included
  })
);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

// Conn Testing
app.get("/api", (req, res) => {
  res.send("Hello SEC Awareness");
});

// Users Route
app.use("/api/users", userRoutes);

app.use("/api/marks", markRoutes);

app.listen(port, () => console.log(`Server running on port: ${port}`));
