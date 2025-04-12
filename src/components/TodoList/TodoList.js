import { TodoContent } from "./TodoContent";

export default function TodoList() {
    const todos = JSON.parse(localStorage.getItem('todos')) || [];
    const inputs = '';
    const edit = localStorage.getItem('edit') || null;
    const progress = localStorage.getItem('progress') || 0;
    const completed = JSON.parse(localStorage.getItem('completed')) || [];
    const active = 'active';

    return (
        <div>
            <TodoContent
                todos={todos}
                inputs={inputs}
                progress={progress}
                completed={completed}
                edit={edit}
                active={active}
            />
        </div>
    )
}