const jwt = require("jsonwebtoken");

const SECRET = process.env.SECRET_KEY;
const REFRESH_SECRET = process.env.REFRESH_SECRET_KEY;
const refreshTokens = [];

exports.login = (username, password) => {
    const accessToken = jwt.sign({ username }, SECRET, { expiresIn: "15m" });
    const refreshToken = jwt.sign({ username }, REFRESH_SECRET, { expiresIn: "7d" });

    refreshTokens.push(refreshToken);

    return { accessToken, refreshToken };
};

exports.refreshToken = (refreshToken) => {
    if (!refreshTokens.includes(refreshToken)) return null;

    return jwt.sign({ username: jwt.decode(refreshToken).username }, SECRET, { expiresIn: "15m" });
};
