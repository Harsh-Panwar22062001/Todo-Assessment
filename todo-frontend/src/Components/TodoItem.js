import React from 'react';

const TodoItem = ({ todo, toggleTodo, deleteTodo }) => {
    return (
        <li>
            <input type="checkbox" checked={todo.isCompleted} onChange={() => toggleTodo(todo.id)} />
            {todo.title}
            <button onClick={() => deleteTodo(todo.id)}>Delete</button>
        </li>
    );
};

export default TodoItem;
