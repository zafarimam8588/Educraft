const express = require("express");
const router = express.Router();
const { auth, isInstructor } = require("../middleware/authMiddleware");

const {
  deleteAccount,
  profileUpdate,
  getAllUserDetails,
  updateDisplayPicture,
  getEnrolledCourses,
  instructorDashboard,
} = require("../controllers/Profile");
const { isDemo } = require("../middleware/demo");

router.delete("/deleteProfile", auth, isDemo, deleteAccount);
router.put("/updateProfile", auth, isDemo, profileUpdate);
router.get("/getUserDetails", auth, getAllUserDetails);
router.get("/getEnrolledCourses", auth, getEnrolledCourses);
router.put("/updateDisplayPicture", auth, isDemo, updateDisplayPicture);
router.get(
  "/getInstructorDashboardDetails",
  auth,
  isInstructor,
  instructorDashboard
);

module.exports = router;
