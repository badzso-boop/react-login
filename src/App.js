import SignUp from './components/signUp';
import Login from './components/login';

function App() {

  function SignUpPostHandler(signupData) {
    
   fetch('http://localhost:9000/testAPI', {method: 'POST', body: JSON.stringify(signupData, null, 2), headers: {'Content-type':'application/json'}}).then(res => console.log(res));
  }

  function LoginPostHandler(loginData) {
    
    fetch('http://localhost:9000/testAPI', {method: 'POST', body: JSON.stringify(loginData, null, 2), headers: {'Content-type':'application/json'}}).then(res => console.log(res));
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
