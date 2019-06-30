import React, { useState } from 'react';
import { useStoreContext } from '../hook-store';
import ACTION from '../store/TodoStore/action';

function TodoInput() {
  const [value, setValue] = useState('');
  const [{ todoStore }, dispatch] = useStoreContext();

  const handleClick = () => {
    dispatch(
      ACTION({
        value,
      }),
    );
    console.log(todoStore);
  };

  const onChange = e => {
    setValue(e.target.value);
  };

  return (
    <div>
      <input type="text" onChange={onChange} />
      <button onClick={handleClick}>Add one</button>
    </div>
  );
}

export default TodoInput;
