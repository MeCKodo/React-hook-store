import { ADD_TODO, REMOVE_TODO, CLEAR_TODOS } from './constant';

const todosReducer = (state, action) => {
  const { type, payload } = action;
  console.log(type, payload);
  const { todoStore } = state;

  switch (type) {
    case ADD_TODO:
      return {
        ...state,
        todoStore: {
          list: [...todoStore.list, payload],
        },
      };
    case REMOVE_TODO:
      const list = [...todoStore.list];
      list.splice(payload.index, 1);
      return {
        ...state,
        todoStore: {
          list,
        },
      };
    case CLEAR_TODOS:
      return {
        ...state,
        todoStore: {
          list: [],
        },
      };
    default:
      return state;
  }
};

export { todosReducer };
