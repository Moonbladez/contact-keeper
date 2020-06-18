import React, { useContext, useRef, useEffect } from "react";
import ContactContext from "../../context/contact/contactContext";

export const ContactFilter = () => {
	const contactContext = useContext(ContactContext);
	const text = useRef("");

	const { filterContacts, clearFilter, filtered } = contactContext;

	useEffect(() => {
		if (filtered === null) {
			text.current.value = "";
		}
	});

	const onChange = (event) => {
		if (text.current.value !== "") {
			filterContacts(event.target.value);
		} else {
			clearFilter();
		}
	};

	return (
		<form>
			<label htmlFor='filter'></label>
			<input
				type='text'
				ref={text}
				placeholder='filter contacts'
				id='filter'
				onChange={onChange}
			/>
		</form>
	);
};
