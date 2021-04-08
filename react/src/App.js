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
    this.loadTodos = this.loadTodos.bind(this);
  }

  componentDidMount() {
    this.loadTodos();
  }

  loadTodos() {
    NAGY_CSUNYA_ADAT = [];
    fetch('/todoAPI/getTodo', {method: 'GET', headers: {'Content-type':'application/json'}}).then(res => {
      return res.json();
    }).then(data => {
      var result = Array.from(data);
      for(let i = 0; i < result.length; i++)
      {
        let daa = new Date(result[i].date);
        let year = daa.getFullYear();
        let month = +daa.getMonth() + 1;
        let day = daa.getDate();
        let hour = daa.getHours();
        let minute = daa.getMinutes();
        let second = daa.getSeconds();
        month = (month < 10) ? '0' + month : month;
        day = (day < 10) ? '0' + day : day;
        hour = (hour < 10) ? '0' + hour : hour;
        minute = (minute < 10) ? '0' + minute : minute;
        second = (second < 10) ? '0' + second : second;
        const currentDate = daa.getFullYear() + "." + month + "." + day + " - " + hour + ":" + minute + ":" + second;
        result[i].date = currentDate;
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
              <AddTodo onAddTeendo={this.TodoPostHandler} LoadTodo={this.loadTodos} onSaveFetch={this.loadTodos}/>
              <ListTodo todos={NAGY_CSUNYA_ADAT} onSavePush={this.TodoPostHandler} onDeletFetch={this.loadTodos} onEditFetch={this.loadTodos}/>
            </Route>
        </Switch>
      </div>
    );
  }
}


export default App;
