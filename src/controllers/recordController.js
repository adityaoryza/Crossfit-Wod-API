// record controller to handle the record route
const workoutService = require("../services/recordService");

const getRecordForWorkout = (req, res) => {
  try {
    const workoutId = req.params.workoutId;
    const record = workoutService.getRecordForWorkout(workoutId);
    res.send({ status: "OK", data: record });
  } catch (error) {
    res
      .status(error?.status || 500)
      .send({ status: "FAILED", data: { error: error?.message || error } });
  }
};

// NOTE : add CRUD methods on the future works
module.exports = {
  getRecordForWorkout,
};
