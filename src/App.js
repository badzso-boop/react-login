import {useRef} from 'react';

function App() {
  const nevRef= useRef();
  const emailRef= useRef();
  const passwordRef= useRef();

  function httpPostHandler(event) {
    event.preventDefault();

    const enteredNev = nevRef.current.value;
    const enteredEmail = emailRef.current.value;
    const enteredPassword = passwordRef.current.value;

    const data = {
      nev: enteredNev,
      email: enteredEmail,
      password: enteredPassword
    };

    fetch('/teszt', {method: 'POST', body: JSON.stringify(data), headers: {'Content-type':'application/json'}}).then(console.log('sikerült'));
  }

  return (
    <div>
      <form onSubmit={httpPostHandler}>
        <input type = "text" name = "nev" placeholder = "nev" ref={nevRef}/>
        <input type = "text" name = "email" placeholder = "email" ref={emailRef}/>
        <input type = "text" name = "password" placeholder = "password" ref={passwordRef}/>
        <button type = "submit">Regisztrálj!</button>
      </form>
    </div>
  );
}

export default App;
