const userService = require("../services/userService");

exports.getUserProfile = async (req, res) => {
    const user = userService.getUser(req.user.username);
    if (!user) return res.status(404).json({ message: "User not found" });
    res.json(user);
};

exports.updateUserProfile = async (req, res) => {
    const updatedUser = userService.updateUser(req.user.username, req.body);
    if (!updatedUser) return res.status(400).json({ message: "User update failed" });
    res.json(updatedUser);
};
