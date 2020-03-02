const express = require("express");
const socketio = require("socket.io");
const http = require("http");
const five = require("johnny-five");
const ejs = require("ejs");
const path = require("path");

const event = require("events");

const Events = new event.EventEmitter();

const app = express();
const server = http.createServer(app);
app.use(express.json());
app.set("view engine", "ejs");
app.use(express.static(path.join(__dirname, "./Public")));

// enabled socket here
app.get("/", async (req, res) => {
  res.render("index.ejs");
});

const ip = socketio(server);

// j5 setup
const board = new five.Board({
  repl: false
});

board.on("ready", () => {
  let speed, commands, motors;
  // configure the pins on the board
  motors = {
    // no of motors on the board connected to motar
    a: new five.Motor(["3, 12"]),
    b: new five.Motor(["11, 13"])
  };
  ip.on("connection", function(socket) {
    console.log(111);
    socket.on("stop", function() {
      motors.a.stop();
      motors.b.stop();
    });

    socket.on("start", function() {
      console.log(11);
      speed = 100;
      motors.a.fwd(speed);
      motors.b.fwd(speed);
    });

    // reverse the direction
    socket.on("reverse", function() {
      speed = 100;
      motors.a.rev(speed);
      motors.b.rev(speed);
    });

    // left motion
    socket.on("left", function() {
      let aSpeed = 220;
      let bSpeed = 50;
      motors.a.fwd(aSpeed);
      motors.b.rev(bSpeed);
    });

    // right motion
    socket.on("right", function() {
      let aSpeed = 50;
      let bSpeed = 220;
      motors.a.rev(aSpeed);
      motors.b.fwd(bSpeed);
    });
  });
});
const port = 3000 || process.env.PORT;

server.listen(port);
