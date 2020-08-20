import React from 'react';
import '../styles/App.css';
// @ts-ignore
import UserList from './UserList';
// @ts-ignore
import TodoList from './TodoList';

const App = () => (
    <>
        <UserList />
        <TodoList />
    </>
);

export default App;