import 'bootstrap/dist/css/bootstrap.css'

import SignUp from './components/signUp';
import Login from './components/login';

function App() {

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

  return (
    <div>
      <h1>Üdvözöllek az oldalon!</h1>
      <Login OnLogin={LoginPostHandler}/>
      <SignUp OnSignUp={SignUpPostHandler}/>
    </div>
  );
}

export default App;
