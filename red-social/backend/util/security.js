const jwt = require("jsonwebtoken");

exports.sign = function (payload) {
  return jwt.sign(payload, process.env.JWT_SECRET);
};

exports.verify = function (token) {
  return jwt.verify(token, process.env.JWT_SECRET);
};
