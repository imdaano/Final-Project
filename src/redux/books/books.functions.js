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
  (checkpointId, bookId, userId, checkpointName, checkpoint, navigate) =>
  async (dispatch) => {
    dispatch({ type: "catchingBook" });
    try {
      //sacar libro del checkpoint
      const checkpoint = await API.get("/checkpoints/" + checkpointId);
      const books = checkpoint.data.books;
      const indexToDelete = books.indexOf(bookId);
      books.splice(indexToDelete, 1);
      console.log(checkpoint);
      const newBooks = {books: books, location: {coordinates: checkpoint.data.location.coordinates}};;
      await API.put("/checkpoints/edit/" + checkpointId, newBooks);
      dispatch(getOneCheckpoint(checkpointName));

      //A partir de aquí estamos metiendo el libro en un usuario
      const newUserBook = { book: bookId };
      const userUpdated = await API.put("/users/edit/" + userId, newUserBook);
      console.log(userUpdated);
      dispatch({type: "update_user", payload: userUpdated.data.userModified})
      /* dispatch(getUserById(userId)); */
      navigate("/myAccount");
    } catch (error) {
      console.log(error);
      dispatch({ type: "errorCatchingBook", payload: error });
    }
  };
//cuando llamemos a las funciones tenemos que pasarle TODOS parámetros en el mismo orden

export const dropBook =
  (checkpointId, bookId, userId, checkpoint, checkpointName, navigate) =>
  async (dispatch) => {
    dispatch({ type: "droppingBook " });
    try {
      /* const user = await API.get("/users/" + userId); */
      // const userBook = user.book;
      const newUserBook = {book: null};
      // delete userBook.bookId;
      // const newUserBook = { book: {} };
      const res = await API.put("users/edit/" + userId, newUserBook);
      console.log(res.data);
      dispatch({type: "update_user", payload: res.data.userModified})
      /* dispatch(getUserById(userId)); */

      const newBooks = []
      for (const book of checkpoint.books) {
        newBooks.push(book._id);
      }
      newBooks.push(bookId);
      const checkpointUpdate = {books: newBooks, location: {coordinates: checkpoint.location.coordinates}};
      console.log(checkpointUpdate);
      const checkpointUpdated = await API.put("/checkpoints/edit/" + checkpointId, checkpointUpdate);
      console.log(checkpointUpdated.data);
      dispatch({type: "putCheckpoint", payload: checkpointUpdated.data})
      /* dispatch(getOneCheckpoint(checkpointName)); */
      navigate(`/checkpoints/${checkpointName}`);
    } catch (error) {
      console.log(error);
      //dispatch({ type: "errorDroppingBook", error });
    }
  };
