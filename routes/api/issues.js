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

router.get("/list-issue", async (req, res) => {
  try {
    const issues = await ISSUE.find().sort({ date: -1 });
    res.send(issues);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
});

// @route    PATCH api/update-issue/:id
// @desc     Update an issue
// @access   Public

router.patch("/update-issue/:id", async (req, res) => {
  const { description } = req.body;
  try {
    let issue = await ISSUE.findById(req.params.id);

    if (issue) {
      issue.description = description;
      issue = await issue.save();
    }

    res.send(issue);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
});

// @route    DELETE api/delete-issue/:id
// @desc     Delete an issue
// @access   Public

router.delete("/delete-issue/:id", async (req, res) => {
  try {
    const issue = await ISSUE.findById(req.params.id);
    await issue.remove();

    res.send("Issue has been Deleted");
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
});
module.exports = router;
