require("dotenv").config();
const express = require("express");
const cookieParser = require("cookie-parser");
const authRoutes = require("./routes/authRoutes");

const app = express();

app.use(express.json());
app.use(cookieParser()); // Allows HTTP-only cookie handling

app.use("/auth", authRoutes);

app.listen(5000, () => console.log("✅ Auth Service running on port 5000"));
