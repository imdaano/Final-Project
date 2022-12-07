import React from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

const AuthRoute = ({ component }) => {
	const { user } = useSelector((state) => state.auth);

	if (user === null) return <div>Loading...</div>
	if (user === false) return <Navigate to="/login" />;
	if (user) return component;
};

export default AuthRoute;