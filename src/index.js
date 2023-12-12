// require module
const express = require("express");
const bodyParser = require("body-parser");

// security
const helmet = require("helmet");

// caching
const apicache = require("apicache");
// routes v1 workouts
const v1WorkoutRouter = require("./v1/routes/workoutRoutes");
// API documentation
const { swaggerDocs: V1SwaggerDocs } = require("./v1/swagger");

const app = express();
const cache = apicache.middleware;
const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use(
  helmet.contentSecurityPolicy({
    directives: {
      defaultSrc: ["'self'"],
      scriptSrc: ["'self'", "https://www.google.com"],
      styleSrc: ["'self'"],
      imgSrc: ["'self'"],
      fontSrc: ["'self'"],
      frameSrc: ["'self'"],
    },
  })
);
// app.use(cache("2 minutes"));
app.use("/api/v1/workouts", v1WorkoutRouter);

app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
  console.log(`server running on http://localhost:${PORT}/api/v1/workouts`);
  // API documentation
  V1SwaggerDocs(app, PORT);
});
