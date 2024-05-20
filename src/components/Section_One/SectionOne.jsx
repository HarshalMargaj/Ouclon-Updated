import React from "react";
import "./SectionOne.css";

const SectionOne = () => {
	return (
		<div>
			<section id="section-1">
				<div className="headline">
					<h1>
						Clear Insights. <br />
						Confident Decisions.
					</h1>
					<p>
						Oculon simplifies financial planning by integrating
						real-time data across departments, eliminating outdated
						and cumbersome tools. Streamline decision-making and
						forecasting, ensuring quick, accurate, and scalable
						financial strategies.
					</p>
					<div className="cta">
						<div className="input-wrapper">
							<input
								type="email"
								placeholder="Enter your email here"
							/>
						</div>
						<button>Join Beta</button>
					</div>
				</div>
			</section>
		</div>
	);
};

export default SectionOne;
