const express = require('express');
const path = require('path');
const session = require('express-session');
const db = require(path.resolve('database'));

const router = express.Router();

router.get('/faszom', (req, res) => {
  return res.send(req.session.user_id + '<br>' + '<h1>Működik a faszod! :)</h1>');
});

router.get('/getTodo', (req, res) => {
  const teszt = [];
  db.query('SELECT felhasznalo.nev AS felhasznalo_nev, todok.todo AS todo_todo, todok.id AS todo_id, todok.date AS todo_date FROM todok LEFT JOIN felhasznalo ON (felhasznalo.id = todok.user_id)').then(resu => {
    const ans = resu;
    console.log('Méret: ' + ans.length);
    for(let i = 0; i < ans.length; i++) {
      console.log(ans[i]);
      teszt.push({
        id: ans[i].todo_id,
        teendo: ans[i].todo_todo,
        author: ans[i].felhasznalo_nev,
        date: ans[i].todo_date
      })
    }
    return res.send(teszt);
  }).catch(err => {
    console.log(err);
  });
});

router.get('/fetchUID', (req, res) => {
  return res.send(req.session.user_id);
});

router.post('/addTodo', (req, res) => {
  let todo = req.body;
  if(todo.teendo == undefined || todo.teendo === '') {
    return res.json({"success":0});
  }

  const p = [
    req.session.user_id,
    todo.teendo
  ];

  // TODO: itt tartok
  db.query('INSERT INTO todok (user_id, todo) values (?,?)', p).then(result => {
      return res.json({"success":1});
  }).catch(err => {
    console.log(err);
    return res.json({"success":2});
  });
});

router.post('/deleteTodo', (req, res) => {
  let todo = req.body;
  if(todo.id == undefined || todo.id === '') {
    return res.json({"success":0});
  }

  db.query('SELECT user_id FROM todok WHERE id = ?', todo.id).then(result => {
    const uid = result[0].user_id;
    if(uid !== req.session.user_id) {
      return res.json({"success":2});
    }
    db.query('DELETE FROM todok WHERE id = ?', todo.id).then(r => {
      return res.json({"success":1});
    }).catch(err => {
      console.log(err);
      return res.json({"success":3});
    });
  }).catch(err => {
    console.log(err);
    return res.json({"success":3});
  });
});

router.post('/saveTodo', (req, res) => {
  const todo = req.body;
  if(todo.id == undefined || todo.id === '' ||
     todo.todo == undefined || todo.todo === '') {
      return res.json({"success":0});
  }

  db.query('SELECT user_id FROM todok WHERE id = ?', todo.id).then(result => {
    const uid = result[0].user_id;
    if(uid !== req.session.user_id) {
      return res.json({"success":2});
    }

    const p = [
      todo.todo,
      todo.id
    ];

    db.query('UPDATE todok SET todo = ?, date = now() WHERE id = ?', p).then(result => {
      return res.json({"success":1});
    }).catch(err => {
      console.log(err);
      return res.json({"success":3});
    });
  }).catch(err => {
    console.log(err);
    return res.json({"success":3});
  });
});

module.exports = router;