import React from 'react';
import { useStoreContext } from '../hook-store';
import { removeTodo } from '../store/TodoStore/action';

function Todos() {
  const [stores, dispatch] = useStoreContext();
  const { todoStore } = stores;

  const handleClick = index =>
    dispatch(
      removeTodo({
        index,
      }),
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

export default Todos;
