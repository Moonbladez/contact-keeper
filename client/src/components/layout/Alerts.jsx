import React, { useContext } from "react";
import  AlertContext  from "../../context/alert/alertContext";

import { AiOutlineInfoCircle } from "react-icons/ai";

export const Alerts = () => {
	const alertContext = useContext(AlertContext);

	return (
		alertContext.alerts.length > 0 &&
		alertContext.alerts.map((alert) => (
			<div key={alert.id} className={`alert alert-${alert.type}`}>
				<AiOutlineInfoCircle /> {alert.message}
			</div>
		))
	);
};
