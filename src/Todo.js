import React, {useEffect} from 'react';
import {observer} from "mobx-react-lite";
import todo from './store/todo'
import './App.css'

const Todo = observer(() => {

    useEffect(() => {
        todo.fetchTodos()
    }, [])

    const deleteHandler = (id) => {
        // eslint-disable-next-line no-restricted-globals
        if (confirm('Delete todos?')) {
            todo.removeTodo(id)
        }
    }

    return (
        <div>
            {todo.todos.map(t =>
                    <div key={t.id} className={'todo__item'}>
                        <input className={'todo__input'} type={"checkbox"} checked={t.completed}
                               onChange={() => todo.completeTodo(t.id)}/>
                        <p className={t.completed ? 'todo__text todo__completed' : 'todo__text'}>{t.title}</p>
                        <button className={'todo__btn'} onClick={() => deleteHandler(t.id)}>x</button>
                    </div>
            )}
        </div>
    );
});

export default Todo;