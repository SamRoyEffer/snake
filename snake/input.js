const stdin = process.stdin;
const stdout = process.stdout
const {moveUp, moveDown, moveLeft, moveRight, saying} = require("./constants")
let connection;
const setupInput = (conn) => {
  connection = conn;
  stdin.on("data", handleUserInput)
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
  return stdin;
};

const handleUserInput = (key) => {
  if (key === '\u0003') {
    process.exit();
  } else if (key === 'w') {
    moveUp;
  } else if (key === 'a') {
    moveLeft;
  } else if (key === 's') {
    moveDown;
  } else if (key === 'd'){
    moveRight;
  } else if (key === "q") {
    saying;
  }
  
};

module.exports = setupInput