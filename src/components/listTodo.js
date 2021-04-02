import {useState} from 'react';

import ListTodoItem from './listTodoItem';
import Card from './card';

function ListTodo(props) {
    const [ReRender, setReRender] = useState(false);

    function getKeyByValue(object, value) {
        return Object.keys(object).find(key => object[key] === value);
    }

    const data = props.todos;
    
    function setReRenderFalse() {
        setReRender(false);
    }

    function todosDeleteHandler(props) {
        console.log(props);
        //data.splice(props,1);
        setReRender(true);
        
        let id = setInterval(function() {setReRenderFalse(); clearInterval(id)}, 100);
    }

    return (
        <div>
            <h1>Teendők</h1>
            <ul>
                <Card>
                    {data.map(todo => <ListTodoItem key={todo.id} id = {todo.id} teendo={todo.teendo} author = {todo.author} date = {todo.date} onDelete={todosDeleteHandler}/>)}
                </Card>
            </ul>
        </div>
    );
}

export default ListTodo;