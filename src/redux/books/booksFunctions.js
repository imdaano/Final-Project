import { API } from "../../shared/services/api";

export const getBooks = (title) => async(dispatch) => {
    dispatch({type:'gettingBooks'})

    try {
        const result = await API.get('/books'+ title);
        dispatch({type: 'getBooks', payload: result.data})
    } catch (error ) {
        dispatch({type:'errorBooks', payload: error.message})
    }
};

