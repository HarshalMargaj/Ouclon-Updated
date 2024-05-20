import React from "react";
import "./Card.css";

const Card = props => {
	return (
		<div>
			<div className="num-card">
				<div className="first">{props.first}</div>
				<div className="mid"></div>
				<div className="second">{props.second}</div>
			</div>
		</div>
	);
};

export default Card;
