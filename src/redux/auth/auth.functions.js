import { API } from "../../shared/services/api";

export const newUser = (formdata, navigate) => async dispatch => {
	dispatch({ type: "register_user_start" });
	try {
		const res = await API.post("/users/register", formdata);
		dispatch({ type: "register_user_ok", payload: res.data });
		navigate("/login");
	} catch (error) {
		dispatch({ type: "register_user_error", payload: error.message });
	}
};

export const loginUser = (formdata, navigate) => async dispatch => {
	dispatch({ type: "login_user_start" });
	try {
		const res = await API.post("/users/login", formdata);
		dispatch({ type: "login_user_ok", payload: res.data });
		localStorage.setItem("token", res.data.token);
		navigate("/");
	} catch (error) {
		console.log(error);
		//dispatch({ type: "login_user_error", payload: error.response.data });
	}
};

export const getUserById = (id) => async (dispatch) => {
    dispatch({ type: "get_userById_start" });

    try {
      const res = await API.get(`/users/${id}`)
      console.log(res.data);
      dispatch({ type: "get_userById_ok", payload: res.data});
    } catch (error) {
      dispatch({ type: "get_userById_error", payload: error.message });
    }
  }; 

export const checkSession = (token, navigate) => async dispatch => {
	dispatch({ type: "checkSession_start" });
	console.log("hola");
	try {
		const res = await API.post("users/checkSession");
		console.log(res.data);
		dispatch({
			type: "checkSession_ok",
			payload: { user: res.data, token: token },
		});
		navigate("/");
	} catch (error) {
		console.log(error);
		dispatch({ type: "checkSession_error", payload: error.response.data });
		localStorage.removeItem("token");
		navigate("/login");
	}
};

export const logOutUser = (navigate, dispatch) => {
	try {
		dispatch({ type: "logout_user_ok" });
		dispatch({ type: "removeAll" });
		localStorage.removeItem("token");
		navigate("/users");
	} catch (error) {
		dispatch({ type: "logout_user_error", payload: error.message });
	}
};