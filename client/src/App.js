import React, {useReducer} from 'react';
import './App.css';

// components
import TodoList from './components/TodoList';
import AddTodoForm from './components/AddTodoForm';

// reducer stuff
import {todoReducer, initialState} from './reducers';

function App() {
	const [todoList, dispatch] = useReducer(todoReducer, initialState);

  return (
    <div className="App">
			<h1>Another Todo List Project</h1>

			<AddTodoForm dispatch={dispatch} />
			<TodoList todoList={todoList} />
		</div>
  );
}

export default App;
