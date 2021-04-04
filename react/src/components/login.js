import 'bootstrap/dist/css/bootstrap.css'
import {useRef} from 'react';

function LoginForm(props) {
    const emailRef = useRef();
    const passwordRef = useRef();

    function loginHandler(event) {
        event.preventDefault();

        const enteredEmail = emailRef.current.value;
        const enteredPassword = passwordRef.current.value;

        const loginData = {
            email: enteredEmail,
            password: enteredPassword
        }

        props.OnLogin(loginData);
    }

    /*
    function kitoltes() {
        const nev = "Ujj Norbert";
        const email = "norbert.ujj@gmail.com";
        const jelszo = "s3cret";
    }
    */

    //itt van a html része 'className="classnév"'-ként tudod definiálni az osztályokat
    return (
        <div className="col-xl-6">
            <h1 className="text-center py-3 text-info ">Belépés</h1>
            <form className="list-group w-75 mx-auto" id="list" onSubmit={loginHandler}>
<<<<<<< HEAD:react/src/components/login.js
                <input className="list-group-item hater border-light border-bottom-0 border-top-0 text-dark" type = "email" name = "email" placeholder = "Email" required ref={emailRef}/>
                <input className="list-group-item hater border-light border-top-0 text-dark" type = "password" name = "password" placeholder = "Jelszó" required ref={passwordRef}/>
                <button className="list-group-item w-100 btn btn-info text-dark my-3 hater border border-dark" type = "submit">Belépés</button>
=======
                <input className="list-group-item hater text-dark" type = "email" name = "email" placeholder = "Email" required ref={emailRef}/>
                <input className="list-group-item hater text-dark" type = "password" name = "password" placeholder = "Jelszó" required ref={passwordRef}/>
                <button className="list-group-item w-100 btn btn-info text-dark my-3 hater" type = "submit">Belépés</button>
>>>>>>> css:src/components/login.js
            </form>
        </div>
    );
}

export default LoginForm;