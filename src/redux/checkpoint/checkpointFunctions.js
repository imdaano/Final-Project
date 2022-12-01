import { API } from "../../shared/services/api";

export const getCheckpoints = (name) => async(dispatch) => {
    dispatch({type: 'gettingCheckpoints'})

    try {
        const result = await API.get('/checkpoints'+name);
        dispatch({type: 'getCheckpoints', payload: result.data})
    } catch (error) {
        dispatch({type: 'error', payload: error.message})
    }
};

