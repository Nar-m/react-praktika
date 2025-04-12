export default function TodoCompleted({ completed, active, editTaks }) {
    return (
        <div className="tab-content">
            <div className="tab-item">
                <ul className={`${active === 'completed' ? 'list active' : 'list'}`}>
                    {completed.map((element, index) => {
                        return (
                            <li key={index} className={`flex items-center justify-between p-4 ${element.completed ? 'line-through' : 'no-underline'}`}>
                                <div className="name-list">
                                    <input checked={element.completed} id="checkbox" type="checkbox" />
                                    {element.name}
                                </div>
                                <div className="change-deletes">
                                    <span style={{ color: 'green', fontSize: '17px', marginRight: '6px' }}>
                                        <i className="fa-solid fa-check"></i>
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