import {useRef} from 'react';

function ListTodoItemEdit(props) {
    const todoRef = useRef();
    const id = props;
    function todoDeleteHandler() {
        props.onDelete(id);
    }

    function todoSaveHandler() {
        const todo = props.teendo;
        const enteredTodo = todoRef.current.value;
        const sendTodo = todo + enteredTodo;
        props.onSave(sendTodo);
    }

    return (
        <div>
            <input type = "text" value={props.teendo} placeholder={props.teendo} ref={todoRef}/>
            <button onClick={todoSaveHandler}>Mentés</button>
        </div>
    );
}

export default ListTodoItemEdit;