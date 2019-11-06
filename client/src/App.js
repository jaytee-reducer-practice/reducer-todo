import React from 'react';
import './App.css';

// components
import TodoList from './components/TodoList';
import AddTodoForm from './components/AddTodoForm';

function App() {
  return (
    <div className="App">
			<h1>Another Todo List Project</h1>
			
			<AddTodoForm />
			<TodoList />
		</div>
  );
}

export default App;
