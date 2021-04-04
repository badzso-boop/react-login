const express = require('express');
const MariaDBStore = require('express-session-mariadb-store');
const session = require('express-session');
const crypto = require('crypto');
const cors = require('cors');
const loginRoutes = require('./routes/login');

const app = express();

const db = require('./database');

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
app.use(loginRoutes);

app.get('/dest', (req, res) => {
  req.session.destroy();
  return res.send('<h1>Session törölve</h1>');
});

app.get('/getTodo', (req, res) => {
  const oda = [
    {
      id: 0,
      teendo: 'Vidd le a szemetet',
      author: 'Krózser',
      date: '2021.04.04'
    },
    {
      id: 1,
      teendo: 'Programozzad le a backendet!',
      author: 'Ádó',
      date: '2021.04.04'
    }
  ];
  return res.send(oda);
});

app.get('/', (req, res, next) => {
  if(req.session.user_id === undefined) {
    return res.redirect('/login');
  }
  
  return res.redirect('http://localhost:3000/todo');
});

app.listen(3030);