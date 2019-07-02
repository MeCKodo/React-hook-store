import { ADD_TODO, REMOVE_TODO, CLEAR_TODO } from './constant';

const addTodd = payload => ({
  payload,
  type: ADD_TODO
});

const clearTodo = () => ({ type: CLEAR_TODO });

const removeTodo = payload => ({ payload, type: REMOVE_TODO });

export { addTodd, clearTodo, removeTodo };
