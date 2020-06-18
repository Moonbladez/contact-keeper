import React, { useContext } from "react";
import { ContactItem } from "./ContactItem";
import ContactContext from "../../context/contact/contactContext";

export const Contacts = () => {
	const contactContext = useContext(ContactContext);
	const { contacts, filtered } = contactContext;

	if (contacts.length === 0) {
		return <h2>Please add a contact</h2>;
	}

	return (
		<>
			{filtered !== null
				? filtered.map((contact) => <ContactItem contact={contact} />)
				: contacts.map((contact) => (
						<ContactItem key={contact.id} contact={contact} />
				  ))}
		</>
	);
};
