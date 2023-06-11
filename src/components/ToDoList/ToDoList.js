import React, { useState } from 'react';
import './ToDoList.css';
import Plus from '../../Assets/Images/Plus.png'

const ToDo = () => {
  const [todos, setTodos] = useState([]);

  const addTodo = (event) => {
    event.preventDefault();

    const toDoInput = document.getElementById('toDoInput');
    const toDoText = toDoInput.value.trim();

    if (toDoText !== '') {
      const newTodo = {
        id: new Date().getTime(),
        text: toDoText,
        completed: false,
      };

      setTodos((prevTodos) => [newTodo, ...prevTodos]); 

      toDoInput.value = '';
    }
  };

  const toggleTodo = (id) => {
    setTodos((prevTodos) =>
      prevTodos.map((todo) => {
        if (todo.id === id) {
          return { ...todo, completed: !todo.completed }; 
        }
        return todo;
      })
    );
  };

  const sortedTodos = [...todos].sort((a, b) => {
    if (a.completed && !b.completed) {
      return -1; 
    }
    if (!a.completed && b.completed) {
      return 1; 
    }
    return 0; 
  });

  return (
    <div id='box4ToDoList'>
      <h1>To-Do List</h1>

      <ul id="toDoList">
        {sortedTodos.map((todo) => (
          <li
            key={todo.id}
            className={todo.completed ? 'completed' : ''}
            onClick={() => toggleTodo(todo.id)}
          >
            <input
              type="checkbox"
              checked={todo.completed}
              onChange={() => toggleTodo(todo.id)}
            />
            {todo.text}
          </li>
        ))}
      </ul>

      <form id="toDoForm" onSubmit={addTodo}>

        <input 

        type="text" 
        id="toDoInput" 
        placeholder="Введіть завдання" 
        
        />

        <button 

        type="submit" 
        id='ToDoButton'>
        <img className='plusButtonToDoList' 
        src={Plus} alt="+" />

        </button>

      </form>
    </div>
  );
};

export default ToDo;