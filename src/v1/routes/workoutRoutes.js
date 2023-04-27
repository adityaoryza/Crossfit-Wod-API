const express = require("express");
// mmiddleware to cache
const apicache = require("apicache");
const workoutController = require("../../controllers/workoutController");
const recordController = require("../../controllers/recordController");
const router = express.Router();
const cache = apicache.middleware;
// middlware to check for security issues
// const authenticate = require("../../middlewares/authenticate");
// const authorize = require("../../middlewares/authorize");

// to documentation this API using openAPI documentation
// NOTE : future task => document all the routes on the swagger
/**
 * @openapi
 * /api/v1/workouts:
 *   get:
 *     tags:
 *       - Workouts
 *     parameters:
 *       - in: query
 *         name: mode
 *         schema:
 *           type: string
 *         description: The mode of a workout
 *     responses:
 *       200:
 *         description: OK
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 status:
 *                   type: string
 *                   example: OK
 *                 data:
 *                   type: array
 *                   items:
 *                     $ref: "#/components/schemas/Workout"
 *       5XX:
 *         description: FAILED
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 status:
 *                   type: string
 *                   example: FAILED
 *                 data:
 *                   type: object
 *                   properties:
 *                     error:
 *                       type: string
 *                       example: "Some error message"
 */

// caching to get faster performance
router.get("/", cache("2 minutes"), workoutController.getAllWorkouts);

router.get("/", workoutController.getAllWorkouts);

router.get("/:workoutId", workoutController.getOneWorkout);

// record routes
router.get("/:workoutId/records", recordController.getRecordForWorkout);

// example of security check using middleware
// router.post("/", authenticate, authorize, workoutController.createNewWorkout);

router.post("/", workoutController.createNewWorkout);

router.patch("/:workoutId", workoutController.updateOneWorkout);

router.delete("/:workoutId", workoutController.deleteOneWorkout);

module.exports = router;
