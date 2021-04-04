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
        <div className="col-xl-6">
            <h1 className="text-center py-3 text-info">Regisztráció</h1>
            <form className="list-group w-75 mx-auto" id="list"  onSubmit={signupHandler}>
                <input className="list-group-item hater text-dark" type = "name" name = "nev" placeholder = "Név" required ref={nevRef}/>
                <input className="list-group-item hater text-dark" type = "email" name = "email" placeholder = "Email" required ref={emailRef}/>
                <input className="list-group-item hater text-dark" type = "password" name = "password" placeholder = "Jelszó" required ref={passwordRef}/>
                <input className="list-group-item hater text-dark" type = "password" name = "password2" placeholder = "Jelszó újra" required ref={passwordRef2}/>
                <button className="list-group-item w-100 btn btn-info text-dark my-3 hater" type = "submit">Regisztrálj!</button>
            </form>
        </div>
      );
}

export default SignUp;