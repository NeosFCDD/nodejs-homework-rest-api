const { HttpError, ctrlWrapper, sendEmail } = require("../../helpers");
const { User } = require("../../models");

require("dotenv").config();

const { BASE_URL } = process.env;

const resendVerify = async (req, res) => {
  const { email } = req.body;
  const user = await User.findOne({ email });
  if (!email) {
    throw HttpError(400, "This email not found in database");
  }
  if (!user) {
    throw HttpError(401, "User not found");
  }
  if (user.verify) {
    throw HttpError(400, "You already verify");
  }

  const verifyEmail = {
    to: email,
    subject: "Resend verify Email",
    html: `<a target="_blank" href="${BASE_URL}api/users/verify/${user.verifycationCode}">Click to verify email</a>`,
  };
  await sendEmail(verifyEmail);

  res.json({ message: "Verify email send successfull" });
};
module.exports = { resendVerify: ctrlWrapper(resendVerify) };