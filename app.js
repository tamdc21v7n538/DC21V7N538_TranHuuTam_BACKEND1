const express = require("express");

const cors = require(const contactsRouter = require("./app/routes/contact.route");"cors");

const app = express();

app.use(cors());
app.use("/api/contacts", contactsRouter);

app.get("/", (req, res) => {
  res.json({ message: "Welcome to contact book Application." });
});

module.exports = app;
