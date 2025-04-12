export default function TodoItem({ todos, ToggleCompleted, deleteTasks, editTaks }) {
    return (
        <div className="tab-content">
            <div className="tab-item">
                <ul className="list">
                    {todos.map((element, index) => {
                        return (
                            <li key={index} className={`flex items-center justify-between p-4 ${element.completed ? 'line-through' : 'no-underline'}`}>
                                <div className="name-list">
                                    <input onChange={() => ToggleCompleted(element.id)} checked={element.completed} id="checkbox" type="checkbox" />
                                    {element.name}
                                </div>
                                <div className="change-deletes">
                                    <span className="remove" onClick={() => deleteTasks(element.id)} >
                                        <i className="fa-solid fa-trash-can"></i>
                                    </span>
                                    <span onClick={() => editTaks(element.id)} className="edit">
                                        <i className="fa-regular fa-pen-to-square"></i>
                                    </span>
                                </div>
                            </li>
                        )
                    })}
                </ul>
            </div>
        </div>
    )
}