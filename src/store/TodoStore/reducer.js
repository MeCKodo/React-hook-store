import ACTION from './action';

const todosReducer = (state, action) => {
  switch (action) {
    case ACTION.ADD_TODO:
      const { todoStore } = state;
      return {
        ...state,
        todoStore: {
          list: [
            ...todoStore.list,
            {
              name: 'kodo1',
            },
          ],
        },
      };
    default:
      return state;
  }
};

export { todosReducer };
