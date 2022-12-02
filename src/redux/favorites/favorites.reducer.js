const INITIAL_STATE = [];

const favoritesReducer = (state = INITIAL_STATE, action) => {
	switch (action.type) {
		case "addBook":
			return [...state, action.payload];

		case "removeBook":
			const index = state.indexOf(action.payload);
			state.splice(index, 1);
			return state;

		case "removeAll":
			state.map((book) => (book.inFavorites = false));
			return INITIAL_STATE;

		default:
			return state;
	}
};

export default favoritesReducer;