import React, { useState } from "react";

export const Register = () => {
	const [user, setUser] = useState({
		name: "",
		email: "",
		password: "",
		password2: "",
	});

	const { name, email, password, password2 } = user;

	const onChange = (event) => {
		setUser({ ...user, [event.target.name]: event.target.value });
	};

	const onSubmit = (event) => {
		event.preventDefault();
		console.log("registration submitted");
	};

	return (
		<div className='form-container'>
			<h2>
				Account <span className='text-primary'>Register</span>
			</h2>
			<form onSubmit={onSubmit}>
				<div className='form-group'>
					<label htmlFor='name'>name:</label>
					<input type='text' name='name' value={name} onChange={onChange} />
				</div>
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
				<div className='form-group'>
					<label htmlFor='password2'>confirm password:</label>
					<input
						type='password'
						name='password2'
						value={password}
						onChange={onChange}
					/>
				</div>
				<button type='submit' className='btn btn-primary btn-block'>
					register
				</button>
			</form>
		</div>
	);
};
