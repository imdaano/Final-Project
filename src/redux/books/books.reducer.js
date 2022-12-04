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
      return { ...state, isLoading: false, books: [...action.payload] };
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
    case "searchBook": //falta funcion search en books.functions.js
      return { ...state, search: action.payload, error: false };

    case "postingBook":
      return { ...state, isLoading: true };

    case "postBook":
      return {
        ...state,
        isLoading: false,
        books: [...state.books, action.payload],
        error: false,
      };

    case "errorPostBook":
      return { ...state, isLoading: false, books: [], error: action.payload };

    case "puttingBook":
      return { ...state, isLoading: true };

    case "putBook":
      return {
        ...state,
        isLoading: false,
        books: action.payload,
        error: false,
      };

    case "errorPutBook":
      return { ...state, isLoading: false, books: [], error: action.payload };

    case "deletingBook":
      return { ...state, isLoading: true };

    case "deleteBook":
      return {
        ...state,
        isLoading: false,
        books: [...action.payload],
        error: false,
      };

    case "errorDeleteBook":
      return { ...state, isLoading: false, books: [], error: action.payload };

    default:
      return state;
  }
};
export default bookReducer;
