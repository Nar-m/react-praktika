import { Component } from "react";
import TodoForm from "./TodoForm";
import TodoItem from "./TodoItem";
import TodoLength from "./TodoLength";
import './todolist.css';
import TodoCompleted from "./TodoCompleted";
import TodoProgress from "./TodoProgress";

export class TodoContent extends Component {
    constructor(props) {
        super()
        this.state = {
            todos: props.todos,
            inputs: props.inputs,
            edit: props.edit,
            progress: props.progress,
            completed: props.completed,
            active: props.active,
        }
    }
    addTask = (event) => {
        event.preventDefault();
        const { todos, inputs, edit } = this.state;
        if (inputs.trim() === "") return;
        if (edit !== null) {
            const editTasks = todos.map((element) => {
                return element.id === edit.id ? { ...element, name: inputs } : element
            })
            this.setState({
                todos: editTasks,
                edit: null,
                inputs: ''
            }, () => {
                localStorage.setItem('todos', JSON.stringify(editTasks))
            })
        }
        else {
            const id = Math.floor(Math.random() * Date.now() + 1);
            const newtasks = [...todos, { id: id, name: inputs, completed: false }]

            this.setState({
                todos: newtasks,
                inputs: '',
                edit: null,
            }, () => {
                localStorage.setItem('todos', JSON.stringify(newtasks))
            })
        }
    }

    HandleChange = (value) => {
        this.setState({ inputs: value })
    }
    ChangeActive = (actives) => {
        this.setState({
            active: actives
        })
    }
    deleteTasks = (id) => {
        const { todos } = this.state;
        const deletes = todos.filter((el) => el.id !== id);

        this.setState({
            todos: deletes,
        }, () => {
            localStorage.setItem('todos', JSON.stringify(deletes))
        })
    }
    editTasks = (id) => {
        const { todos } = this.state;
        const editTaks = todos.find((el) => el.id === id);
        if (editTaks) {
            this.setState({
                edit: editTaks,
                inputs: editTaks.name
            }, () => {
                localStorage.setItem('edit', JSON.stringify(editTaks))
            })
        }
    }
    ToggleCompleted = (id) => {
        const { todos, completed } = this.state;
        const togglecompleted = todos.map((element) => {
            return element.id === id ? { ...element, completed: !element.completed } : element
        })

        this.setState({
            todos: togglecompleted,
        }, () => {
            localStorage.setItem('todos', JSON.stringify(completed))
        })
    }
    removeCompleted = () => {
        const { todos } = this.state;
        let filtercompleted = todos.filter((el) => !el.completed);
        const activeitem = todos.filter((el) => el.completed);
        this.setState({
            todos: filtercompleted,
            completed: activeitem,

        }, () => {
            localStorage.setItem('todos', JSON.stringify(filtercompleted))
            localStorage.setItem('completed', JSON.stringify(activeitem))
        })
    }

    render() {
        const { todos, inputs, edit, active, completed, progress } = this.state;
        return (
            <div className="flex py-5 justify-center">
                <div className="todo-cart">
                    <div className="todo-body">
                        <TodoForm inputs={inputs}
                            addTask={this.addTask}
                            edit={edit}
                            HandleChange={this.HandleChange} />
                        <ul className="nav-tabs">

                            <li onClick={() => this.ChangeActive('active')} className={`${active === 'active' ? 'nav-item active' : 'nav-item'}`}>Active</li>
                            <li onClick={() => this.ChangeActive('completed')} className={`${active === 'completed' ? 'nav-item active' : 'nav-item'}`}>Completed</li>

                        </ul>
                        <TodoLength todos={todos} removeCompleted={this.removeCompleted} />
                        <TodoProgress progress={progress} />
                        {active === 'active' ? <TodoItem
                            ToggleCompleted={this.ToggleCompleted}
                            deleteTasks={this.deleteTasks}
                            active={active}
                            editTaks={this.editTasks}
                            todos={todos} /> : ''}
                        {active === 'completed' ? <TodoCompleted active={active} editTaks={this.editTasks} completed={completed} /> : ''}
                    </div>

                </div>
            </div>
        )
    }
}