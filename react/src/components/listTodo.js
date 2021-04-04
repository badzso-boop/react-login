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
        for(let j = 0; j < data.length; j++)
        {
            if(data[j].id === props.id)
            {
                console.log("ezaz")
                data.splice(j,1);

                setReRender(true);

                let id = setInterval(function() {setReRenderFalse(); clearInterval(id)}, 100);

                break;
            }
        }
    }

    return (
        <div className="col-xl-12">
                <h1 className="text-center py-3 text-info">Teendők</h1>
                <ul className="m-0 p-0 ">
                    <Card>
                        {data.map(todo => <ListTodoItem key={todo.id} id = {todo.id} teendo={todo.teendo} author = {todo.author} date = {todo.date} onDelete={todosDeleteHandler}/>)}
                    </Card>
                </ul>
        </div>
    );
}

export default ListTodo;