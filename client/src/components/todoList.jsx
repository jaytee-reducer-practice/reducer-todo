import React from 'react';

const TodoList = props => {

	return (
		<div>
			{props.todoList.map(todoItem => {
				return <li key={todoItem.id}>{todoItem.item}</li>
			})}
		</div>
	)
}

export default TodoList;