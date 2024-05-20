// import React, { useRef, useState } from "react";

// import { Swiper, SwiperSlide } from "swiper/react";

// import "swiper/css";
// import "swiper/css/pagination";
// import "swiper/css/navigation";

// import "./Slider.css";

// import { Navigation, Autoplay } from "swiper/modules";

// export default function App() {
// 	return (
// 		<>
// 			<section id="section-swiper">
// 				<Swiper
// 					slidesPerView={2}
// 					spaceBetween={30}
// 					navigation={true}
// 					loop={true}
// 					modules={[Navigation, Autoplay]}
// 					autoplay={{
// 						delay: 2500,
// 						disableOnInteraction: false,
// 					}}
// 					className="mySwiper"
// 					breakpoints={{
// 						0: {
// 							slidesPerView: 1,
// 							spaceBetween: 10,
// 						},

// 						640: {
// 							slidesPerView: 2,
// 							spaceBetween: 20,
// 						},

// 						768: {
// 							slidesPerView: 2,
// 							spaceBetween: 30,
// 						},
// 					}}
// 				>
// 					<SwiperSlide>
// 						<div className="box">
// 							<div
// 								className="box-img
//                             "
// 							>
// 								<img src="Images/Mask group (25).svg" alt="" />
// 							</div>
// 							<div className="box-heading">
// 								<h4>Marketing: Amplifying Profitability</h4>
// 							</div>
// 							<div className="box-content">
// 								<ul>
// 									<li>
// 										Boost ROI: Pinpoint opportunities,
// 										tailor campaigns to target the right
// 										marketing oppertunities
// 									</li>
// 									<li>
// 										Simplify Decisions: Utilize the AI
// 										assistant to simplify complex data
// 										analysis for quicker, more informed
// 										marketing decisions.
// 									</li>
// 								</ul>
// 							</div>
// 						</div>
// 					</SwiperSlide>
// 					<SwiperSlide>
// 						<div className="box">
// 							<div
// 								className="box-img
//                             "
// 							>
// 								<img src="Images/Mask group (26).svg" alt="" />
// 							</div>
// 							<div className="box-heading">
// 								<h4>
// 									Sales: Accurate Forecasting for Enhanced
// 									Performance
// 								</h4>
// 							</div>
// 							<div className="box-content">
// 								<ul>
// 									<li>
// 										Detailed Sales Insights: Utilize data
// 										from CRM and ERP systems to fully
// 										understand customer behavior and sales
// 										dynamics
// 									</li>
// 									<li>
// 										Improve Forecast Accuracy: Use precise
// 										forecasting to identify and seize
// 										emerging sales opportunities before
// 										competitors.
// 									</li>
// 								</ul>
// 							</div>
// 						</div>
// 					</SwiperSlide>
// 					<SwiperSlide>
// 						<div className="box">
// 							<div
// 								className="box-img
//                             "
// 							>
// 								<img src="Images/Mask group (27).svg" alt="" />
// 							</div>
// 							<div className="box-heading">
// 								<h4>
// 									Human Resource Management: Streamlined
// 									Operations
// 								</h4>
// 							</div>
// 							<div className="box-content">
// 								<ul>
// 									<li>
// 										Integrated HR Management: Seamlessly
// 										connect with HRIS for a strategic
// 										approach to workforce management.
// 									</li>
// 									<li>
// 										Efficient Compliance and Operations:
// 										Analyze everything from payroll to tax
// 										implications, boosting efficiency,
// 										ensuring compliance, and reducing
// 										overheads.
// 									</li>
// 								</ul>
// 							</div>
// 						</div>
// 					</SwiperSlide>
// 					<SwiperSlide>
// 						<div className="box">
// 							<div
// 								className="box-img
//                             "
// 							>
// 								<img src="Images/Mask group (28).svg" alt="" />
// 							</div>
// 							<div className="box-heading">
// 								<h4>
// 									Financial Planning and Analytics: Strategic
// 									Financial Decision Making
// 								</h4>
// 							</div>
// 							<div className="box-content">
// 								<ul>
// 									<li>
// 										Comprehensive Financial Overview:
// 										Aggregate data from various financial
// 										systems to assess financial health and
// 										risk exposure.
// 									</li>
// 									<li>
// 										Enhance Strategic Decisions: Employ
// 										predictive analytics and scenario
// 										planning to protect profitability and
// 										ensure financial stability.
// 									</li>
// 								</ul>
// 							</div>
// 						</div>
// 					</SwiperSlide>
// 				</Swiper>
// 			</section>
// 		</>
// 	);
// }

import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./Slider.css";

// import required modules
import { Navigation, Autoplay } from "swiper/modules";

export default function App() {
	return (
		<>
			<section id="section-swiper">
				<Swiper
					slidesPerView={2}
					spaceBetween={30}
					navigation={true}
					loop={true}
					modules={[Navigation, Autoplay]}
					autoplay={{
						delay: 2500,
						disableOnInteraction: false,
					}}
					className="mySwiper"
					breakpoints={{
						// when window width is >= 0px
						390: {
							slidesPerView: 1,
							spaceBetween: 40,
							navigation: false,
						},
						// when window width is >= 640px
						768: {
							slidesPerView: 2,
							spaceBetween: 20,
						},
						// when window width is >= 768px
						768: {
							slidesPerView: 2,
							spaceBetween: 30,
						},
					}}
				>
					<SwiperSlide>
						<div className="box">
							<div className="box-img">
								<img src="Images/Mask group (25).svg" alt="" />
							</div>
							<div className="box-heading">
								<h4>Marketing: Amplifying Profitability</h4>
							</div>
							<div className="box-content">
								<ul>
									<li>
										Boost ROI: Pinpoint opportunities,
										tailor campaigns to target the right
										marketing opportunities.
									</li>
									<li>
										Simplify Decisions: Utilize the AI
										assistant to simplify complex data
										analysis for quicker, more informed
										marketing decisions.
									</li>
								</ul>
							</div>
						</div>
					</SwiperSlide>
					<SwiperSlide>
						<div className="box">
							<div className="box-img">
								<img src="Images/Mask group (26).svg" alt="" />
							</div>
							<div className="box-heading">
								<h4>
									Sales: Accurate Forecasting for Enhanced
									Performance
								</h4>
							</div>
							<div className="box-content">
								<ul>
									<li>
										Detailed Sales Insights: Utilize data
										from CRM and ERP systems to fully
										understand customer behavior and sales
										dynamics.
									</li>
									<li>
										Improve Forecast Accuracy: Use precise
										forecasting to identify and seize
										emerging sales opportunities before
										competitors.
									</li>
								</ul>
							</div>
						</div>
					</SwiperSlide>
					<SwiperSlide>
						<div className="box">
							<div className="box-img">
								<img src="Images/Mask group (27).svg" alt="" />
							</div>
							<div className="box-heading">
								<h4>
									Human Resource Management: Streamlined
									Operations
								</h4>
							</div>
							<div className="box-content">
								<ul>
									<li>
										Integrated HR Management: Seamlessly
										connect with HRIS for a strategic
										approach to workforce management.
									</li>
									<li>
										Efficient Compliance and Operations:
										Analyze everything from payroll to tax
										implications, boosting efficiency,
										ensuring compliance, and reducing
										overheads.
									</li>
								</ul>
							</div>
						</div>
					</SwiperSlide>
					<SwiperSlide>
						<div className="box">
							<div className="box-img">
								<img src="Images/Mask group (28).svg" alt="" />
							</div>
							<div className="box-heading">
								<h4>
									Financial Planning and Analytics: Strategic
									Financial Decision Making
								</h4>
							</div>
							<div className="box-content">
								<ul>
									<li>
										Comprehensive Financial Overview:
										Aggregate data from various financial
										systems to assess financial health and
										risk exposure.
									</li>
									<li>
										Enhance Strategic Decisions: Employ
										predictive analytics and scenario
										planning to protect profitability and
										ensure financial stability.
									</li>
								</ul>
							</div>
						</div>
					</SwiperSlide>
				</Swiper>
			</section>
		</>
	);
}
