import React from 'react';
import './App.css';
import AddTodo from './components/AddTodo';
import TodoList from './components/TodoList';
import DoneList from './components/DoneList';

function App() {
  return (
    <div>
      <h1>ToDo App</h1>
      <AddTodo />
      <TodoList />
      <DoneList />
    </div>
  );
}

export default App;
