import React, { useContext } from "react";
import PropTypes from "prop-types";
import ContactContext from "../../context/contact/contactContext";

import { AiOutlineMail, AiOutlinePhone } from "react-icons/ai";

export const ContactItem = ({ contact }) => {
	const contactContext = useContext(ContactContext);
	const { deleteContact, setCurrent, clearCurrent } = contactContext;
	const { name, _id, email, phone, type } = contact;

	const onDelete = () => {
		deleteContact(_id);
		clearCurrent();
	};

	console.log("contact item", phone);

	return (
		<div className='card bg-light'>
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
						<AiOutlinePhone /> {phone}
					</li>
				)}

				<div>
					<button
						className='btn btn-dark btn-sm'
						onClick={() => setCurrent(contact)}
					>
						Edit
					</button>
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
