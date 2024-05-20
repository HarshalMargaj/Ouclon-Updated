import React, { useState, useEffect } from "react";
import "./TabNavigation.css";

const TabNavigation = () => {
	const [activeTab, setActiveTab] = useState("tab1");

	const handleTabChange = tab => {
		setActiveTab(tab);
	};

	return (
		<div>
			<ul className="tabs">
				<li>
					<a
						href="#tab1"
						onClick={() => handleTabChange("tab1")}
						className={activeTab === "tab1" ? "active" : ""}
					>
						Retail
					</a>
				</li>
				<li>
					<a
						href="#tab2"
						onClick={() => handleTabChange("tab2")}
						className={activeTab === "tab2" ? "active" : ""}
					>
						SaaS
					</a>
				</li>
				<li>
					<a
						href="#tab3"
						onClick={() => handleTabChange("tab3")}
						className={activeTab === "tab3" ? "active" : ""}
					>
						E-commerce
					</a>
				</li>
				<li>
					<a
						href="#tab4"
						onClick={() => handleTabChange("tab4")}
						className={activeTab === "tab4" ? "active" : ""}
					>
						FinTech
					</a>
				</li>
				<li>
					<a
						href="#tab5"
						onClick={() => handleTabChange("tab5")}
						className={activeTab === "tab5" ? "active" : ""}
					>
						Manufacturing
					</a>
				</li>
			</ul>
			<div className="tab-content">
				{activeTab === "tab1" && <Tab1Content />}
				{activeTab === "tab2" && <Tab2Content />}
				{activeTab === "tab3" && <Tab3Content />}
				{activeTab === "tab4" && <Tab4Content />}
				{activeTab === "tab5" && <Tab5Content />}
			</div>
		</div>
	);
};

const Tab1Content = () => {
	return (
		<div>
			<div className="drawer">
				<div className="cards">
					<div className="card">
						<div className="card-img">
							<img src="Images/Mask group (1).svg" alt="" />
						</div>

						<div className="card-content">
							<h3>Optimise Inventory</h3>
							<p>
								Analyse sales trends and predict inventory
								needs,-minimising overstock and understock
								situations.
							</p>
						</div>
					</div>
					<div className="card">
						<div className="card-img">
							<img src="Images/Mask group (2).svg" alt="" />
						</div>

						<div className="card-content">
							<h3>Create Segmentation</h3>
							<p>
								Leverage data to create detailed customer
								segments,-tailoring marketing strategies to
								increase engagement and conversion rates.
							</p>
						</div>
					</div>
					<div className="card">
						<div className="card-img">
							<img src="Images/Mask group (3).svg" alt="" />
						</div>

						<div className="card-content">
							<h3>Understand Sustainability</h3>
							<p>
								Adjust prices based on real-time market data and
								consumer behavior analytics- to maximize
								profitability.
							</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

const Tab2Content = () => {
	return (
		<div>
			<div className="drawer">
				<div className="cards">
					<div className="card">
						<div className="card-img">
							<img src="Images/Mask group (13).svg" alt="" />
						</div>

						<div className="card-content">
							<h3>Churn Prediction</h3>
							<p>
								Utilize Oculon to identify at-risk customers- by
								analyzing usage patterns and engagement metrics.
							</p>
						</div>
					</div>
					<div className="card">
						<div className="card-img">
							<img src="Images/Mask group (14).svg" alt="" />
						</div>

						<div className="card-content">
							<h3>Revenue Forecasting</h3>
							<p>
								Employ advanced modeling to predict future
								revenue streams- based on current growth trends
								and customer acquisition rates.
							</p>
						</div>
					</div>
					<div className="card">
						<div className="card-img">
							<img src="Images/Mask group (15).svg" alt="" />
						</div>

						<div className="card-content">
							<h3>Feature Usage Analysis</h3>
							<p>
								Track which features are most used and valued by
								customers,- guiding development priorities and
								resource allocation.
							</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

const Tab3Content = () => {
	return (
		<div>
			<div className="drawer">
				<div className="cards">
					<div className="card">
						<div className="card-img">
							<img src="Images/Mask group (4).svg" alt="" />
						</div>

						<div className="card-content">
							<h3>Predict customer Lifetime Value</h3>
							<p>
								Analyze past purchasing behavior and customer
								interactions - to predict future buying patterns
								and determine the most valuable customers.
							</p>
						</div>
					</div>
					<div className="card">
						<div className="card-img">
							<img src="Images/Mask group (5).svg" alt="" />
						</div>

						<div className="card-content">
							<h3>Supply Chain Management</h3>
							<p>
								Integrate data across the supply chain to
								optimize logistics, reduce shipping times, and
								improve customer satisfaction.
							</p>
						</div>
					</div>
					<div className="card">
						<div className="card-img">
							<img src="Images/Mask group (6).svg" alt="" />
						</div>

						<div className="card-content">
							<h3>A/B Testing Analysis</h3>
							<p>
								Use Oculon to measure the impact of different
								webpage layouts, promotional offers, and product
								placements on sales and customer behavior.
							</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};
const Tab4Content = () => {
	return (
		<div>
			<div className="drawer">
				<div className="cards">
					<div className="card">
						<div className="card-img">
							<img src="Images/Mask group (7).svg" alt="" />
						</div>

						<div className="card-content">
							<h3>Fraud Detection</h3>
							<p>
								Implement models that detect unusual transaction
								patterns in real-time- to prevent fraud and
								maintain security.
							</p>
						</div>
					</div>
					<div className="card">
						<div className="card-img">
							<img src="Images/Mask group (8).svg" alt="" />
						</div>

						<div className="card-content">
							<h3>Credit Scoring</h3>
							<p>
								Develop predictive models to assess credit risk-
								based on a wide array of financial behaviors and
								customer demographics.
							</p>
						</div>
					</div>
					<div className="card">
						<div className="card-img">
							<img src="Images/Mask group (9).svg" alt="" />
						</div>

						<div className="card-content">
							<h3>Regulatory Compliance Monitoring</h3>
							<p>
								Automatically track and report transactions that
								may require regulatory review - or action,
								ensuring compliance with minimal manual
								intervention.
							</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};
const Tab5Content = () => {
	return (
		<div>
			<div className="drawer">
				<div className="cards">
					<div className="card">
						<div className="card-img">
							<img src="Images/Mask group (10).svg" alt="" />
						</div>

						<div className="card-content">
							<h3>Predictive Maintenance</h3>
							<p>
								Analyze machine performance data to predict
								equipment failures before they occur, -reducing
								downtime and maintenance costs.
							</p>
						</div>
					</div>
					<div className="card">
						<div className="card-img">
							<img src="Images/Mask group (11).svg" alt="" />
						</div>

						<div className="card-content">
							<h3>Production Optimization</h3>
							<p>
								Model production processes to identify
								bottlenecks and optimize workflow
							</p>
						</div>
					</div>
					<div className="card">
						<div className="card-img">
							<img src="Images/Mask group (12).svg" alt="" />
						</div>

						<div className="card-content">
							<h3>Quality Control Analysis</h3>
							<p>
								Utilize data from production lines to detect
								anomalies - or variations in product quality,
								triggering corrective actions in real-time.
							</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default TabNavigation;
