import {useState} from 'react';

import ListTodoItem from './listTodoItem';
import Card from './card';
<<<<<<< HEAD
import ListTodoItemEdit from './lisTodoItemEdit';

let edit = false;
let editId = -1;
=======
>>>>>>> css

function ListTodo(props) {
    const [ReRender, setReRender] = useState(false);

<<<<<<< HEAD
=======
    function getKeyByValue(object, value) {
        return Object.keys(object).find(key => object[key] === value);
    }

>>>>>>> css
    const data = props.todos;
    
    function setReRenderFalse() {
        setReRender(false);
    }

    function todosDeleteHandler(props) {
        for(let j = 0; j < data.length; j++)
        {
            if(data[j].id === props.id)
            {
<<<<<<< HEAD
=======
                console.log("ezaz")
>>>>>>> css
                data.splice(j,1);

                setReRender(true);

                let id = setInterval(function() {setReRenderFalse(); clearInterval(id)}, 100);

                break;
            }
        }
    }

<<<<<<< HEAD
    function todosEditHandler(props) {
        for(let j = 0; j < data.length; j++)
        {
            if(data[j].id === props.id)
            {
                edit = true;
                editId = data[j].id;

                setReRender(true);

                let id = setInterval(function() {setReRenderFalse(); clearInterval(id)}, 100);

                break;
            }
        }
    }

    function todosSaveHandler(props) {
        edit = false;

        data[editId] = {id: editId, teendo: props, author: data[editId].author, date: data[editId].date}

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
=======
    return (
        <div className="col-xl-12">
                <h1 className="text-center py-3 text-info">Teendők</h1>
                <ul className="m-0 p-0 ">
                    <Card>
                        {data.map(todo => <ListTodoItem key={todo.id} id = {todo.id} teendo={todo.teendo} author = {todo.author} date = {todo.date} onDelete={todosDeleteHandler}/>)}
                    </Card>
                </ul>
>>>>>>> css
        </div>
    );
}

export default ListTodo;