import { API, API2 } from "../../shared/services/api";
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
  dispatch({type: 'gettingBook'})
  try {
    const res = await API.get('/books/id/:id');
    console.log(res);
    dispatch({type: 'getBook', payload: res.data})    
  } catch (error) {
    dispatch({ type: "errorBook", payload: error.message });
  }
}

export const postNewBook = (dataForm, navigate) => async (dispatch) => {
  dispatch({ type: "postingBook" });
  try {
    const res = await API2.post("books/create", dataForm);
    console.log(res);
    dispatch({ type: "postBook" });
    navigate(`/books/${res.data.title}`);
  } catch (error) {
    dispatch({ type: "errorPostBook", payload: error });
  }
};

export const putBook = (id, dataForm) => async(dispatch) => {
  dispatch({ type: 'puttingBook'});
  try {
    const res = await API2.put(`/books/edit/${id}`, dataForm);
    console.log(res);
    dispatch({ type: 'putBook'});
  } catch (error) {
    dispatch({ type: 'errorPutBook', payload: error})
  }
}

export const deleteBook = (id) => async (dispatch) => {
  dispatch({ type: "deletingBook" });

  try {
    await API.delete(`/books/delete/${id}`);
    const res = await API.get("/books");

    dispatch({ type: "deleteBook", payload: res.data });
  } catch (error) {
    dispatch({ type: "errorDeleteBook", payload: error.response.data });
  }
};
