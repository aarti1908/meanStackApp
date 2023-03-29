const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const User = require("./models/user");
const userRoutes = require("./routes/user");
const { WebSocketServer } = require('ws')

const sockserver = new WebSocketServer({ port: 443 })

const app = express();
mongoose.set("strictQuery", false);


sockserver.on('connection', ws => {
  console.log('New client connected!');
  ws.send('Connection Successfull!');
  let message = 'connection established';
  setInterval(() => {
    ws.send(message);
  }, 1000);
  
  ws.on('close', () => console.log('Client has disconnected!'));
  ws.on('message', data => {
    sockserver.clients.forEach(client => {
      console.log(`distributing message: ${data}`)
      message = `${data}`;
    })
  })
  ws.onerror = function () {
    console.log('websocket error')
  }
 })


//9jbMoGTgcqXuUoOW
mongoose
  .connect(
    "mongodb+srv://aarti19:9jbMoGTgcqXuUoOW@cluster0.w07evop.mongodb.net/?retryWrites=true&w=majority"
  )
  .then(() => {
    console.log("Connected to database!");
  })
  .catch((error) => {
    console.log("Connection failed! " + error);
  });

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept, Authorization"
  );
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, PATCH, PUT, DELETE, OPTIONS"
  );
  next();
});

app.post("/api/users", (req, res, next) => {
  console.log(req.body)
  const user = new User({
    fullName: req.body.fullName,
    email: req.body.email
  });
  user.save().then(createdUser => {
    res.status(201).json({
      message: "User added successfully",
      id: createdUser._id
    });
  });
});

app.delete("/api/users/:id", (req, res, next) => {
  User.deleteOne({ _id: req.params.id }).then(result => {
    console.log(result);
    res.status(200).json({ message: "User deleted!" });
  });
});

app.get("/api/users", (req, res, next) => {
  User.find().then(documents => {
    res.status(200).json({
      message: "Users fetched successfully!",
      users: documents
    });
  });
});

app.get("/api/users/:id", (req, res, next) => {
  User.findById(req.params.id).then(user => {
    if (user) {
      res.status(200).json(user);
    } else {
      res.status(404).json({ message: "User not found!" });
    }
  });
});

app.put("/api/users/:id", (req, res, next) => {
  const user = new User({
    _id: req.body.id,
    fullName : req.body.fullName,
    email : req.body.email
  });
  User.updateOne({ _id: req.params.id}, user).then(result => {
    console.log(result)
    res.status(200).json({ message: "Update successful!" });
  })
  .catch(error => {
    res.status(500).json({
      message: "Couldn't udpate user!"
    });
  });
});


app.use('/api/user', userRoutes)
module.exports = app;
