export default function TodoLength({ todos, removeCompleted }) {
    const completed = todos.filter((el) => el.completed).length;
    return (
        <div className="flex items-center justify-between">
            <div className="length-text">
                <span>{todos.length} / {completed}</span>
            </div>
            <div className="clear-completed">
                <button onClick={removeCompleted}>Clear completed</button>
                <button>Clear all</button>
            </div>
        </div>
    )
}