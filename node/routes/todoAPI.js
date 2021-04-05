const express = require('express');
const path = require('path');
const session = require('express-session');
const db = require(path.resolve('database'));

const router = express.Router();

router.get('/faszom', (req, res) => {
  return res.send(req.session.user_id + '<br>' + '<h1>Működik a faszod! :)</h1>');
});

router.get('/getTodo', (req, res) => {
  const oda = [
    {
      id: 1,
      teendo: 'Vidd le a szemetet',
      author: 'Krózser',
      date: '2021.04.04'
    },
    {
      id: 0,
      teendo: 'Programozzad le a backendet!',
      author: 'Ádó',
      date: '2021.04.04'
    }
  ];
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
  db.query('INSERT INTO todok (user_id, todo) values (?,?) RETURNING id, date', p).then(result => {
    let t_id = result[0].id;
    let t_date = result[0].date;

    db.query('SELECT nev FROM felhasznalo WHERE id = ?', req.session.user_id).then(resu => {
      const responseData = {
        success: 1,
        id: t_id,
        author: resu[0].nev,
        date: t_date
      };
      return res.json(responseData);

    }).catch(error => {
      console.log(error);
      return res.json({"success":2});
    });    
  }).catch(err => {
    console.log(err);
    return res.json({"success":2});
  });
});

router.post('/deleteTodo', (req, res) => {
  return res.json({"siker":0});
});

router.post('/changeTodo', (req, res) => {
  return res.json({"siker":0});
});

module.exports = router;