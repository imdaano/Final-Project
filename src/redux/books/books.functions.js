import { API } from "../../shared/services/api";
// import { API2 } from "../../shared/services/api";

export const getBooks = () => async(dispatch) => {
    dispatch({type:'gettingBooks'})

    try {
        const result = await API.get('/books');
        dispatch({type: 'getBooks', payload: result.data})
    } catch (error ) {
        dispatch({type:'errorBooks', payload: error.message})
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

