const { User, userJoiSchemas } = require("./users");
const { schemas, Contact } = require("./contacts");

module.exports = {
  User,
  Contact,
  userJoiSchemas,
  schemas,
};