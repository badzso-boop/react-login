import React, {useRef} from 'react';

let i = 0;

class AddTodo extends React.Component {    
    constructor(props) {
        super(props);
        this.state = {
            bevitel: '',
        }

        this.addTodoHandler = this.addTodoHandler.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.restartInput = this.restartInput.bind(this);
    }

    handleChange(event) {
        this.setState({bevitel: event.target.value});
        this.forceUpdate();
    }

    restartInput() {
        this.setState({bevitel: ''});
        this.forceUpdate();
    }
    
    addTodoHandler(event) {
        event.preventDefault();

        // Szóval először INSERTeljük az SQL -be az új teendőt,
        // aztán RETURNINGolunk SQL-ből a beillesztett todo ID -jára
        // Ami még fontos, hogy a date-et az SQL-ből kapja :)

        const kuld = {
            teendo: this.state.bevitel
        };

        fetch('/todoAPI/addTodo', {method: 'POST', body: JSON.stringify(kuld, null, 2), headers: {'Content-type':'application/json'}}).then(res => {
            return res.json();
        }).then(data => {
            // TODO: belerakni switch-case-be
            if(data.success == 0)
            {
                console.log('Töltsd ki az üres mezőket!');
            }

            else if(data.success == 2) {
                console.log('Adatbázis hiba!');
            }

            else if (data.success == 1) {
                console.log('A mentés sikerült!');
                this.props.onSaveFetch();
                this.restartInput();
            }
/*
                let daa = new Date(data.date);
                let year =daa.getFullYear();
                let month = +daa.getMonth() + 1;
                let day = daa.getDate();
                let hour = daa.getHours();
                let minute = daa.getMinutes();
                let second = daa.getSeconds();
                month = (month < 10) ? '0' + month : month;
                day = (day < 10) ? '0' + day : day;
                hour = (hour < 10) ? '0' + hour : hour;
                minute = (minute < 10) ? '0' + minute : minute;
                second = (second < 10) ? '0' + second : second;
                const currentDate = daa.getFullYear() + "." + month + "." + day + " - " + hour + ":" + minute + ":" + second;

                const teendoData = {
                    id: data.id,
                    teendo: enteredTeendo,
                    author: data.author,
                    date: currentDate,
                };

                console.log(typeof(teendoData.date));

                props.onAddTeendo(teendoData);
*/
        });


    }

    render() {
        return (
            <div className="col-xl-12">
                    <h1 className="text-center py-3 text-info">Teendő Hozzáadása</h1>
                    <form className="list-group w-75 mx-auto" id="list" onSubmit={this.addTodoHandler}>
                        <div className="form-floating">
                            <input className="list-group-item form-control hater text-dark rounded-top" type = "text" name = "teendo" id = "teendo" placeholder="teendo" value={this.state.bevitel} onChange={this.handleChange}/>
                            <label className="w-25" htmlFor="teendo">Teendő</label>
                        </div>
                        <button className="list-group-item w-100 btn btn-info text-dark my-3 hater" type = "submit">Mentés/Hozzáadás</button>
                    </form>
            </div>
        );
    }
}

export default AddTodo;