export const ADD_TODO = 'ADD_TODO';
export const DELETE_TODO = 'DELETE_TODO';
export const TOGGLE_TODO_STATUS = 'TOGGLE_TODO_STATUS';

export const addTodo = (todo) => ({
  type: ADD_TODO,
  payload: todo,
});

export const deleteTodo = (todoId) => ({
  type: DELETE_TODO,
  payload: todoId,
});

export const toggleTodoStatus = (todoId) => ({
  type: TOGGLE_TODO_STATUS,
  payload: todoId,
});
