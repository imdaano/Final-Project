const INITIAL_STATE = {
    books: [],
    book: {},
    isLoading: false,
    error: false,
};

const bookReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case "gettingBooks":
            return { ...state, isLoading: true };
        case "getBooks":
            return { ...state, isLoading: false, checkpoints: action.payload };
        case "errorBooks":
            return {
                ...state,
                isLoading: false,
                checkpoints: [],
                error: action.payload,
            };
        case "gettingBook":
            return { ...state, isLoading: true };
        case "getBook":
            return { ...state, isLoading: false, checkpoint: action.payload };
        case "errorBook":
            return {
                ...state,
                isLoading: false,
                checkpoint: {},
                error: action.payload,
            };






        default:
            return state;
    }



};
export default bookReducer;