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

// export const putCheckpoint = async (formdata, checkpoints, dispatch) => {
//   dispatch({ type: "puttingCheckpoint" });
//   try {
//     await API2.put(`/checkpoints/edit/${formdata._id}`, formdata);
//     const res = await API.get(`/checkpoints/id{formdata._id}`);
//     const newCheckpoint = [];
//     checkpoints.forEach((checkpoint) => {
//       //dudas
//       newCheckpoint.push(
//         checkpoint._id === res.data._id
//           ? {
//               //dudas???!!!
//               ...checkpoint,
//               _id: res.data._id,
//               name: res.data.name,
//               img: res.data.img,
//               location: res.data.location.coordinates,
//               address: res.data.address,
//               phone: res.data.phone,
//               // Mirar bien en el back el schema
//             }
//           : checkpoint
//       );
//     });
//     dispatch({ type: "putCheckpoint", payload: newCheckpoint });
//   } catch (error) {
//     dispatch({ type: "errorPutCheckpoint", payload: error.response.data });
//   }
// };

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
