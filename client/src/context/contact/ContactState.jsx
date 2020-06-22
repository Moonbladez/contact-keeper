import React, { useReducer } from "react";
import axios from "axios";
import ContactContext from "./contactContext";
import contactReducer from "./contactReducer";
import {
	ADD_CONTACT,
	DELETE_CONTACT,
	SET_CURRENT,
	CLEAR_CURRENT,
	UPDATE_CONTACT,
	FILTER_CONTACTS,
	CLEAR_FILTER,
	CONTACT_ERROR,
} from "../types";

export const ContactState = (props) => {
	const initalState = {
		contacts: [
			/* 	{
				id: 1,
				name: "Steve Rogers",
				email: "americasass@gmail.com",
				phone: "111-111-1111",
				type: "personal",
			},
			{
				id: 2,
				name: "Tony Stark",
				email: "ironman@gmail.com",
				phone: "222-222-2222",
				type: "professional",
			}, */
		],
		current: null,
		filtered: null,
	};

	const [state, dispatch] = useReducer(contactReducer, initalState);

	//add contact

	const addContact = async (contact) => {
		console.log(contact);
		const config = {
			headers: {
				"Content-Type": "application/json",
			},
		};

		try {
			const res = await axios.post("/api/contacts", contact, config);

			dispatch({ type: ADD_CONTACT, payload: res.data });
		} catch (err) {
			dispatch({ type: CONTACT_ERROR, payload: err.response.msg });
		}
	};

	//delete contact
	const deleteContact = (id) => {
		dispatch({ type: DELETE_CONTACT, payload: id });
	};

	//set current contact
	const setCurrent = (contact) => {
		dispatch({ type: SET_CURRENT, payload: contact });
	};

	//clear current contact
	const clearCurrent = () => {
		dispatch({ type: CLEAR_CURRENT });
	};

	//update contact
	const updateContact = (contact) => {
		dispatch({ type: UPDATE_CONTACT, payload: contact });
	};

	//filter contacts
	const filterContacts = (text) => {
		dispatch({ type: FILTER_CONTACTS, payload: text });
	};

	//clear filter
	const clearFilter = () => {
		dispatch({ type: CLEAR_FILTER });
	};

	return (
		<ContactContext.Provider
			value={{
				contacts: state.contacts,
				current: state.current,
				filtered: state.filtered,
				error: state.error,
				addContact,
				deleteContact,
				setCurrent,
				clearCurrent,
				updateContact,
				filterContacts,
				clearFilter,
			}}
		>
			{props.children}
		</ContactContext.Provider>
	);
};
