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
        let year =d.getFullYear();
        let month = d.getMonth();
        let day = d.getDate();
        let hour = d.getHours();
        let minute = d.getMinutes();
        let second = d.getSeconds();
        
        if(month < 10)
        {
            month = '0'+(month+1);
        }

        if(day < 10)
        {
            day = '0'+day;
        }

        if(hour < 10)
        {
            hour = '0'+hour;
        }
        
        if(minute < 10)
        {
            minute = '0'+minute;
        }
        
        if(second < 10)
        {
            second = '0'+second;
        }

        const currentDate = d.getFullYear() + "." + month + "." + day + " - " + hour + ":" + minute + ":" + second;

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
                    <label className="w-0 h-0 m-0 p-0" htmlFor="teendo"></label>
                    <input className="list-group-item hater text-dark rounded-top" type = "text" name = "teendo" id = "teendo" placeholder="teendo" ref = {teendoRef}/>
                    <label className="w-0 h-0 m-0 p-0"htmlFor="author"></label>
                    <input className="list-group-item hater text-dark" type = "text" name = "author" id = "author" placeholder="személy" ref = {authorRef}/>
                    <button className="list-group-item w-100 btn btn-info text-dark my-3 hater" type = "submit">Mentés/Hozzáadás</button>
                </form>
        </div>
    );
}

export default AddTodo;