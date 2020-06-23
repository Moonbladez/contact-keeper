import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import PropTypes from "prop-types";
import { GoSignOut } from "react-icons/go";

import AuthContext from "../../context/auth/authContext";
import ContactContext from "../../context/contact/contactContext";

import { AppBar, Typography } from "@material-ui/core";

export const Navbar = ({ title, icon }) => {
	const authContext = useContext(AuthContext);
	const contactContext = useContext(ContactContext);

	const { isAuthenticated, logout, user } = authContext;
	const { clearContacts } = contactContext;

	const onLogout = () => {
		logout();
		clearContacts();
	};

	const authLinks = (
		<>
			<li>Hello, {user && user.name}</li>
			<li>
				<a href='#!' onClick={onLogout}>
					<span className='hide-sm'>Logout</span>
					<GoSignOut />
				</a>
			</li>
		</>
	);

	const guestLinks = (
		<>
			<li>
				<NavLink to='/register'>Register</NavLink>
			</li>
			<li>
				<NavLink to='/login'>Login</NavLink>
			</li>
		</>
	);

	return (
		<AppBar className='navbar' position='static'>
			<Typography variant='h3' component='h1'>
				{icon} {title}
			</Typography>
			<ul>{isAuthenticated ? authLinks : guestLinks}</ul>
		</AppBar>
	);
};

Navbar.propTypes = {
	title: PropTypes.string.isRequired,
	icon: PropTypes.string,
};

Navbar.defaultProps = {
	title: "Contact Keeper",
};
