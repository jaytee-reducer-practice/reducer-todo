import React, {useReducer} from 'react';

// reducer stuff
import {initialState, todoReducer} from '../reducers';

const TodoList = () => {
	const [todoList, setTodoList] = useReducer(todoReducer, initialState);

	return (
		<div>
			<h1>Another Todo List Project</h1>

			{todoList.map(todoItem => {
				return <li key={todoItem.id}>{todoItem.item}</li>
			})}
		</div>
	)
}

export default TodoList;