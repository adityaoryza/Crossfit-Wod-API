The Crossfit Wod API is an open-source project that provides a simple API for accessing Crossfit workout of the day (WOD) information. The project is hosted on Github and is available under the MIT license.

## Postman Documentation:
    https://documenter.getpostman.com/view/24306967/2s9YeHZqMD
## Installation:

To use the Crossfit Wod API, you will need to have Node.js installed on your computer. Once you have Node.js installed, you can install the Crossfit Wod API by cloning the repository from Github and installing the dependencies.

Clone the repository:

    bash

    git clone https://github.com/adityaoryza/Crossfit-Wod-API.git

Navigate to the project directory:

    bash

    cd Crossfit-Wod-API

Install the dependencies:

    npm install

## Usage:

To start the server, run the following command:

    sql

    npm start

The server will start listening on port 3000 by default. You can access the API by making requests to http://localhost:3000/api/workouts.

Endpoints:

The Crossfit Wod API provides the following endpoints:

    GET /api/workouts - Returns All Workouts Data

Example usage:

To get all Workouts Data:

    bash

    GET http://localhost:3000/api/workuts/

Response:

swift

{
"date": "2023-04-27",
"title": "AMRAP 20",
"description": "5 strict pull-ups\n10 push-ups\n15 air squats",
"score_type": "Rounds and Reps"
}

To get onli five workouts:

    bash

    GET localhost:3000/api/v1/workouts?length=5

Response:

swift

{
"date": "2023-04-26",
"title": "For time",
"description": "100 double unders\n80 sit-ups\n60 kettlebell swings (24/16 kg)\n40 wall balls (20/14 lbs)\n20 burpees",
"score_type": "Time"
}

## API Documentation

API documentation is available when you run the program, the documentation link are available at the terminal console.

## Contributing:

Contributions to the Crossfit Wod API are welcome. If you would like to contribute, please fork the repository and submit a pull request.

## License:

The Crossfit Wod API is available under the MIT license. See the LICENSE file for more information.
