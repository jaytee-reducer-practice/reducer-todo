import uuid from 'uuid';

export const initialState = [
	{
		item: 'Learn about reducers',
		completed: false,
		id: uuid()
	},
	{
		item: 'Cry',
		completed: false,
		id: uuid()
	},
	{
		item: 'Die',
		completed: false,
		id: uuid()
	},
]

export const todoReducer = (state, action) => {
	switch(action.type) {
		case 'ADD_TODO':
			console.log(state)
			return [...state, {
				item: action.payload,
				completed: false,
				id: uuid()
			}];
		default:
			return state;
	}
}