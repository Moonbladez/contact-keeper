import React, { useState, useContext } from "react";
import ContactContext from "../../context/contact/contactContext";

export const ContactForm = () => {
	const contactContext = useContext(ContactContext);

	const [contact, setContact] = useState({
		name: "",
		email: "",
		phone: "",
		type: "personal",
	});

	const { name, email, phone, type } = contact;

	const onChange = (event) =>
		setContact({ ...contact, [event.target.name]: event.target.value });

	const onSubmit = (event) => {
		event.preventDefault();
		contactContext.addContact(contact);
		setContact({
			name: "",
			email: "",
			phone: "",
			type: "personal",
		});
	};
	return (
		<form onSubmit={onSubmit}>
			<h2 className='text-primary'>Add Contact</h2>
			<label htmlFor='name'>Name</label>
			<input
				type='text'
				placeholder='name'
				name='name'
				value={name}
				onChange={onChange}
			/>
			<label htmlFor='email'>Email</label>
			<input
				type='email'
				placeholder='email'
				name='email'
				value={email}
				onChange={onChange}
			/>
			<label htmlFor='phone'>Phone</label>
			<input
				type='text'
				placeholder='phone'
				name='phone'
				value={phone}
				onChange={onChange}
			/>
			<p htmlFor='type'>Contact Type</p>
			<input
				onChange={onChange}
				type='radio'
				name='type'
				value='personal'
				id='personal'
				checked={type === "personal"}
			/>
			<label htmlFor='personal'>Personal:</label>
			<input
				type='radio'
				name='type'
				value='professional'
				id='professional'
				onChange={onChange}
			/>
			<label htmlFor='professional'>Professional: </label>
			<div>
				<button type='submit' className='btn btn-primary btn-block'>
					Add
				</button>
			</div>
		</form>
	);
};
