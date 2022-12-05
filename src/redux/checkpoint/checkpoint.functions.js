import { API, API2 } from "../../shared/services/api";


export const getCheckpoints = () => async (dispatch) => {
  dispatch({ type: "gettingCheckpoints" });

  try {
    const res = await API.get("/checkpoints");
    res.data.map((checkpoint) => (checkpoint.inFavorites = false));
    dispatch({ type: "getCheckpoints", payload: res.data });
  } catch (error) {
    dispatch({ type: "errorCheckpoints", payload: error.message });
  }
};

export const getOneCheckpoint = (name) => async (dispatch) => {
  dispatch({ type: "gettingCheckpoint" });

  try {
    const res = await API.get(`/checkpoints/name/${name}`)
    console.log(res.data);
    dispatch({ type: "getCheckpoint", payload: res.data});
  } catch (error) {
    dispatch({ type: "errorCheckpoint", payload: error.message });
  }
};

//? Terminar de corregir functions de checkpoints

export const postNewCheckpoint = (dataForm, navigate) => async (dispatch) => {
  dispatch({ type: "postingCheckpoint" });
  try {
    const res = await API2.post("/checkpoints/create", dataForm);
    // res.data.inFavorites = false;
    // checkpoints.push(res.data); //dudas
    console.log(res);
    dispatch({ type: "postCheckpoint" });
    navigate(`/checkpoints/${res.data.name}`)
  } catch (error) {
    dispatch({ type: "errorPostCheckpoint", payload: error });
  }
};

export const putCheckpoint = (id, dataForm, navigate) => async (dispatch) => {
  dispatch({ type: "puttingCheckpoint" });
  console.log("inside putcheckpoint");
  try {
    const res = await API2.put(`/checkpoints/edit/${id}`, dataForm);
    console.log(res);
    dispatch({ type: "putCheckpoint", payload: res.data});
    navigate('/checkpoints')
  } catch (error) {
    console.log(error);
    dispatch({ type: "errorPutCheckpoint", payload: error });
  }
};

export const deleteCheckpoint = (id, navigate) => async (dispatch) => {
  dispatch({ type: "deletingCheckpoint" });

  try {
    await API.delete(`/checkpoints/delete/${id}`);
    const result = await API.get("/checkpoints");
    dispatch({ type: "deleteCheckpoint", payload: result.data });
    navigate("/checkpoints")
  } catch (error) {
    dispatch({ type: "errorDeleteCheckpoint", payload: error.response.data });
  }
};
