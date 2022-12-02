import { API, API2 } from "../../shared/services/api";

export const getCheckpoints = () => async (dispatch) => {
  dispatch({ type: "gettingACheckpoints" });

  try {
    const result = await API.get("/checkpoints");
    dispatch({ type: "getCheckpoints", payload: result.data });
  } catch (error) {
    dispatch({ type: "errorCheckpoints", payload: error.message });
  }
};


//? Terminar de corregir functions de checkpoints

export const postCheckpoint = async (formdata, checkpoint, dispatch) => {
  dispatch({ type: "postingCheckpoint"});
  try {
      const res = await API2.post("/checkpoints/create", formdata);
      res.data.inFavorites = false;
      checkpoint.push(res.data); //dudas
      dispatch({type: "postCheckpoint", payload: checkpoint})
  } catch (error) {
      dispatch({type: "errorPostCheckpoint", payload:error.response.data});
  }
};

export const putCheckpoint = async (formdata, checkpoint, dispatch) => {
  dispatch({type: "puttingCheckpoint"});
  try {
      await API2.put(`/checkpoints/edit/${formdata._id}`, formdata);
      const res = await API.get(`/checkpoints/id{formdata._id}`);
      const newCheckpoint = [];
      checkpoint.forEach((checkpoint) => { //dudas
          newCheckpoint.push(
              checkpoint._id === res.data._id ? { //dudas???!!!
                  ...checkpoint,
                  _id: res.data._id,
                  name: res.data.name,
                  img: res.data.img,
                  location: res.data.location,
                   phone: res.data.phone
                  // Mirar bien en el back el schema
              } : checkpoint
          );
      });
      dispatch ({ type: "putCheckpoint", payload: newCheckpoint});
  } catch (error) {
      dispatch ({type: "errorPutCheckpoint", payload: error.response.data});
  }
};

export const deleteCheckpoint = async (formdata, checkpoint, dispatch) => {
  dispatch({type: "deletingCheckpoint"});
  try {
      await API2.delete(`/checkpoints/delete/${formdata._id}`);
      const newCheckpoints = [];
      checkpoint.forEach((checkpoint) => { //dudas
          if (!(checkpoint._id === formdata._id)) {
              newCheckpoints.push(checkpoint);
          }
      });
      dispatch({type: "deleteCheckpoint", payload: newCheckpoints}); //dudas
  } catch (error) {
      dispatch({type: "errorDeleteCheckpoint", payload: error.response.data});
  }
};
