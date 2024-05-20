import React from "react";
import "./main.css";
import Integration from "./Integration";
import Marquee from "react-fast-marquee";

const Main = () => {
	return (
		<div id="integration-section">
			<div className="integration-heading">
				Connect your most important <br /> financial systems in minutes
			</div>
			<div className="integration-subheading">
				Oculon streamlines your workflow with one-click integrations to
				over 100 financial systems. <br />
				Effortlessly connect your accounts, improve decision-making, and
				boost efficiency.
			</div>
			<div className="integrations">
				<Marquee>
					<Integration image="Mask group (16).svg" />
					<Integration image="Mask group (17).svg" />
					<Integration image="Mask group (18).svg" />
					<Integration image="Mask group (19).svg" />
					<Integration image="Mask group (20).svg" />
					<Integration image="Mask group (21).svg" />
					<Integration image="Mask group (22).svg" />
					<Integration image="Mask group (23).svg" />
					<Integration image="Mask group (24).svg" />
					<Integration image="Mask group (24).svg" />
					<Integration image="Mask group (24).svg" />
				</Marquee>
			</div>
		</div>
	);
};

export default Main;
