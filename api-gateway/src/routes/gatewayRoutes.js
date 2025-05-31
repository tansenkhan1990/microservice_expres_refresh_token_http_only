const express = require("express");
const axios = require("axios");
const authMiddleware = require("../middleware/authMiddleware");

const router = express.Router();

router.use(authMiddleware.verifyToken);

// Proxy request to user profile endpoint
router.get("/profile", async (req, res) => {
    try {
        const response = await axios.get("http://user-service:5001/users/profile", {
            headers: { Authorization: `Bearer ${req.headers.authorization.split(" ")[1]}` }
        });
        res.json(response.data);
    } catch (error) {
        res.status(error.response?.status || 500).json({ message: "Error fetching user profile" });
    }
});

module.exports = router;
