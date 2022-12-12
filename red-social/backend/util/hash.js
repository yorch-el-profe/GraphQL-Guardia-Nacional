const bcrypt = require("bcrypt");

async function hash(text) {
  const salt = await bcrypt.genSalt(10);
  return bcrypt.hash(text, salt);
}

function compare(text, hash) {
  return bcrypt.compare(text, hash);
}

module.exports = {
  hash,
  compare,
};
