import { ADD_TODO, DELETE_TODO, TOGGLE_TODO_STATUS } from './actions';

const initialState = {
  todos: [],
};

const todoReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TODO:
      return {
        ...state,
        todos: [...state.todos, action.payload],
      };
    case DELETE_TODO:
      return {
        ...state,
        todos: state.todos.filter((todo) => todo.id !== action.payload),
      };
    case TOGGLE_TODO_STATUS:
      return {
        ...state,
        todos: state.todos.map((todo) =>
          todo.id === action.payload
            ? { ...todo, done: !todo.done }
            : todo
        ),
      };
    default:
      return state;
  }
};

export default todoReducer;
