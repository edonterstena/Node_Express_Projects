const express = require("express");
const router = express();
const {
  authenticateUser,
  authorizePermissions,
} = require("../middleware/authentication");

const {
  getAllUsers,
  getSingleUser,
  showCurrentUser,
  updateUserPassword,
  updateUser,
} = require("../controllers/userController");

router.get("/", authenticateUser, authorizePermissions, getAllUsers);
router.get("/showMe", showCurrentUser);
router.patch("/updateUser", updateUser);
router.patch("/updateUserPassword", updateUserPassword);
router.get("/:id", authenticateUser, getSingleUser);

module.exports = router;
