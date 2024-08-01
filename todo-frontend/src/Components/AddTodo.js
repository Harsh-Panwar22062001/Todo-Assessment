import React, { useState } from 'react';

const AddTodo = ({ addTodo, setInputBorderColor }) => {
    const [title, setTitle] = useState('');

    const handleChange = (event) => {
        setTitle(event.target.value);
        setInputBorderColor(''); // Reset input border color when typing
    };

    const handleAdd = () => {
        if (title) {
            addTodo(title);
            setTitle('');
        }
    };

    return (
        <div>
            <input
                type="text"
                value={title}
                onChange={handleChange}
                onFocus={() => setInputBorderColor('green')}  
                onBlur={() => setInputBorderColor('')}  
                className="todo-input"  
                placeholder="Enter task"
            />
            <button onClick={handleAdd}>Add Task</button>
        </div>
    );
};

export default AddTodo;
