import React from 'react';
import { useStoreContext } from '../hook-store';

function Todos() {
  const [stores, dispatch] = useStoreContext();
  const { todoStore } = stores;

  const handleClick = () => {
    /**
        dispatch('loading');
     * http.get('/add-todo').then((ret) => {
        dispatch('ADD_TODO');          
       }).catch((err) => {
          dispatch('error', {
            error: err
          });
       });
     **/

    dispatch('ADD_TODO');
  };

  return (
    <div onClick={handleClick}>
      123
      {todoStore.list.map(item => (
        <span key={item.name}>{item.name}</span>
      ))}
    </div>
  );
}

export default Todos;
