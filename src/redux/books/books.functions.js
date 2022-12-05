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

export const catchBook = (dataForm, navigate) => async(dispatch) => {
  dispatch({ type: 'catchingBook' });
  try {
    const checkpoint = await API.get('/checkpoints/'+ dataForm.checkpointId);
    const books = checkpoint.books;
    const indexToDelete = checkpoint.books.indexOf(dataForm.book._id);
    books.splice(indexToDelete, 1);
    checkpoint.books = books;
    await API.put('/checkpoints/edit/' + dataForm.checkpointId, checkpoint)
    const user = await API.get('/users/' + dataForm.userId)
    const userBooks = user.books;
    userBooks.push(dataForm.book._id)
    user.books = userBooks;
    await API.put('/users/edit/' + dataForm.userId, user);
    dispatch({ type: 'catchBook' })
    navigate('/myAccount')
  } catch (error) {
    dispatch({ type: 'errorCatchingBook' })
  }
};

//Dudas con la función del drop: es necesario un formulario??
export const dropBook = (dataForm, navigate) => async(dispatch) => {
dispatch({ type: 'droppingBook '});
  try {
    const user = await API.get('/users/' + dataForm.userId)
    const userBooks = user.books;
    userBooks.splice(0, 1); //preguntar cómo limitamos el número de libros x usuario a 1 unidad
    user.books = userBooks;
    await API.put('users/edit/' + dataForm.userId, user)
    const checkpoint = await API.get('checkpoints/' + dataForm.checkpointId);
    const books = checkpoint.books;
    books.push(dataForm.book._id);
    checkpoint.books = books;
    await API.put('/checkpoints/edit/' + dataForm.checkpointId, checkpoint)
    dispatch({ type: 'dropBook'});
    navigate(`/checkpoints/${checkpoint.name}`)

  } catch (error) {
    dispatch({ type: 'errorDroppingBook'})
  }
};
