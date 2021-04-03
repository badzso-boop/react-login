import {useState} from 'react';

import ListTodoItem from './listTodoItem';
import Card from './card';
import ListTodoItemEdit from './lisTodoItemEdit';

let edit = false;
let editId = -1;

function ListTodo(props) {
    const [ReRender, setReRender] = useState(false);

    const data = props.todos;
    
    function setReRenderFalse() {
        setReRender(false);
    }

    function todosDeleteHandler(props) {
        for(let j = 0; j < data.length; j++)
        {
            if(data[j].id === props.id)
            {
                data.splice(j,1);

                setReRender(true);

                let id = setInterval(function() {setReRenderFalse(); clearInterval(id)}, 100);

                break;
            }
        }
    }

    function todosEditHandler(props) {
        for(let j = 0; j < data.length; j++)
        {
            if(data[j].id === props.id)
            {
                edit = true;
                editId = data[j].id;
                console.log(editId)

                setReRender(true);

                let id = setInterval(function() {setReRenderFalse(); clearInterval(id)}, 100);

                break;
            }
        }
    }

    function todosSaveHandler(props) {
        edit = false;

        console.log(props);

        setReRender(true);

        let id = setInterval(function() {setReRenderFalse(); clearInterval(id)}, 100);
    }

    return (
        <div>
            <h1>Teendők</h1>
            {edit && <ListTodoItemEdit
                        id = {data[editId].id} 
                        teendo={data[editId].teendo}
                        onSave = {todosSaveHandler} 
                        onDelete={todosDeleteHandler}/>}
            <ul>
                <Card>
                    {data.map(todo => <ListTodoItem 
                                            key={todo.id} 
                                            id = {todo.id} 
                                            teendo={todo.teendo} 
                                            author = {todo.author} 
                                            date = {todo.date} 
                                            onDelete={todosDeleteHandler}
                                            onEdit ={todosEditHandler}/>)}
                </Card>
            </ul>
        </div>
    );
}

export default ListTodo;