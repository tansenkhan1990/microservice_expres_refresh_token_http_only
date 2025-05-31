require("dotenv").config();
const express = require("express");
const gatewayRoutes = require("./routes/gatewayRoutes");

const app = express();
app.use(express.json());
app.use("/gateway", gatewayRoutes);

app.listen(8080, () => console.log("✅ API Gateway running on port 8080"));
