import { applyMiddleware, combineReducers, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import authReducer from "./auth/auth.reducer";
import checkpointReducer from "./checkpoint/chekpoint.reducer";
import bookReducer from "./books/books.reducer";

const rootReducer = combineReducers({
  auth: authReducer,
  checkpoints: checkpointReducer,
  books: bookReducer,
});

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk))
);

export default store;
