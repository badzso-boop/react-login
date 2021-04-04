import 'bootstrap/dist/css/bootstrap.css'

import { Route, Switch } from 'react-router-dom';
import {useState} from 'react';

import SignUp from './components/signUp';
import Login from './components/login';
import AddTodo from './components/addtodo';
import ListTodo from './components/listTodo';


let DUMMY_DATA = [];

let rendereljedKocsog = 1;

function App() {
  const [ReRender, setReRender] = useState(false);

  // Stupid megoldás de maradhat :>
  if(rendereljedKocsog) {
    fetch('http://localhost:3030/getTodo', {method: 'GET', headers: {'Content-type':'application/json'}}).then(res => {
      return res.json();
    }).then(data => {
      DUMMY_DATA = data;
      setReRender(true);
      let id = setInterval(function() {setReRenderFalse(); clearInterval(id)}, 100);
    }).catch(err => {
      console.log('Hibaa bazdmeg: ' + err);
    });
    rendereljedKocsog = 0;
  }
  

  function setReRenderFalse() {
    setReRender(false);
  }

  function SignUpPostHandler(signupData) {
    fetch('http://localhost:3030/signup', {method: 'POST', body: JSON.stringify(signupData, null, 2), headers: {'Content-type':'application/json'}}).then(res => {
      return res.json();
    }).then(data => {
        console.log(data);
    });
  }

  function LoginPostHandler(loginData) {
    fetch('http://localhost:3030/login', {method: 'POST', body: JSON.stringify(loginData, null, 2), headers: {'Content-type':'application/json'}}).then(res => {
      return res.json();
    }).then(data => {
      console.log(data);
    });
  }

  function TodoPostHandler(teendoData) {
    console.log(teendoData);
    fetch('http://localhost:3030/teendovalt', {method: 'POST', body: JSON.stringify(teendoData, null, 2), headers: {'Content-type':'application/json'}}).then(res => {
      return res.json();
    }).then(data => {
      if(data.success == 0)
      {
        console.log('nem sikerult a mentes');
      } else {
        console.log('sikerult a mentes');
      }
    });

    DUMMY_DATA.push(teendoData);
    setReRender(true);
        
    let id = setInterval(function() {setReRenderFalse(); clearInterval(id)}, 100);
  }

  function ListTodoGetHandler() {
    //fetch('http://localhost:9000/testAPI', {method: 'GET', body: JSON.stringify(teendoData, null, 2), headers: {'Content-type':'application/json'}}).then(res => console.log(res));
  }

  return (
    <div className="container-fluid row p-1 m-0">
      <Switch>
          <Route path='/' exact={true}>
            <Login className="col-lg-6"  OnLogin={LoginPostHandler}/>
            <SignUp className="col-lg-6"  OnSignUp={SignUpPostHandler}/>
          </Route>
          <Route path='/todo'>
            <AddTodo onAddTeendo={TodoPostHandler}/>
            <ListTodo todos={DUMMY_DATA} onSavePush={TodoPostHandler}/>
          </Route>
      </Switch>
    </div>
  );
}

export default App;
