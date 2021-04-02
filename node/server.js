const express = require('express');
const session = require('express-session');
const cors = require('cors');

const app = express();

const db = require('./database');

//db.query('SELECT * from teszt').then(result => {console.log(result)}).catch(err => {console.log(err)});

app.use(cors());
app.use(express.urlencoded({extended:false}));
app.use(express.json());
app.use(session({
  secret: 'nagy a kugim xD',
  resave: false,
  saveUninitialized: false,
  name: 'korona',
}));

/*app.use(function (req, res, next) {
  if (!req.session.user_id) {
    req.session.user_id = 1;
  }

  next()
});*/

app.get('/set', (req, res) => {
  req.session.user_id = 2;
  return res.send('<h1>Lead id elmentve!</h1>');
});

app.get('/zigi', (req, res, next) => {
  return res.send(''+req.session.user_id);
});

app.get('/kugi', (req, res, next) => {
  res.send('<form action="/product" method="POST"><input type="text" name="title"><button type="submit">Add Product</button></form>');
  console.log(res);
});

app.get('/login', (req, res) => {
  return res.redirect('http://localhost:3000/login');
});

app.post('/login', (req, res) => {
  let login = req.body;
  if(login.email == undefined || login.email === "" ||
     login.password == undefined || login.password === "") {
    res.status(400);
    return res.json({"Hiba":"Hiányoznak az adatok"});
  }
  
  db.query('SELECT password FROM teszt WHERE email = ?', [login.email]).then(resp => {
    if(resp[0] === undefined) {
      return res.json({"Hiba":"Hibás email cím vagy jelszó"});
    }
    let pass = resp[0].password;
    db.query('SELECT SHA2(?,384) AS pass', login.password).then(resp => {
      let pass2 = resp[0].pass;
      if(pass === pass2) {
        return res.json({"Siker":"Sikeres bejelentkezés"});
      }
      return res.json({"Hiba":"Hibás email cím vagy jelszó"});
    }).catch(err => {
      console.log('A jelszótitkosításkor: ' + err);
    });
  }).catch(err => {
    console.log(err)
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
  db.query('INSERT INTO teszt(nev, email, password) values (?,?,SHA2(?,384))', p).then(result => {
    return res.json({"Siker":"Sikeres regisztráció"});
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
  res.send('<h1>Hello from Express</h1>');
});

app.listen(3030);
