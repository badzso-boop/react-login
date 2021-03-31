import 'bootstrap/dist/css/bootstrap.css'
import {useRef} from 'react';

function LoginForm(props) {
    const nevRef = useRef();
    const emailRef = useRef();
    const passwordRef = useRef();

    function loginHandler(event) {
        event.preventDefault();

        const enteredNev = nevRef.current.value;
        const enteredEmail = emailRef.current.value;
        const enteredPassword = passwordRef.current.value;

        const loginData = {
            nev: enteredNev,
            email: enteredEmail,
            password: enteredPassword
        }

        props.OnLogin(loginData);
    }

    function kitoltes() {
        const nev = "Ujj Norbert";
        const email = "norbert.ujj@gmail.com";
        const jelszo = "s3cret";
    }

    //itt van a html része 'className="classnév"'-ként tudod definiálni az osztályokat
    return (
        <div>
            <h1>Belépés</h1>
            <form onSubmit={loginHandler}>
                <input type = "text" name = "nev" placeholder = "Név" ref={nevRef}/>
                <input type = "text" name = "email" placeholder = "Email" ref={emailRef}/>
                <input type = "text" name = "password" placeholder = "Jelszó" ref={passwordRef}/>
                <button type = "submit">Belépés</button>
            </form>
            <button onClick={kitoltes}>Kitoltes  Elkuldes</button>
        </div>
    );
}

export default LoginForm;