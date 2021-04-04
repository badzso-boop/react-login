import {useRef} from 'react';
import DatePicker from 'react-date-picker';

let i = 0;

function AddTodo(props) {
   // const [value, onChange] = useState(new Date());
    
    const teendoRef = useRef();
    const authorRef = useRef();

    function addTodoHandler(event) {
        event.preventDefault();

        const enteredTeendo = teendoRef.current.value;
        const enteredAuthor = authorRef.current.value;

        //const currentDate = 

        const teendoData = {
            id: i,
            teendo: enteredTeendo,
            author: enteredAuthor,
            //date: currentDate
        };
        i++;

        props.onAddTeendo(teendoData);
    }

    return (
        <div>
            <h1>Teendő Hozzáadása</h1>
            <form onSubmit={addTodoHandler}>
                <label htmlFor="teendo"></label>
                <input type = "text" name = "teendo" id = "teendo" ref = {teendoRef}/>
                <label htmlFor="author"></label>
                <input type = "text" name = "author" id = "author" ref = {authorRef}/>
                <button type = "submit">Mentés/Hozzáadás</button>
            </form>
        </div>
    );
}

export default AddTodo;