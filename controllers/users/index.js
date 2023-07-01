const { getCurrent } = require("./getCurrent");
const { login } = require("./login");
const { logout } = require("./logout");
const { register } = require("./register");
const { updateStatusUser } = require("./updateStatusUser");
const { updateAvatarURL } = require("./updateAvatarURL");
const { verify } = require("./verify");
const { resendVerify } = require("./resendVerify");

module.exports = {
  register,
  login,
  logout,
  getCurrent,
  updateStatusUser,
  updateAvatarURL,
  verify,
  resendVerify,
};