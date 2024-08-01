import React, { useEffect, useState } from 'react';
import axios from 'axios';
import TodoItem from './TodoItem';
import AddTodo from './AddTodo';
import './TodoList.css';  

const TodoList = () => {
    const [todos, setTodos] = useState([]);
    const [inputBorderColor, setInputBorderColor] = useState('');  

    useEffect(() => {
        axios.get('http://localhost:5181/api/todos')
            .then(response => setTodos(response.data))
            .catch(error => console.error('Error fetching todos:', error));
    }, []);

    const addTodo = (title) => {
        axios.post('http://localhost:5181/api/todos', { title, isCompleted: false })
            .then(response => {
                setTodos([...todos, response.data]);
                setInputBorderColor(''); // Reset input border color after adding a task
            })
            .catch(error => console.error('Error adding todo:', error));
    };

    const toggleTodo = (id) => {
        axios.put(`http://localhost:5181/api/todos/${id}`)
            .then(() => setTodos(todos.map(todo => todo.id === id ? { ...todo, isCompleted: !todo.isCompleted } : todo)))
            .catch(error => console.error('Error toggling todo:', error));
    };

    const deleteTodo = (id) => {
        axios.delete(`http://localhost:5181/api/todos/${id}`)
            .then(() => setTodos(todos.filter(todo => todo.id !== id)))
            .catch(error => console.error('Error deleting todo:', error));
    };

    return (
        <div>
            <h1>Todo List</h1>
            <AddTodo addTodo={addTodo} setInputBorderColor={setInputBorderColor} />
            <ul>
                {todos.map(todo => (
                    <TodoItem
                        key={todo.id}
                        todo={todo}
                        toggleTodo={toggleTodo}
                        deleteTodo={deleteTodo}
                    />
                ))}
            </ul>
        </div>
    );
};

export default TodoList;
