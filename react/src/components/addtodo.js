import {useRef} from 'react';
<<<<<<< HEAD
import DatePicker from 'react-date-picker';

let i = 0;

function AddTodo(props) {
   // const [value, onChange] = useState(new Date());
=======
let i = 0;

function AddTodo(props) {
>>>>>>> css
    
    const teendoRef = useRef();
    const authorRef = useRef();

    function addTodoHandler(event) {
        event.preventDefault();

        const enteredTeendo = teendoRef.current.value;
        const enteredAuthor = authorRef.current.value;

<<<<<<< HEAD
        //const currentDate = 

        const teendoData = {
            id: i,
            teendo: enteredTeendo,
            author: enteredAuthor,
            //date: currentDate
=======
        const teendoData = {
            id: i,
            teendo: enteredTeendo,
            author: enteredAuthor
>>>>>>> css
        };
        i++;

        props.onAddTeendo(teendoData);
    }

    return (
<<<<<<< HEAD
        <div>
            <h1>Teendő Hozzáadása</h1>
            <form onSubmit={addTodoHandler}>
                <label htmlFor="teendo"></label>
                <input type = "text" name = "teendo" id = "teendo" ref = {teendoRef}/>
                <label htmlFor="author"></label>
                <input type = "text" name = "author" id = "author" ref = {authorRef}/>
                <button type = "submit">Mentés/Hozzáadás</button>
            </form>
=======
        <div className="col-xl-12">
                <h1 className="text-center py-3 text-info">Teendő Hozzáadása</h1>
                <form className="list-group w-75 mx-auto" id="list" onSubmit={addTodoHandler}>
                    <label className="w-0 h-0 m-0 p-0" htmlFor="teendo"></label>
                    <input className="list-group-item hater text-dark rounded-top" type = "text" name = "teendo" id = "teendo" placeholder="személy" ref = {teendoRef}/>
                    <label className="w-0 h-0 m-0 p-0"htmlFor="author"></label>
                    <input className="list-group-item hater text-dark" type = "text" name = "author" id = "author" placeholder="teendő" ref = {authorRef}/>
                    <button className="list-group-item w-100 btn btn-info text-dark my-3 hater" type = "submit">Mentés/Hozzáadás</button>
                </form>
>>>>>>> css
        </div>
    );
}

export default AddTodo;