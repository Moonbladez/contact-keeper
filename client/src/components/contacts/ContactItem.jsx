import React, { useContext } from "react";
import PropTypes from "prop-types";
import ContactContext from "../../context/contact/contactContext";

import { AiOutlineMail, AiOutlinePhone } from "react-icons/ai";

export const ContactItem = ({ contact }) => {
	const contactContext = useContext(ContactContext);
	const { deleteContact } = contactContext;
	const { name, id, email, phone, type } = contact;

	const onDelete = () => {
		deleteContact(id);
	};

	return (
		<div className='card bg-light' key={id}>
			<h3 className='text-primary text-left'>
				{name}
				<span
					className={
						`badge ` +
						(type === "professional" ? "badge-success" : "badge-primary")
					}
				>
					{type}
				</span>
			</h3>
			<ul className='list'>
				{email && (
					<li>
						<AiOutlineMail></AiOutlineMail>
						{email}
					</li>
				)}
				{phone && (
					<li>
						<AiOutlinePhone></AiOutlinePhone>
						{email}
					</li>
				)}

				<div>
					<button className='btn btn-dark btn-sm'>Edit</button>
					<button className='btn btn-danger btn-sm' onClick={onDelete}>
						Delete
					</button>
				</div>
			</ul>
		</div>
	);
};

ContactItem.propTypes = {
	contact: PropTypes.object.isRequired,
};
