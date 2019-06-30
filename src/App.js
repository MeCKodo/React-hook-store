import React from 'react';
import { StoreProvider } from './hook-store';
import { todosReducer } from './store/TodoStore/reducer';
import mainStore from './store';
import Todos from './TodoMVC/Todos';
import TodoInput from './TodoMVC/TodoInput';
import './App.css';

function App() {
  return (
    <StoreProvider reducer={todosReducer} initState={mainStore}>
      <TodoInput />
      <Todos />
    </StoreProvider>
  );
}

export default App;
