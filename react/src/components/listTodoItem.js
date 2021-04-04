function ListTodoItem(props) {
    const id = props;
    function todoDeleteHandler() {
        props.onDelete(id);
    }

    function todoEditHandler() {
        props.onEdit(id);
    }

    return (
        <div>
            <h3>{props.teendo}</h3>
            <h4>{props.author}</h4>
            <p>{props.date}</p>
            <button onClick={todoEditHandler}>Szerkesztés</button>
            <button onClick={todoDeleteHandler}>Törlés</button>
        </div>
    );
}

export default ListTodoItem;