export const addToFavorites = (book, navigate, dispatch) => {
	dispatch({ type: "addFavorite", payload: book });
	book.inFavorites = true;
	navigate("");
};

export const removeFromFavorites = (book, navigate, dispatch) => {
	dispatch({ type: "removeFavorite", payload: book });
	book.inFavorites = false;
	navigate("");
};