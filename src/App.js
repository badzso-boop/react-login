import 'bootstrap/dist/css/bootstrap.css'

import { Route, Switch } from 'react-router-dom';
import {useState} from 'react';

import SignUp from './components/signUp';
import Login from './components/login';
import AddTodo from './components/addtodo';
import ListTodo from './components/listTodo';
import Navbar from './components/navbar';

const DUMMY_DATA = [];

function App() {
  const [ReRender, setReRender] = useState(false);

  function setReRenderFalse() {
    setReRender(false);
  }

  function SignUpPostHandler(signupData) {
   fetch('http://localhost:9000/testAPI', {method: 'POST', body: JSON.stringify(signupData, null, 2), headers: {'Content-type':'application/json'}}).then(res => console.log(res));
  }

  function LoginPostHandler(loginData) {
    fetch('http://localhost:9000/testAPI', {method: 'POST', body: JSON.stringify(loginData, null, 2), headers: {'Content-type':'application/json'}}).then(res => console.log(res));
  }

  function TodoPostHandler(teendoData) {
    //fetch('http://localhost:9000/testAPI', {method: 'POST', body: JSON.stringify(teendoData, null, 2), headers: {'Content-type':'application/json'}}).then(res => console.log(res));
    DUMMY_DATA.push(teendoData);
    console.log(DUMMY_DATA);
    setReRender(true);
        
    let id = setInterval(function() {setReRenderFalse(); clearInterval(id)}, 100);
  }

  function ListTodoGetHangler() {
    //fetch('http://localhost:9000/testAPI', {method: 'GET', body: JSON.stringify(teendoData, null, 2), headers: {'Content-type':'application/json'}}).then(res => console.log(res));
  }

  return (
    <div className="container-fluid row p-1 m-0">
      <h1 className="text-center col-lg-12 text-white mb-5">Üdvözöllek az oldalon!</h1>
      <Navbar />
      <Switch>
          <Route path='/' exact={true}>
            <Login className="col-lg-6"  OnLogin={LoginPostHandler}/>
            <SignUp className="col-lg-6"  OnSignUp={SignUpPostHandler}/>
          </Route>
          <Route path='/todo'>
            <AddTodo onAddTeendo={TodoPostHandler}/>
            <ListTodo todos={DUMMY_DATA}/>
          </Route>
      </Switch>
    </div>
  );
}

export default App;
