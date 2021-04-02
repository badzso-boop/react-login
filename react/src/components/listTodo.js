import {useState} from 'react';

import ListTodoItem from './listTodoItem';
import Card from './card';
import ListTodoItemEdit from './lisTodoItemEdit';

let edit = false;

function ListTodo(props) {
    const [ReRender, setReRender] = useState(false);

    console.log(edit)

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
        console.log('for-elott')
        for(let j = 0; j < data.length; j++)
        {
            console.log('if-elott')
            if(data[j].id === props.id)
            {
                console.log('if-ben')
                edit = true;
                console.log(edit)

                setReRender(true);

                let id = setInterval(function() {setReRenderFalse(); clearInterval(id)}, 100);

                break;
            }
        }
    }

    function todosSaveHandler(props) {
        edit = false;
        console.log(props)

        setReRender(true);

        let id = setInterval(function() {setReRenderFalse(); clearInterval(id)}, 100);
    }

    return (
        <div>
            <h1>Teendők</h1>
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
                    {edit && data.map(todo => <ListTodoItemEdit 
                                            key={todo.id} 
                                            id = {todo.id} 
                                            teendo={todo.teendo}
                                            onSave = {todosSaveHandler} 
                                            onDelete={todosDeleteHandler}/>)}
                </Card>
            </ul>
        </div>
    );
}

export default ListTodo;