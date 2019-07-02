import React from 'react';
import { useStore } from '../hook-store';
import { removeTodo } from '../store/TodoStore/action';

function TodoList() {
  const [stores, dispatch] = useStore();
  const { todoStore } = stores;

  const handleClick = index =>
    dispatch(
      removeTodo({
        index
      })
    );

  return (
    <div>
      {todoStore.list.map((item, index) => (
        <p key={index}>
          {item.value}
          <button onClick={() => handleClick(index)}>remove this</button>
        </p>
      ))}
    </div>
  );
}

export default TodoList;
