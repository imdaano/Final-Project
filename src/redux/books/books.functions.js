import { API, API2 } from "../../shared/services/api";
// import { API2 } from "../../shared/services/api";

export const getBooks = () => async(dispatch) => {
    dispatch({type:'gettingBooks'})

    try {
        const res = await API.get('/books');
        dispatch({type: 'getBooks', payload: res.data})
    } catch (error ) {
        dispatch({type:'errorBooks', payload: error.message})
    }
};

export const postNewBook = (dataForm) => async (dispatch) => {
  dispatch({ type: "postingBook" });
  try {
    const res = await API2.post('books/create', dataForm);
    console.log(res);
    dispatch({type: 'postBook'});
    // navigate(`/newBook/${result.data._id}`);
  } catch (error) {
    dispatch({ type: 'errorPostBook', payload: error});
  }
};

export const deleteBook = (id) => async (dispatch) => {
    dispatch({ type: "deletingBook" });

    try {
        await API.delete(`/books/delete/${id}`);
        const result = await API.get('/books');
        
      
      dispatch({ type: "deleteBook", payload: result.data });
    } catch (error) {
      dispatch({ type: "errorDeleteBook", payload: error.response.data });
    }
  };
