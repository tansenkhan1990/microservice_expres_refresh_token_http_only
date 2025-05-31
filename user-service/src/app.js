require("dotenv").config();
const express = require("express");
const userRoutes = require("./routes/userRoutes");

const app = express();
app.use(express.json());
app.use("/users", userRoutes);

app.listen(5001, () => console.log("✅ User Service running on port 5001"));
