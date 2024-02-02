const express = require("express");
const router = express.Router();
const apiController = require("../../controllers/api/apiControllers");

router.get("/profesions", apiController.profesions);
router.get("/candidates", apiController.candidates);


module.exports = router;
