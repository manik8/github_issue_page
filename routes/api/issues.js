const express = require("express");
const router = express.Router();
const { check, validationResult } = require("express-validator");

const ISSUE = require("../../models/Issue");

// @route    POST api/add-issue
// @desc     Create a issue
// @access   Public
router.post(
  "/add-issue",
  [
    check("name", "Project Name is Required").not().isEmpty(),
    check("description", "Issue Description is required").not().isEmpty(),
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      res.status(400).json({ errors: errors.array() });
    }
    const { name, description } = req.body;
    try {
      const newIssue = new ISSUE({
        name,
        description,
      });

      const issue = await newIssue.save();
      res.send(issue);
    } catch (err) {
      console.error(err.message);
      res.status(500).send("Server Error");
    }
  }
);

// @route    GET api/get-issue
// @desc     GET an issue
// @access   Public

router.get("/get-issue", async (req, res) => {
  try {
    const issues = await ISSUE.find().sort({ date: -1 });
    res.send(issues);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
});
module.exports = router;
