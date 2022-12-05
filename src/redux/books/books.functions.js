import { API, API2 } from "../../shared/services/api";
import { getUserById } from "../auth/auth.functions";
import { getOneCheckpoint } from "../checkpoint/checkpoint.functions";
// import { API2 } from "../../shared/services/api";

export const getBooks = () => async (dispatch) => {
  dispatch({ type: "gettingBooks" });

  try {
    const res = await API.get("/books");
    dispatch({ type: "getBooks", payload: res.data });
  } catch (error) {
    dispatch({ type: "errorBooks", payload: error.message });
  }
};

export const getOneBook = (title, books) => async (dispatch) => {
  dispatch({ type: "gettingBook" });

  try {
    const res = await API.get(`/books/title/${title}`);
    dispatch({ type: "getBook", payload: res.data });
  } catch (error) {
    dispatch({ type: "errorBook", payload: error.message });
  }
};

export const getBookById = (id) => async (dispatch) => {
  dispatch({ type: "gettingBook" });
  try {
    const res = await API.get("/books/id/:id");
    console.log(res);
    dispatch({ type: "getBook", payload: res.data });
  } catch (error) {
    dispatch({ type: "errorBook", payload: error.message });
  }
};

export const postNewBook = (dataForm, navigate) => async (dispatch) => {
  dispatch({ type: "postingBook" });
  try {
    const res = await API2.post("/books/create", dataForm);
    console.log(res);
    dispatch({ type: "postBook" });
    navigate(`/books/${res.data.title}`);
  } catch (error) {
    dispatch({ type: "errorPostBook", payload: error });
  }
};

export const putBook = (id, dataForm) => async (dispatch) => {
  dispatch({ type: "puttingBook" });
  try {
    const res = await API2.put(`/books/edit/${id}`, dataForm);
    console.log(res);
    dispatch({ type: "putBook" });
  } catch (error) {
    dispatch({ type: "errorPutBook", payload: error });
  }
};

export const deleteBook = (id, navigate) => async (dispatch) => {
  dispatch({ type: "deletingBook" });

  try {
    await API.delete(`/books/delete/${id}`);
    const res = await API.get("/books");
    dispatch({ type: "deleteBook", payload: res.data });
    navigate("/books");
  } catch (error) {
    dispatch({ type: "errorDeleteBook", payload: error.res.data });
  }
};

export const catchBook =
  (checkpointId, bookId, userId, checkpointName, navigate) =>
  async (dispatch) => {
    dispatch({ type: "catchingBook" });
    try {
      //sacar libro del checkpoint
      const checkpoint = await API.get("/checkpoints/" + checkpointId);
      const books = checkpoint.books;
      const indexToDelete = books.indexOf(bookId);
      books.splice(indexToDelete, 1);
      const newBooks = { books: books };
      await API.put("/checkpoints/edit/" + checkpointId, newBooks);
      dispatch(getOneCheckpoint(checkpointName));

      //A partir de aquí estamos metiendo el libro en un usuario
      const newUserBook = { book: bookId };
      await API.put("/users/edit/" + userId, newUserBook);
      dispatch(getUserById(userId));
      navigate("/myAccount");
    } catch (error) {
      dispatch({ type: "errorCatchingBook" });
    }
  };
//cuando llamemos a las funciones tenemos que pasarle TODOS parámetros en el mismo orden

export const dropBook =
  (checkpointId, bookId, userId, checkpointName, navigate) =>
  async (dispatch) => {
    dispatch({ type: "droppingBook " });
    try {
      const user = await API.get("/users/" + userId);
      const userBook = user.book;
      delete userBook[bookId];
      const newUserBook = { book: {} };
      await API.put("users/edit/" + userId, newUserBook);
      dispatch(getUserById(userId));

      const newCheckpointBooks = { books: bookId };
      newCheckpointBooks.push(bookId);
      await API.put("/checkpoints/edit/" + checkpointId, newCheckpointBooks);
      dispatch(getOneCheckpoint(checkpointId));
      navigate(`/checkpoints/${checkpointName}`);
    } catch (error) {
      dispatch({ type: "errorDroppingBook" });
    }
  };
