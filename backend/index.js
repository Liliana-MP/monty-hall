const Joi = require("joi");
const express = require("express");
const { boolean } = require("joi");
const cors = require("cors");
const app = express();

app.use(express.json());
app.use(cors());

const MINIMUM_DOORS = 1;
const MAXIMUM_DOORS = 3;

const doors = [1, 2, 3];

const randomizeSelectedDoor = () => {
  let selectedDoor = Math.floor(Math.random() * MAXIMUM_DOORS) + MINIMUM_DOORS;
  return selectedDoor;
};

const randomizeCarDoor = () => {
  let carDoor = Math.floor(Math.random() * MAXIMUM_DOORS) + MINIMUM_DOORS;
  return carDoor;
};

const getGoatDoor = (selectedDoor, carDoor) => {
  let goatDoor = doors.find(
    (door) => door !== carDoor && door !== selectedDoor
  );
  return goatDoor;
};

const checkResult = (carDoor, selectedDoor, goatDoor, doorSwitch) => {
  if (doorSwitch) {
    return (
      carDoor ===
      doors.find((door) => door !== selectedDoor && door !== goatDoor)
    );
  } else {
    return carDoor === selectedDoor;
  }
};

const playGame = (doorSwitch) => {
  let selectedDoor = randomizeSelectedDoor();
  let carDoor = randomizeCarDoor();
  let goatDoor = getGoatDoor(selectedDoor, carDoor);
  return checkResult(carDoor, selectedDoor, goatDoor, doorSwitch);
};

const startSimulation = (gameRounds, doorSwitch) => {
  let count = 0;
  for (let index = 0; index < gameRounds; index++) {
    if (playGame(doorSwitch)) {
      count++;
    }
  }
  return count;
};

app.get("/play/:gameRounds/:doorSwitch", (req, res) => {
  let gameRounds = parseInt(req.params.gameRounds);
  let doorSwitch = JSON.parse(req.params.doorSwitch);

  if (Number.isInteger(gameRounds) && typeof doorSwitch === "boolean") {
    const result = startSimulation(gameRounds, doorSwitch);
    res.send(JSON.stringify({ gameRounds, result }));
  } else {
    return res.status(400).send("Game rounds must be a number");
  }
});

const port = process.env.PORT || 3500;

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
