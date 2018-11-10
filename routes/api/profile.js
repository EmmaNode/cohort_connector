// fetch or create user profile, location, bio, experience, education, social net links

// @route   GET api/profile/test
// @desc    Tests profile route
// @access  Public

const express = require("express");
const router = express.Router();

router.get("/test", (req, res) => res.json({ msg: "Profile works" }));

module.exports = router;
