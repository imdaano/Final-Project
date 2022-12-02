const INITIAL_STATE = {
  books: [],
  book: {},
  search: "",
  isLoading: false,
  error: false,
};

const bookReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "gettingBooks":
      return { ...state, isLoading: true };
    case "getBooks":
      return { ...state, isLoading: false, books: action.payload };
    case "errorBooks":
      return {
        ...state,
        isLoading: false,
        books: [],
        error: action.payload,
      };
    case "gettingBook":
      return { ...state, isLoading: true };
    case "getBook":
      return { ...state, isLoading: false, book: action.payload };
    case "errorBook":
      return {
        ...state,
        isLoading: false,
        book: {},
        error: action.payload,
      };
    case "searchBooks":
      return { ...state, search: action.payload, error: false };

    case "postingBooks":
      return { ...state, isLoading: true };

    case "postBooks":
      return {
        ...state,
        isLoading: false,
        books: action.payload,
        error: false,
      };

    case "errorPostBooks":
      return { ...state, isLoading: false, books: [], error: action.payload };

    case "puttingBooks":
      return { ...state, isLoading: true };

    case "putBooks":
      return {
        ...state,
        isLoading: false,
        books: action.payload,
        error: false,
      };

    case "errorPutBooks":
      return { ...state, isLoading: false, books: [], error: action.payload };

    case "deletingBooks":
      return { ...state, isLoading: true };

    case "deleteBooks":
      return {
        ...state,
        isLoading: false,
        books: action.payload,
        error: false,
      };

    case "errorDeleteBooks":
      return { ...state, isLoading: false, books: [], error: action.payload };

    default:
      return state;
  }
};
export default bookReducer;
