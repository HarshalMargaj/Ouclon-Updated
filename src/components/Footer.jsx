import React from "react";
import "./Footer.css";
import { FaXTwitter } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";

const Footer = () => {
	return (
		<div>
			<footer>
				<div className="footer">
					<div className="logo">
						<img src="/Mask group.svg" alt="" />
					</div>
					<div className="copyright">
						<p>
							Copyrights&copy; 2024 Oculon.ai. All rights
							reserved.
						</p>
					</div>
					<div className="social-icons">
						<ul>
							<li>
								<a href="#">
									<FaXTwitter />
								</a>
							</li>
							<li>
								<a href="#">
									<FaLinkedin />
								</a>
							</li>
						</ul>
					</div>
				</div>
			</footer>
		</div>
	);
};

export default Footer;
