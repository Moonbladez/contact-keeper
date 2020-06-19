import React from "react";
import { NavLink } from "react-router-dom";
import PropTypes from "prop-types";

export const Navbar = ({ title, icon }) => {
	return (
		<div className='navbar bg-primary'>
			<h1 className=''>
				{icon} {title}
			</h1>
			<ul>
				<li>
					<NavLink to='/'>Home</NavLink>
				</li>
				<li>
					<NavLink to='/about'>About</NavLink>
				</li>
				<li>
					<NavLink to='/register'>Register</NavLink>
				</li>
				<li>
					<NavLink to='/login'>Login</NavLink>
				</li>
			</ul>
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
