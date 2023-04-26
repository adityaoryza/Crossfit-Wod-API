const express = require("express");
// mmiddleware to cache
const apicache = require("apicache");
const workoutController = require("../../controllers/workoutController");
const recordController = require("../../controllers/recordController");
const router = express.Router();
const cache = apicache.middleware;

// caching to get faster performance
router.get("/", cache("2 minutes"), workoutController.getAllWorkouts);

router.get("/", workoutController.getAllWorkouts);

router.get("/:workoutId", workoutController.getOneWorkout);

// record routes
router.get("/:workoutId/records", recordController.getRecordForWorkout);

router.post("/", workoutController.createNewWorkout);

router.patch("/:workoutId", workoutController.updateOneWorkout);

router.delete("/:workoutId", workoutController.deleteOneWorkout);

module.exports = router;
