const IP = "135.23.222.131"
const PORT = 50542
const moveUp = connection.write("Move: up");
const moveDown = connection.write("Move: down");
const moveLeft = connection.write("Move: left");
const moveRight = connection.write("Move: right");
const saying = connection.write("Say: I SAID GOOD DAY SIR!")

module.exports = {
  IP,
  PORT,
  moveUp,
  moveDown,
  moveLeft,
  moveRight,
  saying
};