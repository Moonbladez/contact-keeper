import React, { useState, useContext, useEffect } from "react";
import AuthContext from "../../context/auth/authContext";
import AlertContext from "../../context/alert/alertContext";

export const Login = (props) => {
	const alertContext = useContext(AlertContext);
	const authContext = useContext(AuthContext);

	const { setAlert } = alertContext;
	const { login, error, clearErrors, isAuthenticated } = authContext;

	useEffect(() => {
		if (isAuthenticated) {
			props.history.push("/");
		}

		if (error === "Invalid Credentials") {
			setAlert(error, "danger");
			clearErrors();
		}

		// es-lint-disable-next-line
	});

	const [user, setUser] = useState({
		email: "",
		password: "",
	});

	const { email, password } = user;

	const onChange = (event) => {
		setUser({ ...user, [event.target.name]: event.target.value });
	};

	const onSubmit = (event) => {
		event.preventDefault();
		if (email === "" || password === "") {
			setAlert("Please fill in all fields", "danger");
		} else {
			login({
				email,
				password,
			});
		}
	};

	return (
		<div className='form-container'>
			<h2>
				Account <span className='text-primary'>account login</span>
			</h2>
			<form onSubmit={onSubmit}>
				<div className='form-group'>
					<label htmlFor='email'>email:</label>
					<input
						type='email'
						name='email'
						value={email}
						onChange={onChange}
						required
					/>
				</div>
				<div className='form-group'>
					<label htmlFor='password'>password:</label>
					<input
						type='password'
						name='password'
						value={password}
						onChange={onChange}
						required
					/>
				</div>
				<button type='submit' className='btn btn-primary btn-block'>
					login
				</button>
			</form>
		</div>
	);
};
