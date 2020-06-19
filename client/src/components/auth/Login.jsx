import React, { useState } from "react";

export const Login = () => {
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
		console.log("logged in");
	};

	return (
		<div className='form-container'>
			<h2>
				Account <span className='text-primary'>account login</span>
			</h2>
			<form onSubmit={onSubmit}>
				<div className='form-group'>
					<label htmlFor='email'>email:</label>
					<input type='email' name='email' value={email} onChange={onChange} />
				</div>
				<div className='form-group'>
					<label htmlFor='password'>password:</label>
					<input
						type='password'
						name='password'
						value={password}
						onChange={onChange}
					/>
				</div>
				<button type='submit' className='btn btn-primary btn-block'>
					login
				</button>
			</form>
		</div>
	);
};
