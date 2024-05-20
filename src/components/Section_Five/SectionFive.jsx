import React from "react";
import "./SectionFive.css";

const SectionFive = () => {
	return (
		<div>
			<section id="section-5">
				<div className="sec-heading">
					<div>
						<h1>
							Oculon - First Planning and Decision Intelligence
							Platform
						</h1>
						<p>Harness the Artificial Intelligence Oculon</p>
					</div>
				</div>
				<div className="tiles">
					<div className="tile tile1">
						<div className="tile-heading">
							Automate Data Integrations
						</div>
						<div className="tile-content">
							Streamline data updates from systems like
							accounting, HRIS, CRM, and data warehouses with one
							click, ensuring timely insights.
						</div>
					</div>
					<div className="tile tile2">
						<div className="tile-heading">Build Custom Models</div>
						<div className="tile-content">
							Create tailored financial models and metrics, making
							complex data accessible for all proficiency levels.
						</div>
					</div>
					<div className="tile tile3">
						<div className="tile-heading">
							Deliver Powerful Reports{" "}
						</div>
						<div className="tile-content">
							Generate comprehensive reports and forecasts,
							providing insights into financial planning and
							keeping businesses informed.
						</div>
					</div>
					<div className="tile tile4">
						<div className="tile-heading">
							Consolidate for Insight
						</div>
						<div className="tile-content">
							Merge data and facilitate scenario planning for
							accurate, actionable insights, supporting strategic
							decisions.
						</div>
					</div>
					<div className="tile tile5">
						<div className="tile-heading">
							Explore Updates on Feed
						</div>
						<div className="tile-content">
							Receive real-time updates and notifications through
							a dynamic feed, enhancing visibility into
							operations.
						</div>
					</div>
				</div>
			</section>
		</div>
	);
};

export default SectionFive;
