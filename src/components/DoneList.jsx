import React from 'react';
import { useSelector } from 'react-redux';

const DoneList = () => {
  const doneTodos = useSelector((state) => state.todos.filter(todo => todo.done));

  return (
    <div>
      <h2>Done List</h2>
      <ul>
        {doneTodos.map((todo) => (
          <li key={todo.id}>{todo.text}</li>
        ))}
      </ul>
    </div>
  );
};

export default DoneList;
