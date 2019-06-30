import React from 'react';
import { StoreProvider } from './hook-store';
import { todosReducer } from './store/TodoStore/reducer';
import mainStore from './store';
import Todos from './TodoList/Todos';
import './App.css';

function App() {
  return (
    <StoreProvider reducer={todosReducer} initState={mainStore}>
      <div>sdf</div>
      <Todos />
    </StoreProvider>
  );
}

export default App;
