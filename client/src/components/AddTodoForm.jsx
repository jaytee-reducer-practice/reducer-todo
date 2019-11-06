import React, {useRef} from 'react';

const AddTodoForm = props => {
	const todoRef = useRef('');

	const submitHandler = event => {
		event.preventDefault();

		props.dispatch({type: 'ADD_TODO', payload: todoRef.current.value})
		todoRef.current.value = '';
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
