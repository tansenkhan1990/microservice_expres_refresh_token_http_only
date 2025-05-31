const authService = require("../services/authService");

exports.login = async (req, res) => {
    const { username, password } = req.body;
    const response = await authService.login(username, password);

    // Store refresh token in HTTP-only cookie
    res.cookie("refreshToken", response.refreshToken, { httpOnly: true, secure: true });

    // Return only the access token
    res.json({ accessToken: response.accessToken });
};

exports.refreshToken = async (req, res) => {
    const refreshToken = req.cookies.refreshToken; // Get from cookies

    if (!refreshToken) {
        return res.status(403).json({ message: "No refresh token provided" });
    }

    const newAccessToken = await authService.refreshToken(refreshToken);

    if (!newAccessToken) {
        return res.status(403).json({ message: "Invalid or expired refresh token" });
    }

    res.json({ accessToken: newAccessToken });
};

exports.logout = (req, res) => {
    res.clearCookie("refreshToken"); // Clear the refresh token cookie
    res.json({ message: "Logged out successfully" });
};
