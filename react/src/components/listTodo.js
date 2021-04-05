import React, {Fragment, useState} from 'react';

import ListTodoItem from './listTodoItem';

let edit = false;
let editId = -1;

class ListTodo extends React.Component {
    constructor(props){
        super(props);
        this.data = props.todos;

        this.todosDeleteHandler = this.todosDeleteHandler.bind(this);
        this.todosSaveHandler = this.todosSaveHandler.bind(this);
    };

    todosDeleteHandler(props) {
        for(let j = 0; j < this.data.length; j++)
        {
            if(this.data[j].id === props.id)
            {
                this.data.splice(j,1);

                this.forceUpdate();

                break;
            }
        }
        
        const kuldData = {
            id: props.id
        };
        console.log(kuldData.id);
        fetch('/deleteTodo', {method: 'POST', body: JSON.stringify(kuldData, null, 2), headers: {'Content-type':'application/json'}}).then(res => {
            return res.json();
        }).then(data => {
            if(data.success == 0)
            {
                console.log('nem sikerult a mentes');
            } else {
                console.log('sikerult a mentes');
            }
        });
    }

    todosSaveHandler(props) {
        let alap = props.szoveg;
        let valtid = props.id.id;
        let d = new Date();
        let valtdate = d.getFullYear() + "." + d.getMonth() + "." + d.getDate() + " - " + d.getHours() + ":" + d.getMinutes() + ":" + d.getSeconds();

        const kuldData = {
            id: valtid,
            todo: alap,
            date: valtdate
        }
        console.log(kuldData);
    }

    render() {
        return (
            <div className="col-xl-12">
                <h1 className="text-center py-3 text-info">Teendők</h1>
                <ul className="m-0 p-0">
                        {this.props.todos.map(todo => <ListTodoItem 
                                                key={todo.id} 
                                                id = {todo.id} 
                                                teendo = {todo.teendo} 
                                                author = {todo.author} 
                                                date = {todo.date} 
                                                onDelete={this.todosDeleteHandler}
                                                onEdit ={this.todosEditHandler}
                                                onSave = {this.todosSaveHandler}/>)}
                </ul>
            </div>
        );
    }
}

export default ListTodo;