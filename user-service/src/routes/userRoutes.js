const express = require("express");
const userController = require("../controllers/userController");
const authMiddleware = require("../middleware/authMiddleware");

const router = express.Router();
router.use(authMiddleware.verifyToken);
router.get("/profile", userController.getUserProfile);
router.patch("/profile", userController.updateUserProfile);

module.exports = router;
