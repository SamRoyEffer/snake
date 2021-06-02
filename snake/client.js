const net = require("net");
const {IP, PORT} = require("./constants")
const connect = function () {
  const conn = net.createConnection({
    host: IP,
    port: PORT,
  });
  
  conn.setEncoding("utf8");
  conn.on("connect", () => {
    conn.setEncoding("utf8");
    console.log("Connected");
    conn.write("Name: Sam");
    
  });
  return conn;
};

module.exports = connect