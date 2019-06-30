import React from 'react';
import { useStoreContext } from '../hook-store';

function Todos() {
  const [stores] = useStoreContext();
  const { todoStore } = stores;

  return (
    <div>
      {todoStore.list.map(item => (
        <span key={item.value}>{item.value}</span>
      ))}
    </div>
  );
}

export default Todos;
