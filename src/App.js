import React from 'react';
import { StoreProvider } from './hook-store';
import { todoReducer } from './store/TodoStore/reducer';
import mainStore from './store';
import TodoList from './TodoMVC/TodoList';
import TodoInput from './TodoMVC/TodoInput';
import './App.css';

function App() {
  return (
    <StoreProvider reducer={todoReducer} initState={mainStore}>
      <TodoInput />
      <TodoList />
    </StoreProvider>
  );
}

export default App;
