import 'bootstrap/dist/css/bootstrap.css'

import { Route, Switch } from 'react-router-dom';
import React, {useState} from 'react';

import SignUp from './components/signUp';
import Login from './components/login';
import AddTodo from './components/addtodo';
import ListTodo from './components/listTodo';

var NAGY_CSUNYA_ADAT = [];

class App extends React.Component {
  constructor(props){
    super(props);

    this.SignUpPostHandler = this.SignUpPostHandler.bind(this);
    this.LoginPostHandler = this.LoginPostHandler.bind(this);
    this.TodoPostHandler = this.TodoPostHandler.bind(this);
    this.ListTodoGetHandler = this.ListTodoGetHandler.bind(this);
  }

  componentDidMount() {
    fetch('/todoAPI/getTodo', {method: 'GET', headers: {'Content-type':'application/json'}}).then(res => {
      return res.json();
    }).then(data => {
      var result = Array.from(data);
      for(let i = 0; i < result.length; i++)
      {
        NAGY_CSUNYA_ADAT.push(result[i])
      }
      
      this.forceUpdate();
    }).catch(err => {
      console.log('Hibaa bazdmeg: ' + err);
    });
  }

  SignUpPostHandler(signupData) {
    fetch('/todoAPI/signup', {method: 'POST', body: JSON.stringify(signupData, null, 2), headers: {'Content-type':'application/json'}}).then(res => {
      return res.json();
    }).then(data => {
        console.log(data);
    });
  }

  LoginPostHandler(loginData) {
    fetch('/todoAPI/login', {method: 'POST', body: JSON.stringify(loginData, null, 2), headers: {'Content-type':'application/json'}}).then(res => {
      return res.json();
    }).then(data => {
      console.log(data);
    });
  }

  TodoPostHandler(teendoData) {
    console.log(teendoData);
    fetch('/todoAPI/changeTodo', {method: 'POST', body: JSON.stringify(teendoData, null, 2), headers: {'Content-type':'application/json'}}).then(res => {
      return res.json();
    }).then(data => {
      if(data.success == 0)
      {
        console.log('nem sikerult a mentes');
      } else {
        console.log('sikerult a mentes');
      }
    });

    NAGY_CSUNYA_ADAT.push(teendoData);
    
    this.forceUpdate();
  }

  ListTodoGetHandler() {
    //fetch('http://localhost:9000/testAPI', {method: 'GET', body: JSON.stringify(teendoData, null, 2), headers: {'Content-type':'application/json'}}).then(res => console.log(res));
  }
  render() {
    return (
      <div className="container-fluid row p-1 m-0">
        <Switch>
            <Route path='/'>
              <AddTodo onAddTeendo={this.TodoPostHandler}/>
              <ListTodo todos={NAGY_CSUNYA_ADAT} onSavePush={this.TodoPostHandler}/>
            </Route>
        </Switch>
      </div>
    );
  }
}

export default App;
