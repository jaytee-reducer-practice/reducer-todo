import React, {useReducer} from 'react';

// reducer stuff
import {todoReducer, initialState} from '../reducers';

const TodoList = () => {
	const [todoList, dispatch] = useReducer(todoReducer, initialState);

	return (
		<div>
			{todoList.map(todoItem => {
				return <li key={todoItem.id}>{todoItem.item}</li>
			})}
		</div>
	)
}

export default TodoList;