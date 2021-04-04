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

    this.state = {
      DUMMY_DATA: [],
    }

    this.SignUpPostHandler = this.SignUpPostHandler.bind(this);
    this.LoginPostHandler = this.LoginPostHandler.bind(this);
    this.TodoPostHandler = this.TodoPostHandler.bind(this);
    this.ListTodoGetHandler = this.ListTodoGetHandler.bind(this);
  }

  componentDidMount() {
    fetch('http://localhost:3030/getTodo', {method: 'GET', headers: {'Content-type':'application/json'}}).then(res => {
      return res.json();
    }).then(data => {
      var result = Array.from(data);
      for(let i = 0; i < result.length; i++)
      {
        NAGY_CSUNYA_ADAT.push(result[i])
      }
      this.setState({DUMMY_DATA: result});
    }).catch(err => {
      console.log('Hibaa bazdmeg: ' + err);
    });   
  }

  SignUpPostHandler(signupData) {
    fetch('http://localhost:3030/signup', {method: 'POST', body: JSON.stringify(signupData, null, 2), headers: {'Content-type':'application/json'}}).then(res => {
      return res.json();
    }).then(data => {
        console.log(data);
    });
  }

  LoginPostHandler(loginData) {
    fetch('http://localhost:3030/login', {method: 'POST', body: JSON.stringify(loginData, null, 2), headers: {'Content-type':'application/json'}}).then(res => {
      return res.json();
    }).then(data => {
      console.log(data);
    });
  }

  TodoPostHandler(teendoData) {
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

    NAGY_CSUNYA_ADAT.push(teendoData);
    
    this.forceUpdate();
  }

  ListTodoGetHandler() {
    //fetch('http://localhost:9000/testAPI', {method: 'GET', body: JSON.stringify(teendoData, null, 2), headers: {'Content-type':'application/json'}}).then(res => console.log(res));
  }
  render() {
    //console.log(this.state.DUMMY_DATA);
    return (
      <div className="container-fluid row p-1 m-0">
        <Switch>
            <Route path='/' exact={true}>
              <Login className="col-lg-6"  OnLogin={this.LoginPostHandler}/>
              <SignUp className="col-lg-6"  OnSignUp={this.SignUpPostHandler}/>
            </Route>
            <Route path='/todo'>
              <AddTodo onAddTeendo={this.TodoPostHandler}/>
              <ListTodo todos={NAGY_CSUNYA_ADAT} onSavePush={this.TodoPostHandler}/>
            </Route>
        </Switch>
      </div>
    );
  }
}

export default App;
