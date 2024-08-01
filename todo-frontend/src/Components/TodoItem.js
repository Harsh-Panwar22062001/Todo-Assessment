import React from 'react';
import './TodoItem.css';  

const TodoItem = ({ todo, toggleTodo, deleteTodo }) => {
    return (
        <li className="todo-item">
            <input
                type="checkbox"
                checked={todo.isCompleted}
                onChange={() => toggleTodo(todo.id)}
            />
            {todo.title}
            <button onClick={() => deleteTodo(todo.id)} className="remove-button">Remove</button>
        </li>
    );
};

export default TodoItem;
