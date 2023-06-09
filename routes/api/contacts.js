const express = require("express");

const router = express.Router();

const { validateBody, isValidId, isValidBody } = require("../../middlewares");

const { schemas } = require("../../models/contacts");

const contactsController = require("../../controllers/contacts");

router.get("/", contactsController.getAll);

router.get("/:contactId", isValidId, contactsController.getById);

router.post("/", validateBody(schemas.addSchema), contactsController.addNewContact);

router.delete("/:contactId", isValidId, contactsController.deleteContact);

router.put("/:contactId", isValidId, validateBody(schemas.addSchema), contactsController.updateById);

router.patch("/:contactId", isValidId, isValidBody, validateBody(schemas.favoriteSchema), contactsController.updateStatusContact);

module.exports = router;
