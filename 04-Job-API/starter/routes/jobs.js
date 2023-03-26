const express = require("express");
const router = express();

const {
  getAllJobs,
  getJob,
  updateJob,
  deleteJob,
  createJob,
} = require("../controllers/jobs");

router.get("/", getAllJobs);
router.get("/:id", getJob);
router.post("/", createJob);
router.patch("/:id", updateJob);
router.delete("/:id", deleteJob);

module.exports = router;
