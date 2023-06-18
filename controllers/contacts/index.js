const { addNewContact } = require("./addNewContact");
const { deleteContact } = require("./deleteContact");
const { getAll } = require("./getAll");
const { getById } = require("./getById");
const { updateById } = require("./updateById");
const { updateStatusContact } = require("./updateStatusContact");

module.exports = {
  updateStatusContact,
  updateById,
  getById,
  getAll,
  deleteContact,
  addNewContact,
};