import React, {useReducer, useRef} from 'react';

// reducer
import {todoReducer, initialState} from '../reducers';

const AddTodoForm = () => {
	const [state, dispatch] = useReducer(todoReducer, initialState);
	const todoRef = useRef('');

	const submitHandler = event => {
		event.preventDefault();

		dispatch({type: 'ADD_TODO', payload: todoRef.current.value})
	}

	return (
		<div>
			<form onSubmit={submitHandler}>
				<input
					type="text"
					ref={todoRef}
					placeholder="Todo item..."
					size="50"
					required
				/>
				<button>Add Item</button>
			</form>
		</div>
	)
}

export default AddTodoForm;
