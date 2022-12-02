import { API, API2 } from "../../shared/services/api";

export const getBooks = (title) => async (dispatch) => {
  dispatch({ type: "gettingBooks" });

  try {
    const result = await API.get("/books" + title);
    dispatch({ type: "getBooks", payload: result.data });
  } catch (error) {
    dispatch({ type: "errorBooks", payload: error.message });
  }
};

export const postBook = async (formdata, books, dispatch) => {
  dispatch({ type: "postingBook" });
  try {
    const res = await API2.post("/books/create", formdata);
    res.data.inFavorites = false;
    books.push(res.data);
    dispatch({ type: "postBook", payload: books });
  } catch (error) {
    dispatch({ type: "errorPostBook", payload: error.response.data });
  }
};

export const putBook = async (formdata, books, dispatch) => {
  dispatch({ type: "puttingBook" });
  try {
    await API2.put(`/books/edit/${formdata._id}`, formdata);
    const res = await API.get(`/books/id{formdata._id}`);
    const newBooks = [];
    books.forEach((book) => {
      newBooks.push(
        book._id === res.data._id
          ? {
              ...book,
              _id: res.data._id,
              title: res.data.title,
              img: res.data.img,
              genre: res.data.genre,
              synopsis: res.data.synopsis,
              // Mirar bien en el back el schema
            }
          : book
      );
    });
    dispatch({ type: "putBook", payload: newBooks });
  } catch (error) {
    dispatch({ type: "errorPutBook", payload: error.response.data });
  }
};

export const deleteBook = async (formdata, books, dispatch) => {
  dispatch({ type: "deletingBook" });
  try {
    await API2.delete(`/books/delete/${formdata._id}`);
    const newBooks = [];
    books.forEach((book) => {
      if (!(book._id === formdata._id)) {
        newBooks.push(book);
      }
    });
    dispatch({ type: "deleteBook", payload: newBooks });
  } catch (error) {
    dispatch({ type: "errorDeleteBook", payload: error.response.data });
  }
};
