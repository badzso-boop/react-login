import {useRef} from 'react';

function ListTodoItemEdit(props) {
    //const todoRef = useRef();
    const id = props;

    function todoSaveHandler() {
        const todo = props.teendo;
        //const enteredTodo = todoRef.current.value;
        //const sendTodo = todo + " " + enteredTodo;
        const sendTodo = document.getElementById('bevitel').innerText;
        props.onSave(sendTodo);
    }

    //<input type = "text" placeholder={props.teendo} ref={todoRef}/>

    return (
        <div>
            <p id = "bevitel" contentEditable="true">{props.teendo}</p>
            <button onClick={todoSaveHandler}>Mentés</button>
        </div>
    );
}

export default ListTodoItemEdit;