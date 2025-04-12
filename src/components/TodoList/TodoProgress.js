export default function TodoProgress({progress}) {
    return (
        <div className="todo-progress" style={{borderRadius: '5px'}}>
            <div style={{width: `${progress}%`, height: '100%', background: 'red', borderRadius: '5px'}} className="child-progress"></div>
        </div>
    )
}