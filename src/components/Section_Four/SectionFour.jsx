import React from "react";
import Accordion from "./Accordion";
import "./SectionFour.css";

const SectionFour = () => {
	return (
		<div>
			<section id="section-4">
				<div className="sec-heading">
					<div>
						<h1>UNLOCK THE FUTURE OF INTELLIGENCE</h1>
						<p>Turn questions into insights with Oculon Ai</p>
					</div>
				</div>
				<div className="accordion-box">
					<div className="accordion">
						<Accordion />
					</div>
				</div>
			</section>
		</div>
	);
};

export default SectionFour;
