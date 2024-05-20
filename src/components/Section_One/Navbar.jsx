import React from "react";
import "./Navbar.css";
import "../Responsive.css";

const Navbar = () => {
	return (
		<div>
			<nav>
				<img src="/Mask group.svg" alt="" />
				<div className="btn">
					<button className="btn-1">Log In</button>
					<button className="btn-2">Sign Up</button>
				</div>
			</nav>
		</div>
	);
};

export default Navbar;
