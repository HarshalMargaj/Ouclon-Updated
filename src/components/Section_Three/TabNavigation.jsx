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
				<li className="list list-1">
					<a
						href="#tab1"
						onClick={() => handleTabChange("tab1")}
						className={activeTab === "tab1" ? "active" : ""}
					>
						<img src="Images/Mask group (29).svg" alt="" />
						Model Studio
					</a>
				</li>
				<li className="list">
					<a
						href="#tab2"
						onClick={() => handleTabChange("tab2")}
						className={activeTab === "tab2" ? "active" : ""}
					>
						<img src="Images/Mask group (30).svg" alt="" />
						Feeds
					</a>
				</li>
				<li className="list">
					<a
						href="#tab3"
						onClick={() => handleTabChange("tab3")}
						className={activeTab === "tab3" ? "active" : ""}
					>
						<img src="Images/Mask group (31).svg" alt="" />
						Dashboards
					</a>
				</li>
			</ul>
			<div className="tab-content">
				{activeTab === "tab1" && <Tab1Content />}
				{activeTab === "tab2" && <Tab2Content />}
				{activeTab === "tab3" && <Tab3Content />}
			</div>
		</div>
	);
};

const Tab1Content = () => {
	return (
		<div>
			<div className="drawer-one">
				<div className="img">
					<img src="Images/Studio.png" alt="" />
				</div>
				<p>
					Tailor financial models, define custom metrics, leverage
					predefined decision pathways for strategic planning.
				</p>
			</div>
		</div>
	);
};

const Tab2Content = () => {
	return (
		<div>
			<div className="drawer-one">
				<div className="img">
					<img src="Images/Feed.png" alt="" />
				</div>
				<p>
					Visualise data through customizable dashboards highlighting
					relevant metrics and insights for informed decision-making.
				</p>
			</div>
		</div>
	);
};

const Tab3Content = () => {
	return (
		<div>
			<div className="drawer-one">
				<div className="img">
					<img src="Images/Dashboards.png" alt="" />
				</div>
				<p>
					Stay agile with intelligent feed systems providing real-time
					notifications, actionable insights for proactive
					decision-making.
				</p>
			</div>
		</div>
	);
};

export default TabNavigation;
