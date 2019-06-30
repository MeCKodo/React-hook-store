const todosReducer = (state, action) => {
  const { type, payload } = action;
  console.log(type, payload);
  switch (type) {
    case 'ADD_TODO':
      const { todoStore } = state;
      return {
        ...state,
        todoStore: {
          list: [...todoStore.list, payload],
        },
      };
    default:
      return state;
  }
};

export { todosReducer };
