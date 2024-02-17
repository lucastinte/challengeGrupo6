const express = require("express");
const router = express.Router();
const apiController = require("../../controllers/api/apiControllers");

router.get("/profesions", apiController.professions);
router.get("/candidates", apiController.applicants);


router.post("/profesions", apiController.searchApplicantsByProfession);
router.post("/candidates", apiController.createApplicant);

router.put("/candidates/:id", apiController.updateApplicant);


router.delete("/candidates/:id", apiController.deleteApplicant);

module.exports = router;
