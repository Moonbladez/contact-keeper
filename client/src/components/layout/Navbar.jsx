import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import PropTypes from "prop-types";
import { GoSignOut } from "react-icons/go";

import AuthContext from "../../context/auth/authContext";

export const Navbar = ({ title, icon }) => {
	const authContext = useContext(AuthContext);

	const { isAuthenticated, logout, user } = authContext;

	const onLogout = () => {
		logout();
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
		<div className='navbar bg-primary'>
			<h1 className=''>
				{icon} {title}
			</h1>
			<ul>{isAuthenticated ? authLinks : guestLinks}</ul>
		</div>
	);
};

Navbar.propTypes = {
	title: PropTypes.string.isRequired,
	icon: PropTypes.string,
};

Navbar.defaultProps = {
	title: "Contact Keeper",
};
