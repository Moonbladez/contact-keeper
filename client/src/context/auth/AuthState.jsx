import React, { useReducer } from "react";
import axios from "axios";

import AuthContext from "./authContext";
import authReducer from "./authReducer";
import { setAuthToken } from "../../utils/setAuthToken";
import {
	REGISTER_SUCCESS,
	REGISTER_FAIL,
	USER_LOADED,
	AUTH_ERROR,
	LOGIN_FAIL,
	LOGIN_SUCCESS,
	LOGOUT,
	CLEAR_ERRORS,
} from "../types";

export const AuthState = (props) => {
	const initalState = {
		token: localStorage.getItem("token"),
		isAuthenticated: null,
		loading: true,
		error: null,
		user: null,
	};

	const [state, dispatch] = useReducer(authReducer, initalState);

	//Load user
	const loadUser = async () => {
		if (localStorage.token) {
			setAuthToken(localStorage.token);
		}
		try {
			const res = await axios.get("/api/auth");

			dispatch({ type: USER_LOADED, payload: res.data });
		} catch (err) {
			dispatch({ type: AUTH_ERROR });
		}
	};

	//register user
	const register = async (formData) => {
		const config = {
			headers: {
				"Content-Type": "application/json",
			},
		};

		try {
			const res = await axios.post("/api/users", formData, config);

			dispatch({
				type: REGISTER_SUCCESS,
				payload: res.data,
			});

			loadUser();
		} catch (err) {
			dispatch({
				type: REGISTER_FAIL,
				payload: err.response.data.msg,
			});
		}
	};

	//login user
	const login = () => {
		console.log("load user");
	};

	//logout user
	const logout = () => {
		console.log("load user");
	};

	//clear errors
	const clearErrors = () => {
		dispatch({ type: CLEAR_ERRORS });
	};

	return (
		<AuthContext.Provider
			value={{
				token: state.token,
				isAuthenticated: state.isAuthenticated,
				loading: state.loading,
				user: state.user,
				error: state.error,

				register,
				loadUser,
				login,
				logout,
				clearErrors,
			}}
		>
			{props.children}
		</AuthContext.Provider>
	);
};
