import { API } from "../../shared/services/api";

export const newUser = async (formdata, navigate, dispatch) => {
	dispatch({ type: "register_user_start" });
	try {
		await API.post("/users/register", formdata);
		dispatch({ type: "register_user_ok" });
		navigate("/login");
	} catch (error) {
		dispatch({ type: "register_user_error", payload: error.message });
	}
};

export const loginUser = async (formdata, navigate, dispatch) => {
	dispatch({ type: "login_user_start" });
	try {
		const res = await API.post("/users/login", formdata);
		dispatch({ type: "login_user_ok", payload: res.data });
		localStorage.setItem("token", res.data.token);
		navigate("/");
	} catch (error) {
		dispatch({ type: "login_user_error", payload: error.response.data });
	}
};

export const checkSession = async (token, navigate, dispatch) => {
	dispatch({ type: "checkSession_start" });
	try {
		const res = await API.post("users/checkSession");
		dispatch({
			type: "checkSession_ok",
			payload: { user: res.data, token: token },
		});
		navigate("/");
	} catch (error) {
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