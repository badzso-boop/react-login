const express = require('express');
const path = require('path');
const crypto = require('crypto');
const session = require('express-session');
const db = require(path.resolve('database'));

const router = express.Router();

router.get('/login', (req, res) => {
  return res.sendFile(path.resolve('public/login.html'));
});

router.post('/login', (req, res) => {
  let login = req.body;

  if(login.email === undefined || login.email === "" ||
     login.password === undefined || login.password === "") {
    res.status(400);
    return res.json({"siker":0});
  }

  db.query('SELECT password, id FROM teszt WHERE email = ?', login.email).then(resp => {
    if(resp[0] === undefined) {
      return res.json({"siker":1});
    }
    
    const pass = resp[0].password;
    const id = resp[0].id;

    let hash = crypto.createHash('sha384');    
    let data = hash.update(login.password, 'utf-8');
    let pass2 = data.digest('hex');
    
    if(pass === pass2) {
      req.session.user_id = id;
      return res.json(200, {"siker":2});
    }

    return res.json({"siker":1});
  }).catch(err => {
    console.log(err);
    return res.json({"siker":1});
  });
});

router.post('/signup', (req, res) => {
  let login = req.body;
  if(login.nev == undefined || login.nev === "" ||
     login.email == undefined || login.email === "" ||
     login.password == undefined || login.password === "" ||
     login.password2 == undefined || login.password2 === "") {
    res.status(400);
    return res.json({"siker":0});
  }
  console.log(login.password);
  console.log(login.password2);

  if(login.password !== login.password2) {
    res.status(400);
    return res.json({"siker":2});
  }
  let p = [
    login.nev,
    login.email,
    login.password
  ];

  console.log(login);
  db.query('INSERT INTO teszt(nev, email, password) values (?,?,SHA2(?,384)) RETURNING id', p).then(result => {
    req.session.user_id = result[0].id;
    return res.json(200, {"siker":3});
  }).catch(err => {
    console.log(err);
    return res.json({"siker":1});
  });
});

module.exports = router;