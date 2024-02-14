const express = require("express");
const router = express.Router();
const apiController = require("../../controllers/api/apiControllers");

router.get("/profesions", apiController.professions);
router.get("/candidates", apiController.applicants);

module.exports = router;
