import {useRef} from 'react';
import DatePicker from 'react-date-picker';

let i = 0;

function AddTodo(props) {    
    const teendoRef = useRef();
    const authorRef = useRef();

    function addTodoHandler(event) {
        event.preventDefault();

        const enteredTeendo = teendoRef.current.value;
        const enteredAuthor = authorRef.current.value;

        let d = new Date();

        const currentDate = d.getFullYear() + "." + d.getMonth() + "." + d.getDate() + " - " + d.getHours() + ":" + d.getMinutes() + ":" + d.getSeconds();

        const teendoData = {
            id: i,
            teendo: enteredTeendo,
            author: enteredAuthor,
            date: currentDate,
        };
        i++;

        props.onAddTeendo(teendoData);
    }

    return (
        <div className="col-xl-12">
                <h1 className="text-center py-3 text-info">Teendő Hozzáadása</h1>
                <form className="list-group w-75 mx-auto" id="list" onSubmit={addTodoHandler}>
                    <div className="form-floating">
                        <input className="list-group-item form-control hater text-dark rounded-top" type = "text" name = "teendo" id = "teendo" placeholder="teendo" ref = {teendoRef}/>
                        <label className="w-25" htmlFor="teendo">Teendő</label>
                    </div>
                    <div className="form-floating">
                        <input className="list-group-item form-control hater text-dark rounded-top" type = "text" name = "author" id = "author" placeholder="személy" ref = {authorRef}/>
                        <label className="w-25"htmlFor="author">Személy</label>
                    </div>
                    <button className="list-group-item w-100 btn btn-info text-dark my-3 hater" type = "submit">Mentés/Hozzáadás</button>
                </form>
        </div>
    );
}

export default AddTodo;