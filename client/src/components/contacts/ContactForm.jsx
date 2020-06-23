import React, { useState, useContext, useEffect } from "react";
import ContactContext from "../../context/contact/contactContext";

import { Typography, Button, TextField } from "@material-ui/core";
import styled from "styled-components";

export const ContactForm = () => {
	const contactContext = useContext(ContactContext);

	const { addContact, current, clearCurrent, updateContact } = contactContext;

	useEffect(() => {
		if (current !== null) {
			setContact(current);
		} else {
			setContact({
				name: "",
				email: "",
				phone: "",
				type: "personal",
			});
		}
	}, [contactContext, current]);

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
		if (current === null) {
			addContact(contact);
		} else {
			updateContact(contact);
		}

		setContact({
			name: "",
			email: "",
			phone: "",
			type: "personal",
		});
	};

	const clearAll = () => {
		clearCurrent();
	};
	return (
		<form onSubmit={onSubmit}>
			<Heading variant='h4' component='h3'>
				{current ? "update contact" : "add contact"}
			</Heading>

			<TextField
				type='text'
				name='name'
				value={name}
				onChange={onChange}
				required
				label='name'
				fullWidth
			/>
			<TextField
				type='email'
				name='email'
				value={email}
				onChange={onChange}
				label='email'
				fullWidth
			/>
			<TextField
				type='text'
				name='phone'
				value={phone}
				onChange={onChange}
				label='phone'
				fullWidth
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
				checked={type === "professional"}
				onChange={onChange}
			/>
			<label htmlFor='professional'>Professional: </label>
			<div>
				<FullWidthButton type='submit' color='primary' variant='contained'>
					{current ? "update contact" : "add contact"}
				</FullWidthButton>
			</div>
			{current && (
				<div>
					<FullWidthButton
						onClick={clearAll}
						variant='outlined'
						color='secondary'
						fullwidth
					>
						clear
					</FullWidthButton>
				</div>
			)}
		</form>
	);
};

const FullWidthButton = styled(Button)`
	width: 100%;
	margin-top: 0.5rem;
`;

const Heading = styled(Typography)`
	text-transform: capitalize;
`;
