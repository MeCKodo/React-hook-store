import { ADD_TODO, REMOVE_TODO, CLEAR_TODOS } from './constant';

const addTodd = payload => ({
  payload,
  type: ADD_TODO,
});

const clearTodos = () => ({ type: CLEAR_TODOS });

const removeTodo = payload => ({ payload, type: REMOVE_TODO });

export { addTodd, clearTodos, removeTodo };
