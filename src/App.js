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
    <div className="container-fluid row p-1 m-0">
      <h1 className="text-center col-lg-12 text-white mb-5">Üdvözöllek az oldalon!</h1>
      <Login className="col-lg-6" OnLogin={LoginPostHandler}/>
      <SignUp className="col-lg-6" OnSignUp={SignUpPostHandler}/>
    </div>
  );
}

export default App;
