const { HttpError, ctrlWrapper } = require("../../helpers");

const { Contact } = require("../../models");

const deleteContact = async (req, res) => {
  const { contactId } = req.params;
  const result = await Contact.findByIdAndRemove(contactId);
  if (!result) {
    throw HttpError(404, "Not found");
  }
  res.status(200).json("Contact deleted");
};

module.exports = { deleteContact: ctrlWrapper(deleteContact) };