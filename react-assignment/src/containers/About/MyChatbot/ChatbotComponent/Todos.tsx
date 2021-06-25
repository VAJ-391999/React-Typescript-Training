import { FirstPage } from '@material-ui/icons';
import React, { useState, useEffect } from 'react';
import './Todo.css';

const Todos = (props: any) => {

    const { setState } = props
    
    useEffect(() => {
        fetch('http://jsonplaceholder.typicode.com/todos')
        .then(res => res.json())
        .then(data => {
            const firstFiveTodos = data.slice(0,6)
            setState((state: any) => ({...state, todos: firstFiveTodos}))
        })
    }, [])

   const renderTodos = () => {
    return props.todos.map((todo: any, index: any) => {
        return (<li className="todo-widget-list-item" key={todo.id}>
            {todo.title}
        </li>)
    })
   }

    return (
        <div className="todos-widget">
            <ul className="todo-widget-list">
                {renderTodos()}
            </ul>
        </div>
    )
}

export default Todos;