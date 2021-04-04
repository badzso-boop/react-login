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
        const date_tmp = d.getFullYear() + "." + d.getMonth() + "." + d.getDate() + " - " + d.getHours() + ":" + d.getMinutes() + ":" + d.getSeconds();

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
            <div className="col-xl-12 mb-3" id="torik">
                <div className="card feher p-2">
                    <h3 className="text-light font-weight-bold">{this.props.author}</h3>
                    {szerk ? <div><textarea value={this.state.szoveg} className="rounded-lg hater" onChange = {this.handleChange} type = "text"/><button className="d-inline btn btn-squared-default btn-info text-dark mx-1 mt-2" id="saveBtn" onClick={this.todoSaveHandler}><i class="fa fa-floppy-o" aria-hidden="true"></i></button></div> : <h4 className=" text-light ml-3">{this.state.szoveg}</h4>}
                    <div className="">
                        <p className="d-inline font-italic text-light mr-4">{this.state.date}</p>
                        <button className="d-inline btn btn-squared-default btn-info text-dark mx-1 mt-2" onClick={this.todoEditHandler}><i class="fa fa-pencil-square-o" aria-hidden="true"></i></button>
                        <button className="d-inline btn btn-squared-default btn-info text-dark mx-1 mt-2" onClick={this.todoDeleteHandler}><i class="fa fa-trash" aria-hidden="true"></i></button>
                    </div>
                </div>
            </div>
        );
    }
}

export default ListTodoItem;