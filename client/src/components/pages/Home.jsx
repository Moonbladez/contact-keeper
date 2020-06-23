import React, { useContext, useEffect } from "react";

import AuthContext from "../../context/auth/authContext";

import { Contacts } from "../contacts/Contacts";
import { ContactForm } from "../contacts/ContactForm";
import { ContactFilter } from "../contacts/ContactFilter";

import { Grid } from "@material-ui/core";

export const Home = () => {
	const authContext = useContext(AuthContext);

	useEffect(() => {
		authContext.loadUser();
		// es-lint-disable-next-line
	}, []);

	return (
		<Grid container spacing={6}>
			<Grid item xs={12} md={6}>
				<ContactForm />
			</Grid>
			<Grid item xs={12} md={6}>
				<ContactFilter />
				<Contacts />
			</Grid>
		</Grid>
	);
};
