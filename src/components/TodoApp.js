import React, { useState } from 'react';
import './TodoApp.css';

const TodoApp = () => {
    const [tasks, setTasks] = useState([]);
    const [newTask, setNewTask] = useState('');
    const [newTaskDescription, setNewTaskDescription] = useState('');

    const handleInputChange = (event) => {
        setNewTask(event.target.value);
    };

    const handleDescriptionChange = (event) => {
        setNewTaskDescription(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        if (newTask.trim() !== '') {
            const newTaskObject = {
                id: tasks.length + 1,
                name: newTask,
                description: newTaskDescription,
            };
            setTasks([...tasks, newTaskObject]);
            setNewTask('');
            setNewTaskDescription('');
        }
    };

    const handleRemoveTask = (index) => {
        const updatedTasks = [...tasks];
        updatedTasks.splice(index, 1);
        setTasks(updatedTasks);
    };

    return (
        <div>
            <h1>TAREFAS:</h1>

            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="Nova tarefa"
                    value={newTask}
                    onChange={handleInputChange}
                />
                <input
                    type="text"
                    placeholder="Descrição da tarefa"
                    value={newTaskDescription}
                    onChange={handleDescriptionChange}
                />
                <button type="submit">Adicionar</button>
            </form>

            <ul>
                {tasks.map((task, index) => (
                    <li key={task.id}>
                        <strong>{task.name}</strong>: {task.description}
                        <br />
                        <button onClick={() => handleRemoveTask(index)}>Remover</button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default TodoApp;
