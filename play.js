
const connect = require("./client")
const setupInput = require("./input")
//const input = process.argy.slice(2);

//const con = connect();

console.log("Connecting ...");

setupInput(connect());