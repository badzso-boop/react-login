const express = require('express');
const session = require('express-session');
const crypto = require('crypto');
const cors = require('cors');

const app = express();

const db = require('./database');

app.use(cors());
app.use(express.urlencoded({extended:false}));
app.use(express.json());
app.use(express.static(__dirname + '/public'));
app.use(session({
  secret: 'nagy a kugim xD',
  resave: false,
  saveUninitialized: false,
  name: 'korona',
  cookie: {
    expires: new Date(Date.now() + (2 * 12 * 30 * 86400 * 1000))
  }
}));

app.get('/set', (req, res) => {
  req.session.user_id = 2;
  return res.send('<h1>Lead id elmentve!</h1>');
});

app.get('/dest', (req, res) => {
  req.session.destroy();
  return res.send('<h1>Session törölve</h1>');
});

app.get('/zigi', (req, res, next) => {
  return res.send(''+req.session.user_id);
});

app.get('/login', (req, res) => {
  return res.sendFile(__dirname + '/public/login.html');
});

app.post('/login', (req, res) => {
  let login = req.body;

  if(login.email === undefined || login.email === "" ||
     login.password === undefined || login.password === "") {
    res.status(400);
    return res.json({"Hiba":"Hiányoznak az adatok"});
  }

  db.query('SELECT password, id FROM teszt WHERE email = ?', login.email).then(resp => {
    if(resp[0] === undefined) {
      return res.json({"Hiba":"Hibás email cím vagy jelszó"});
    }
    
    const pass = resp[0].password;
    const id = resp[0].id;

    let hash = crypto.createHash('sha384');    
    let data = hash.update(login.password, 'utf-8');
    let pass2 = data.digest('hex');
    
    if(pass === pass2) {
      req.session.user_id = id;
      return res.redirect(307, '/');
    }

    return res.json({"Hiba":"Hibás email cím vagy jelszó"});
  }).catch(err => {
    console.log(err);
    return res.json({"Hiba":"A bejelentkezés sikertelen"});
  });
});

app.post('/signup', (req, res) => {
  let login = req.body;
  if(login.nev == undefined || login.nev === "" ||
     login.email == undefined || login.email === "" ||
     login.password == undefined || login.password === "" ||
     login.password2 == undefined || login.password2 === "") {
    res.status(400);
    return res.json({"Hiba":"Hiányoznak az adatok"});
  }
  console.log(login.password);
  console.log(login.password2);

  if(login.password !== login.password2) {
    res.status(400);
    return res.json({"Hiba":"A két jelszó nem egyezik meg!"});
  }
  let p = [
    login.nev,
    login.email,
    login.password
  ];

  console.log(login);
  db.query('INSERT INTO teszt(nev, email, password) values (?,?,SHA2(?,384)) RETURNING id', p).then(result => {
    req.session.user_id = result[0].id;
    return res.redirect('/');
  }).catch(err => {
    console.log(err);
    return res.json({"Hiba":"A regisztráció sikertelen"});
  });
});

app.get('/sql', (req, res) => {
  db.query('SELECT * FROM teszt').then(result => {res.send(result)}).catch(err => {console.log(err)});
});

app.post('/product', (req, res) => {
  
  if(Object.keys(req.body).length === 0) {
    console.log("Üres!");
    res.status(403);
    return res.redirect('/');
  }
    
  console.log(req.body);
  res.redirect('/');
});

app.get('/', (req, res, next) => {
  if(req.session.user_id === undefined) {
    return res.redirect('/login');
  }
    
  res.send('<h1>Hello from Express</h1>');
});

app.listen(3030);
