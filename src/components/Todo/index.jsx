import React, { useState } from 'react';
import styles from '../../components/Todo/index.module.css';

function Todo() {
    const [todos, setTodos] = useState([]);
    const [Todo, setTodo] = useState('');

function addTodo() {
    if (Todo) {
        const Todos = todos.slice();
        Todos.push(Todo);
        setTodos(Todos);
        setTodo('');
    }
}

 function deleteTodo(index) {
     const Todos = [];
     for (let i = 0; i < todos.length; i++) {
         if (i !== index) {
                Todos.push(todos[i]);
        }
    }
        setTodos(Todos);
}

function clearAll() {
        setTodos([]);
}

 localStorage.setItem('todo-app', JSON.stringify(todos));

 return (
        <div className={styles["todo-app"]}>
            <h3>Todo App</h3>
            <div className={styles["input-container"]}>
                <input
                    type="text"
                    value={Todo}
                    onChange={(event) => setTodo(event.target.value)}
                    placeholder="Add your new todo"
                />
                <button onClick={addTodo} className={styles["add-button"]}><i className="fa-solid fa-plus"></i></button>
            </div>
            <ul className={styles["todo-list"]}>
                {todos.map((todo, index) => (
                    <li key={index} className={styles["todo-item"]}>
                        {todo}
                        <button onClick={() => deleteTodo(index)} className={styles["delete-button"]}><i className="fa-solid fa-trash-can"></i></button>
                    </li>
                ))}
            </ul>
            <div className={styles["footer"]}>
                <p>You have {todos.length} pending tasks</p>
                <button onClick={clearAll} className={styles["clear-all-button"]}>Clear All</button>
            </div>
        </div>
    );
}

export default Todo;
