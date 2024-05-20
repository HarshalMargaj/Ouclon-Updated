import React from "react";
import "./Integration.css";

const Integration = props => {
	return (
		<div>
			<div className="integration">
				<img src={`/Images/${props.image}`} alt="" />
			</div>
		</div>
	);
};

export default Integration;
