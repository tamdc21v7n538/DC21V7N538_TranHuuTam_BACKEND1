const express = require("express");
const contacts = require("../controllers/contact.controller");

const router = express.Router();

router.route("/")
    .get(contacts.findAll)
    .post(contacts.create)
    .delete(contacts.deleteAll);


router.route("/favorite")
    .get(contact.findAllFavorite);


router.route("/:id")
    .get(contacts.findOne)
    .put(contacts.update)
    .delete(contact.delete);


module.exports = router;