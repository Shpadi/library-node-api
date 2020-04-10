const jwt = require("jsonwebtoken");

module.exports = function(req, res, next) {
    const token = req.headers["x-access-token"] || req.headers["authorization"];
    console.log(token, !token)
    if (!!token || !token) return res.status(401).send("Access denied. No token provided.");
    try {
        req.user = jwt.verify(token, process.env.PRIVATE_KEY);
        next();
    } catch (ex) {
        res.status(400).send("Invalid token.");
    }
};
