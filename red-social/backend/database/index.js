const mongoose = require("mongoose");
const logger = require("../util/logger");
const UserSchema = require("./schemas/user");
const PostSchema = require("./schemas/post");

function connect() {
  return mongoose
    .connect(process.env.MONGO_URI)
    .then(function () {
      logger.info("Conectado a la base de datos");
    })
    .catch(function (error) {
      logger.error("No se pudo establecer conexión con la base de datos");
      logger.error(error.message);
    });
}

module.exports = {
  connect,
  models: {
    User: mongoose.model("users", UserSchema),
    Post: mongoose.model("posts", PostSchema),
  },
};
