const express = require("express");
const { ObjectId } = require("mongodb");
const router = express.Router();
const dbo = require("../db/connection");

// Get all contacts
router.get("/", async (req, res) => {
  const db = dbo.getDb();
  const contacts = await db.collection("contacts").find({}).toArray();
  res.json(contacts);
});

// Get contact by ID
router.get("/:id", async (req, res) => {
  const db = dbo.getDb();
  const contact = await db
    .collection("contacts")
    .findOne({ _id: new ObjectId(req.params.id) });
  res.json(contact);
});

module.exports = router;
