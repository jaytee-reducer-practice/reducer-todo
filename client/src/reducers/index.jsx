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

export const todoReducer = (state = initialState, action) => {
	switch(action.type) {
		default:
			return state;
	}
}