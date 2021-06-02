const stdin = process.stdin;
const stdout = process.stdout
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
    connection.write("Move: up");
  } else if (key === 'a') {
    connection.write("Move: left");
  } else if (key === 's') {
    connection.write("Move: down")
  } else if (key === 'd'){
    connection.write("Move: right")
  } else if (key === "q") {
    connection.write("Say: I SAID GOOD DAY SIR!")
  }
  
};

module.exports = setupInput