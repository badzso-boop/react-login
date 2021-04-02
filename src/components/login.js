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
        <div className="col-lg-6">
            <h1 className="text-center py-3 text-info ">Belépés</h1>
            <form className="list-group w-75 mx-auto" id="list" onSubmit={loginHandler}>
                <input className="list-group-item hater border-light border-bottom-0 text-dark" type = "name" name = "nev" placeholder = "Név" required ref={nevRef}/>
                <input className="list-group-item hater border-light border-bottom-0 border-top-0 text-dark" type = "email" name = "email" placeholder = "Email" required ref={emailRef}/>
                <input className="list-group-item hater border-light border-top-0 text-dark" type = "password" name = "password" placeholder = "Jelszó" required ref={passwordRef}/>
                <button className="list-group-item w-100 btn btn-info text-dark my-3 hater border border-dark" type = "submit">Belépés</button>
            </form>
            <button onClick={kitoltes}>Kitoltes  Elkuldes</button>
        </div>
    );
}

export default LoginForm;