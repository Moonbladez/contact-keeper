import React, { useContext } from "react";
import AlertContext from "../../context/alert/alertContext";

import { AiOutlineInfoCircle } from "react-icons/ai";

import Alert from "@material-ui/lab/Alert";
export const Alerts = () => {
	const alertContext = useContext(AlertContext);

	return (
		alertContext.alerts.length > 0 &&
		alertContext.alerts.map((alert) => (
			<Alert key={alert.id} severity='error'>
				{alert.message}
			</Alert>
		))
	);
};
