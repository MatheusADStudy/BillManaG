const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const requireDir = require('require-dir');

const app = express();

app.use(express.json());
const server = require('http').Server(app);
const io = require('socket.io')(server);

mongoose
  .connect('mongodb+srv://giuliano:batata@cluster0-15dj6.mongodb.net/BillManaG?retryWrites=true', {
    useNewUrlParser: true,
  })
  .then(() => console.log('MongoDB Connected'))
  .catch(err => console.log(err));

requireDir('./models');

app.use((req, res, next) => {
  req.io = io;
  next();
});

app.use(cors());

app.use(require('./routes'));

server.listen(3334);
