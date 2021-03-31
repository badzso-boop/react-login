import 'bootstrap/dist/css/bootstrap.css'
import {useRef} from 'react';

function SignUp(props) {
    const nevRef = useRef();
    const emailRef = useRef();
    const passwordRef = useRef();
    const passwordRef2 = useRef();

    function signupHandler(event) {
        event.preventDefault();

        const enteredNev = nevRef.current.value;
        const enteredEmail = emailRef.current.value;
        const enteredPassword = passwordRef.current.value;
        const enteredPassword2 = passwordRef2.current.value;

        const signupData = {
            nev: enteredNev,
            email: enteredEmail,
            password: enteredPassword,
            password2: enteredPassword2
        }

        props.OnSignUp(signupData);
    }
    //itt van a html része 'className="classnév"'-ként tudod definiálni az osztályokat
    return (    
        <div>
            <h1>Regisztráció</h1>
            <form onSubmit={signupHandler}>
                <input type = "text" name = "nev" placeholder = "Név" ref={nevRef}/>
                <input type = "text" name = "email" placeholder = "Email" ref={emailRef}/>
                <input type = "text" name = "password" placeholder = "Jelszó" ref={passwordRef}/>
                <input type = "text" name = "password2" placeholder = "Jelszó újra" ref={passwordRef2}/>
                <button type = "submit" className="btn btn-warning">Regisztrálj!</button>
            </form>
        </div>
      );
}

export default SignUp;