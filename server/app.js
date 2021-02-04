const express = require('express');
const app = express();
const mongoose = require('mongoose');
const { MONGOURL } = require('./configs/key');
const bodyParser = require('body-parser');

mongoose
  .connect(MONGOURL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
  })
  .then(() => console.log('Database Connected Successfully'))
  .catch((err) => console.log(err));

app.use(express.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// ==============================ALLOW CORS==============================
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept, Authorization'
  );

  if (req.method === 'OPTIONS') {
    res.header('Access-Control-Allow-Methods', 'PUT, POST, PATCH, DELETE, GET');
    return res.status(200).json({});
  }

  next();
});

// ==============================ROUTING==============================
require('./models/user');
require('./models/project');
require('./models/article');
require('./models/message');

const authRoutes = require('./routes/auth');
const usertRoutes = require('./routes/user');
const projectRoutes = require('./routes/project');
const articletRoutes = require('./routes/article');
const messageRoutes = require('./routes/message');

app.use('/users', authRoutes);
app.use('/users', usertRoutes);
app.use('/projects', projectRoutes);
app.use('/articles', articletRoutes);
app.use('/messages', messageRoutes);

app.use((req, res, next) => {
  const error = new Error('Not found');
  error.status = 404;
  next(error);
});

app.use((error, req, res, next) => {
  res.status(error.status || 500).json({
    error: {
      message: error.message,
    },
  });
});

module.exports = app;
