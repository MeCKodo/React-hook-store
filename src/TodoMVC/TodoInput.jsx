import React, { useState } from 'react';
import { useStore } from '../hook-store';
import { addTodd, clearTodo } from '../store/TodoStore/action';

function TodoInput() {
  const [value, setValue] = useState('');
  const [, dispatch] = useStore();

  const handleClick = () =>
    dispatch(
      addTodd({
        value
      })
    );

  const clear = () => dispatch(clearTodo());

  const onChange = e => {
    setValue(e.target.value);
  };

  return (
    <div>
      <input type="text" onChange={onChange} />
      <button onClick={handleClick}>Add one</button>
      <button onClick={clear}>clear all</button>
    </div>
  );
}

export default TodoInput;
