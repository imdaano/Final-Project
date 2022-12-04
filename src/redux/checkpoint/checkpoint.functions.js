import { API, API2 } from "../../shared/services/api";

export const getCheckpoints = () => async (dispatch) => {
  dispatch({ type: "gettingACheckpoints" });

  try {
    const res = await API.get("/checkpoints");
    res.data.map((checkpoint) => (checkpoint.inFavorites = false));
    dispatch({ type: "getCheckpoints", payload: res.data });
  } catch (error) {
    dispatch({ type: "errorCheckpoints", payload: error.message });
  }
};
export const getOneCheckpoint = (name, checkpoints) => async (dispatch) => {
  dispatch({ type: "gettingCheckpoint" });

  try {
    const checkpointInfo = checkpoints.filter((checkpoint) => checkpoint.name === name);
    dispatch({ type: "getCheckpoint", payload: checkpointInfo[0] });
  } catch (error) {
    dispatch({ type: "errorCheckpoint", payload: error.message });
  }
};

//? Terminar de corregir functions de checkpoints

export const postNewCheckpoint = (dataForm) => async(dispatch) => {
  dispatch({ type: "postingCheckpoint" });
  try {
    const res = await API2.post("/checkpoints/create", dataForm);
    // res.data.inFavorites = false;
    // checkpoints.push(res.data); //dudas
    console.log(res);
    dispatch({ type: "postCheckpoint"});
  } catch (error) {
    dispatch({ type: "errorPostCheckpoint", payload: error });
  }
};

export const putCheckpoint = (id, dataForm) => async(dispatch) => {
  dispatch({ type: 'puttingCheckpoint'});
  try {
    const res = await API2.put(`/checkpoint/edit/${id}`, dataForm);
    console.log(res);
    dispatch({ type: 'putCheckpoint'});
  } catch (error) {
    dispatch({ type: 'errorPutCheckpoint', payload: error})
  }
}

export const deleteCheckpoint = (id) => async (dispatch) => {
  dispatch({ type: "deletingCheckpoint" });

  try {
    await API.delete(`/checkpoints/delete/${id}`);
    const result = await API.get("/checkpoints");
    dispatch({ type: "deleteCheckpoint", payload: result.data });
  } catch (error) {
    dispatch({ type: "errorDeleteCheckpoint", payload: error.response.data });
  }
};
