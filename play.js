
const connect = require("./client")
// establishes a connection with the game server
//const input = process.argy.slice(2);
const stdin = process.stdin;
const stdout = process.stdout
const con = connect();

setInterval(() => {
 

}, 50)
const setupInput = () => {
  stdin.on("data", handleUserInput)
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
  return stdin;

};

const handleUserInput = () => {
  if (key === '\u0003') {
    process.exit();
  }
}




console.log("Connecting ...");