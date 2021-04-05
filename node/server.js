const express = require('express');
const MariaDBStore = require('express-session-mariadb-store');
const session = require('express-session');
const crypto = require('crypto');
const cors = require('cors');

const path = require('path');

const app = express();

const db = require('./database');
const loginRoutes = require('./routes/login');
const todoAPI = require('./routes/todoAPI');

app.use(cors());
app.use(express.urlencoded({extended:false}));
app.use(express.json());
app.use(session({
  store: new MariaDBStore({
    host: 'localhost',
    user: 'kodolj',
    password: 'kodolj2021',
    database: 'kodolj'
  }),
  secret: 'nagy a kugim xD',
  resave: false,
  saveUninitialized: false,
  name: 'korona',
  cookie: {
    expires: new Date(Date.now() + (2 * 12 * 30 * 86400 * 1000))
  }
}));
app.use(express.static(__dirname + '/public'));

app.use('/log', loginRoutes);
app.use('/todoAPI', todoAPI);

app.get('/dest', (req, res) => {
  req.session.destroy();
  return res.send('<h1>Session törölve</h1>');
});

app.get('/teszt', (req, res) => {
  return res.send('<h1>' + req.session.user_id + '</h1>');
});


app.get('*', (req, res, next) => {
  console.log('Bejön?');
  console.log(req.session.user_id);
  if(req.session.user_id === undefined) {
    console.log('Bejelentkezzé!');
    console.log('Vége');
    return res.redirect('/log/login');
  }
  next();
});

app.use(express.static(path.join(__dirname, '../react/build')));

app.use((req, res) => {
  
  res.sendFile(path.join(__dirname, '../react/build/index.html'));
});

app.listen(3030);