import { API, API2 } from "../../shared/services/api";

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

//? Terminar de corregir functions de checkpoints

// export const postBook = async (formdata, books, dispatch) => {
//   dispatch({ type: "postingBooks"});
//   try {
//       const res = await API2.post("/books/create", formdata);
//       res.data.inFavorites = false;
//       books.push(res.data);
//       dispatch({type: "postBooks", payload: books})
//   } catch (error) {
//       dispatch({type: "errorPostBooks", payload:error.response.data});
//   }
// };

// export const putBook = async (formdata, books, dispatch) => {
//   dispatch({type: "puttingBooks"});
//   try {
//       await API2.put(`/books/edit/${formdata._id}`, formdata);
//       const res = await API.get(`/books/id{formdata._id}`);
//       const newBooks = [];
//       books.forEach((book) => {
//           newBooks.push(
//               book._id === res.data._id ? {
//                   ...book,
//                   _id: res.data._id,
//                   name: res.data.name,
//                   img: res.data.img,
//                   genre: res.data.genre,
//                   synopsis: res.data.synopsis,
//                   // Mirar bien en el back el schema
//               } : book
//           );
//       });
//       dispatch ({ type: "putBooks", payload: newBooks});
//   } catch (error) {
//       dispatch ({type: "errorPutBooks", payload: error.response.data});
//   }
// };

// export const deleteBook = async (formdata, books, dispatch) => {
//   dispatch({type: "deletingBooks"});
//   try {
//       await API2.delete(`/books/delete/${formdata._id}`);
//       const newBooks = [];
//       books.forEach((book) => {
//           if (!(book._id === formdata._id)) {
//               newBooks.push(book);
//           }
//       });
//       dispatch({type: "deleteBooks", payload: newBooks});
//   } catch (error) {
//       dispatch({type: "errorDeleteBooks", payload: error.response.data});
//   }
// };
