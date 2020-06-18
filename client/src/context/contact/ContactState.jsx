import React, { useReducer } from "react";
import { v4 as uuidv4 } from "uuid";
import ContactContext from "./contactContext";
import contactReducer from "./contactReducer";
import {
	ADD_CONTACT,
	DELETE_CONTACT,
	SET_CURRENT,
	CLEAR_CURRENT,
	UPDATE_CONTACT,
	FILTER_CONTACTS,
	CLEAR_CONTACTS,
} from "../types";

export const ContactState = (props) => {
	const initalState = {
		contacts: [
			{
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
			},
		],
	};

	const [state, dispatch] = useReducer(contactReducer, initalState);

	//add contact
	const addContact = (contact) => {
		contact.id = uuidv4();
		dispatch({ type: ADD_CONTACT, payload: contact });
	};

	//delete contact

	//set current contact

	//clear current contact

	//update contact

	//filter contacts

	//clear filter

	return (
		<ContactContext.Provider value={{ contacts: state.contacts, addContact }}>
			{props.children}
		</ContactContext.Provider>
	);
};
