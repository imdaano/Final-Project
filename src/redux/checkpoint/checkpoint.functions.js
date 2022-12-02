import { API } from "../../shared/services/api";

export const getCheckpoints = (name) => async (dispatch) => {
  dispatch({ type: "gettingACheckpoints" });

  try {
    const result = await API.get("/checkpoints" + name);
    dispatch({ type: "getCheckpoints", payload: result.data });
  } catch (error) {
    dispatch({ type: "errorCheckpoints", payload: error.message });
  }
};

// export const filterCheckpoint = (name, checkpoints) => async(dispatch) =>{
//     dispatch({type: 'gettingCheckpoint'})
//     try {
//         const filterCheckpoints = checkpoints.filter((character) => character.name === name)
//         dispatch({type:'getCheckpoint', payload: filterCheckpoints[0]})
//     } catch (error) {
//         dispatch({type: 'errorCheckpoint', payload: error.message});
//     }
// }
