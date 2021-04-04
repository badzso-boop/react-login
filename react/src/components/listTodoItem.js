import React from 'react';

var szerk = false;

class ListTodoItem extends React.Component{
    constructor(props){
        super(props)

        this.state = {
            szoveg: props.teendo,
            date: props.date
        };

        this.id = props;

        this.todoDeleteHandler = this.todoDeleteHandler.bind(this);
        this.todoEditHandler = this.todoEditHandler.bind(this);
        this.todoSaveHandler = this.todoSaveHandler.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        this.setState({szoveg: event.target.value});
        this.forceUpdate();
    }
    
    todoDeleteHandler() {
        this.props.onDelete(this.id);
    }

    todoEditHandler() {
        szerk = true;

        this.forceUpdate();
    }

    todoSaveHandler() {
        szerk = false;
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

        const date_tmp = d.getFullYear() + "." + month + "." + day + " - " + hour + ":" + minute + ":" + second;

        this.setState({date: date_tmp})

        const saveData = {
            szoveg: this.state.szoveg,
            id: this.id,
            date: date_tmp
        };


        this.props.onSave(saveData);

        this.forceUpdate();
    }

    render() {
        return (
            <div className="col-xl-12" id="torik">
                <h4 className="font-weight-bold text-light">{this.props.author}</h4>
                {szerk ? <div><input value={this.state.szoveg} onChange = {this.handleChange} type = "text"/><button onClick={this.todoSaveHandler}>Mentés</button></div> : <h3 className="text-light ml-3">{this.state.szoveg}</h3>}
                <p className="font-italic text-light">{this.state.date}</p>
                <button className="list-group-item btn btn-block btn-info text-dark my-3 hater" id="todoBtn" onClick={this.todoEditHandler}>Szerkesztés</button>
                <button className="list-group-item btn btn-block btn-info text-dark my-3 hater" id="todoBtn" onClick={this.todoDeleteHandler}>Törlés</button>
                
            </div>
        );
    }
}

export default ListTodoItem;