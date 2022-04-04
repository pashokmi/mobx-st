import {makeAutoObservable} from "mobx";

class Todo {
    todos = []

    constructor() {
        makeAutoObservable(this)
    }

    addTodo(todo) {
        this.todos.push(todo)
    }

    removeTodo(id) {
        this.todos = this.todos.filter(todo => todo.id !== id)
    }

    completeTodo(id) {
        this.todos = this.todos.map(todo => todo.id === id ? {...todo, completed: !todo.completed} : todo)
    }
    fetchTodos(){
        fetch('https://jsonplaceholder.typicode.com/users/1/todos')
            .then(response => response.json())
            .then(json => {
                this.todos = [...this.todos, ...json]
            })
    }
}

export default new Todo()