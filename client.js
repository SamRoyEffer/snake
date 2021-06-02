const net = require("net");
const { stdin } = require("process");
const connect = function () {
  const conn = net.createConnection({
    host: "135.23.222.131",
    port: 50542,
  });
  // interpret incoming data as text
  conn.setEncoding("utf8");
  conn.on("connect", () => {
    conn.setEncoding("utf8");
    console.log("Connected");
    conn.write("Name: Sam");
    
  });
  return conn;
};

module.exports = connect