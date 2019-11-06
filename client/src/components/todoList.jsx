import React, {useReducer} from 'react';

// reducer stuff
import {initialState, todoReducer} from '../reducers';

const TodoList = () => {
	const [todoList, setTodoList] = useReducer(todoReducer, initialState);

	return (
		<div>
			
		</div>
	)
}

export default TodoList;