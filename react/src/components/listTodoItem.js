function ListTodoItem(props) {
    const id = props;
    function todoDeleteHandler() {
        props.onDelete(id);
    }

    return (
        <div className="col-xl-12" id="torik">
            <h3 className="font-weight-bold text-light">{props.teendo}</h3>
            <h4 className="text-light ml-3">{props.author}</h4>
            <p className="font-italic text-light">{props.date}2019.01.01</p>
            <button className="list-group-item btn btn-block btn-info text-dark my-3 hater" id="todoBtn">Szerkesztés</button>
            <button className="list-group-item btn btn-block btn-info text-dark my-3 hater" id="todoBtn" onClick={todoDeleteHandler}>Törlés</button>
        </div>
    );
}

export default ListTodoItem;