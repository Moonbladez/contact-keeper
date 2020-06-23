import React, { useContext } from "react";
import PropTypes from "prop-types";
import ContactContext from "../../context/contact/contactContext";

import styled from "styled-components";
import { AiOutlineMail } from "react-icons/ai";
import { MdWork, MdFace, MdPhone, MdEmail } from "react-icons/md";

import {
	Card,
	CardContent,
	Chip,
	Button,
	Typography,
	ButtonGroup,
	List,
	ListItem,
	ListItemIcon,
	Paper,
	ListItemText,
} from "@material-ui/core/";

export const ContactItem = ({ contact }) => {
	const contactContext = useContext(ContactContext);
	const { deleteContact, setCurrent, clearCurrent } = contactContext;
	const { name, _id, email, phone, type } = contact;

	const onDelete = () => {
		deleteContact(_id);
		clearCurrent();
	};

	const inital = name.charAt(0);

	console.log(inital);

	return (
		<Paper elevation={3}>
			<CardItem variant='outlined'>
				<CardContent>
					<CardHeader>
						<Typography variant='h4'>{name}</Typography>
						<Chip
							label={type}
							color={type === "professional" ? "primary" : "secondary"}
							variant='outlined'
							icon={type === "professional" ? <MdWork /> : <MdFace />}
						/>
					</CardHeader>

					<List>
						{email && (
							<ListItem>
								<ListItemIcon>
									<MdEmail />
								</ListItemIcon>
								<ListItemText primary={email}></ListItemText>
							</ListItem>
						)}
						{phone && (
							<ListItem>
								<ListItemIcon>
									<MdPhone></MdPhone>
								</ListItemIcon>
								<ListItemText primary={phone}></ListItemText>
							</ListItem>
						)}
					</List>
					<ButtonGroup variant='contained'>
						<Button onClick={() => setCurrent(contact)}>Edit</Button>
						<Button onClick={onDelete} color='red'>
							Delete
						</Button>
					</ButtonGroup>
				</CardContent>
			</CardItem>
		</Paper>
	);
};

const CardItem = styled(Card)`
	margin-bottom: 1rem;
`;

const CardHeader = styled.div`
	align-items: center;
	display: flex;

	h4 {
		margin-right: 1rem;
	}
`;

ContactItem.propTypes = {
	contact: PropTypes.object.isRequired,
};
