// import * as React from "react";
// import Accordion from "@mui/material/Accordion";
// import AccordionDetails from "@mui/material/AccordionDetails";
// import AccordionSummary from "@mui/material/AccordionSummary";
// import Typography from "@mui/material/Typography";
// import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

// export default function ControlledAccordions() {
// 	const [expanded, setExpanded] = React.useState(false);

// 	const handleChange = panel => (event, isExpanded) => {
// 		setExpanded(isExpanded ? panel : false);
// 	};

// 	return (
// 		<div>
// 			<Accordion
// 				expanded={expanded === "panel1"}
// 				onChange={handleChange("panel1")}
// 				square={true}
// 				disableGutters={true}
// 				sx={{
// 					backgroundColor: "#110c29",
// 					color: "white",
// 					borderTop: 0.5,
// 					borderColor: "rgba(170, 125, 252, 0.25)",
// 					paddingTop: 2,
// 					paddingBottom: 2,
// 				}}
// 			>
// 				<AccordionSummary
// 					expandIcon={<ExpandMoreIcon sx={{ color: "white" }} />}
// 					aria-controls="panel1bh-content"
// 					id="panel1bh-header"
// 				>
// 					<Typography
// 						sx={{
// 							width: "80%",
// 							flexShrink: 0,
// 							fontFamily: "poppins",
// 							fontSize: 18,
// 						}}
// 					>
// 						Build with AI
// 					</Typography>
// 				</AccordionSummary>
// 				<AccordionDetails>
// 					<Typography
// 						sx={{
// 							fontFamily: "poppins",
// 							letterSpacing: 1,
// 						}}
// 					>
// 						Augment decision-making processes with AI-powered
// 						systems that evaluate complex data, assess multiple
// 						variables, and provide actionable recommendations
// 						aligned with predefined objectives.
// 					</Typography>
// 				</AccordionDetails>
// 			</Accordion>
// 			<Accordion
// 				expanded={expanded === "panel2"}
// 				onChange={handleChange("panel2")}
// 				disableGutters={true}
// 				sx={{
// 					backgroundColor: "#110c29",
// 					color: "white",
// 					borderTop: 0.2,
// 					borderColor: "rgba(170, 125, 252, 0.25)",
// 					paddingTop: 2,
// 					paddingBottom: 2,
// 				}}
// 			>
// 				<AccordionSummary
// 					expandIcon={<ExpandMoreIcon sx={{ color: "white" }} />}
// 					aria-controls="panel2bh-content"
// 					id="panel2bh-header"
// 				>
// 					<Typography
// 						sx={{
// 							width: "80%",
// 							flexShrink: 0,
// 							fontFamily: "poppins",
// 							fontSize: 18,
// 						}}
// 					>
// 						Plan with AI
// 					</Typography>
// 				</AccordionSummary>
// 				<AccordionDetails>
// 					<Typography
// 						sx={{ fontFamily: "poppins", letterSpacing: 1 }}
// 					>
// 						Gain a competitive edge by incorporating AI-driven
// 						predictive analytics to forecast future trends, identify
// 						risks, and uncover hidden opportunities within your
// 						data.
// 					</Typography>
// 				</AccordionDetails>
// 			</Accordion>
// 			<Accordion
// 				sx={{
// 					backgroundColor: "#110c29",
// 					color: "white",
// 					borderTop: 0.2,
// 					borderColor: "rgba(170, 125, 252, 0.25)",
// 					paddingTop: 2,
// 					paddingBottom: 2,
// 				}}
// 				expanded={expanded === "panel3"}
// 				onChange={handleChange("panel3")}
// 				disableGutters={true}
// 			>
// 				<AccordionSummary
// 					expandIcon={<ExpandMoreIcon sx={{ color: "white" }} />}
// 					aria-controls="panel3bh-content"
// 					id="panel3bh-header"
// 				>
// 					<Typography
// 						sx={{
// 							width: "80%",
// 							flexShrink: 0,
// 							fontFamily: "poppins",
// 							fontSize: 18,
// 						}}
// 					>
// 						Unlock Insights with AI
// 					</Typography>
// 				</AccordionSummary>
// 				<AccordionDetails>
// 					<Typography
// 						sx={{ fontFamily: "poppins", letterSpacing: 1 }}
// 					>
// 						Engage in natural language conversations with an AI
// 						assistant that understands user queries and provides
// 						personalized insights and recommendations.
// 					</Typography>
// 				</AccordionDetails>
// 			</Accordion>
// 			<Accordion
// 				expanded={expanded === "panel4"}
// 				onChange={handleChange("panel4")}
// 				disableGutters={true}
// 				sx={{
// 					backgroundColor: "#110c29",
// 					color: "white",
// 					borderTop: 0.2,
// 					borderColor: "rgba(170, 125, 252, 0.25)",
// 					paddingTop: 2,
// 					paddingBottom: 2,
// 					boxShadow: "none",
// 				}}
// 			>
// 				<AccordionSummary
// 					expandIcon={<ExpandMoreIcon sx={{ color: "white" }} />}
// 					aria-controls="panel4bh-content"
// 					id="panel4bh-header"
// 				>
// 					<Typography
// 						sx={{
// 							width: "80%",
// 							flexShrink: 0,
// 							fontFamily: "poppins",
// 							fontSize: 18,
// 						}}
// 					>
// 						Visualize with AI
// 					</Typography>
// 				</AccordionSummary>
// 				<AccordionDetails>
// 					<Typography
// 						sx={{ fontFamily: "poppins", letterSpacing: 1 }}
// 					>
// 						Transform data into compelling visualizations with
// 						AI-powered capabilities that automate chart selection,
// 						intelligent data encoding, and adaptive layout
// 						adjustments.
// 					</Typography>
// 				</AccordionDetails>
// 			</Accordion>
// 			<Accordion
// 				expanded={expanded === "panel5"}
// 				onChange={handleChange("panel5")}
// 				disableGutters={true}
// 				sx={{
// 					backgroundColor: "#110c29",
// 					color: "white",
// 					borderTop: 0.5,
// 					borderColor: "rgba(170, 125, 252, 0.25)",
// 					paddingTop: 2,
// 					paddingBottom: 2,
// 					boxShadow: "none",
// 				}}
// 			>
// 				<AccordionSummary
// 					expandIcon={<ExpandMoreIcon sx={{ color: "white" }} />}
// 					aria-controls="panel4bh-content"
// 					id="panel4bh-header"
// 				>
// 					<Typography
// 						sx={{
// 							width: "45%",
// 							flexShrink: 0,
// 							fontFamily: "poppins",
// 							fontSize: 18,
// 						}}
// 					>
// 						Collaborate with AI
// 					</Typography>
// 				</AccordionSummary>
// 				<AccordionDetails>
// 					<Typography
// 						sx={{ fontFamily: "poppins", letterSpacing: 1 }}
// 					>
// 						Streamline workflows and automate processes with
// 						AI-driven capabilities that minimize manual effort in
// 						tasks such as data preparation, model deployment, and
// 						report generation.
// 					</Typography>
// 				</AccordionDetails>
// 			</Accordion>
// 		</div>
// 	);
// }

// import * as React from "react";
// import Accordion from "@mui/material/Accordion";
// import AccordionDetails from "@mui/material/AccordionDetails";
// import AccordionSummary from "@mui/material/AccordionSummary";
// import Typography from "@mui/material/Typography";
// import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

// const images = [
// 	"https://via.placeholder.com/800x400.png?text=Image+1", // Replace with your image URLs
// 	"https://via.placeholder.com/800x400.png?text=Image+2",
// 	"https://via.placeholder.com/800x400.png?text=Image+3",
// 	"https://via.placeholder.com/800x400.png?text=Image+4",
// 	"https://via.placeholder.com/800x400.png?text=Image+5",
// ];

// export default function ControlledAccordions() {
// 	const [expanded, setExpanded] = React.useState(false);
// 	const [currentImage, setCurrentImage] = React.useState(images[0]);

// 	const handleChange = (panel, image) => (event, isExpanded) => {
// 		setExpanded(isExpanded ? panel : false);
// 		setCurrentImage(image);
// 	};

// 	return (
// 		<div>
// 			<img
// 				src={currentImage}
// 				alt="Accordion Image"
// 				style={{ width: "100%", marginBottom: "20px" }}
// 			/>
// 			<Accordion
// 				expanded={expanded === "panel1"}
// 				onChange={handleChange("panel1", images[0])}
// 				square={true}
// 				disableGutters={true}
// 				sx={{
// 					backgroundColor: "#110c29",
// 					color: "white",
// 					borderTop: 0.5,
// 					borderColor: "rgba(170, 125, 252, 0.25)",
// 					paddingTop: 2,
// 					paddingBottom: 2,
// 				}}
// 			>
// 				<AccordionSummary
// 					expandIcon={<ExpandMoreIcon sx={{ color: "white" }} />}
// 					aria-controls="panel1bh-content"
// 					id="panel1bh-header"
// 				>
// 					<Typography
// 						sx={{
// 							width: "80%",
// 							flexShrink: 0,
// 							fontFamily: "poppins",
// 							fontSize: 18,
// 						}}
// 					>
// 						Build with AI
// 					</Typography>
// 				</AccordionSummary>
// 				<AccordionDetails>
// 					<Typography
// 						sx={{
// 							fontFamily: "poppins",
// 							letterSpacing: 1,
// 						}}
// 					>
// 						Augment decision-making processes with AI-powered
// 						systems that evaluate complex data, assess multiple
// 						variables, and provide actionable recommendations
// 						aligned with predefined objectives.
// 					</Typography>
// 				</AccordionDetails>
// 			</Accordion>
// 			<Accordion
// 				expanded={expanded === "panel2"}
// 				onChange={handleChange("panel2", images[1])}
// 				disableGutters={true}
// 				sx={{
// 					backgroundColor: "#110c29",
// 					color: "white",
// 					borderTop: 0.2,
// 					borderColor: "rgba(170, 125, 252, 0.25)",
// 					paddingTop: 2,
// 					paddingBottom: 2,
// 				}}
// 			>
// 				<AccordionSummary
// 					expandIcon={<ExpandMoreIcon sx={{ color: "white" }} />}
// 					aria-controls="panel2bh-content"
// 					id="panel2bh-header"
// 				>
// 					<Typography
// 						sx={{
// 							width: "80%",
// 							flexShrink: 0,
// 							fontFamily: "poppins",
// 							fontSize: 18,
// 						}}
// 					>
// 						Plan with AI
// 					</Typography>
// 				</AccordionSummary>
// 				<AccordionDetails>
// 					<Typography
// 						sx={{ fontFamily: "poppins", letterSpacing: 1 }}
// 					>
// 						Gain a competitive edge by incorporating AI-driven
// 						predictive analytics to forecast future trends, identify
// 						risks, and uncover hidden opportunities within your
// 						data.
// 					</Typography>
// 				</AccordionDetails>
// 			</Accordion>
// 			<Accordion
// 				sx={{
// 					backgroundColor: "#110c29",
// 					color: "white",
// 					borderTop: 0.2,
// 					borderColor: "rgba(170, 125, 252, 0.25)",
// 					paddingTop: 2,
// 					paddingBottom: 2,
// 				}}
// 				expanded={expanded === "panel3"}
// 				onChange={handleChange("panel3", images[2])}
// 				disableGutters={true}
// 			>
// 				<AccordionSummary
// 					expandIcon={<ExpandMoreIcon sx={{ color: "white" }} />}
// 					aria-controls="panel3bh-content"
// 					id="panel3bh-header"
// 				>
// 					<Typography
// 						sx={{
// 							width: "80%",
// 							flexShrink: 0,
// 							fontFamily: "poppins",
// 							fontSize: 18,
// 						}}
// 					>
// 						Unlock Insights with AI
// 					</Typography>
// 				</AccordionSummary>
// 				<AccordionDetails>
// 					<Typography
// 						sx={{ fontFamily: "poppins", letterSpacing: 1 }}
// 					>
// 						Engage in natural language conversations with an AI
// 						assistant that understands user queries and provides
// 						personalized insights and recommendations.
// 					</Typography>
// 				</AccordionDetails>
// 			</Accordion>
// 			<Accordion
// 				expanded={expanded === "panel4"}
// 				onChange={handleChange("panel4", images[3])}
// 				disableGutters={true}
// 				sx={{
// 					backgroundColor: "#110c29",
// 					color: "white",
// 					borderTop: 0.2,
// 					borderColor: "rgba(170, 125, 252, 0.25)",
// 					paddingTop: 2,
// 					paddingBottom: 2,
// 					boxShadow: "none",
// 				}}
// 			>
// 				<AccordionSummary
// 					expandIcon={<ExpandMoreIcon sx={{ color: "white" }} />}
// 					aria-controls="panel4bh-content"
// 					id="panel4bh-header"
// 				>
// 					<Typography
// 						sx={{
// 							width: "80%",
// 							flexShrink: 0,
// 							fontFamily: "poppins",
// 							fontSize: 18,
// 						}}
// 					>
// 						Visualize with AI
// 					</Typography>
// 				</AccordionSummary>
// 				<AccordionDetails>
// 					<Typography
// 						sx={{ fontFamily: "poppins", letterSpacing: 1 }}
// 					>
// 						Transform data into compelling visualizations with
// 						AI-powered capabilities that automate chart selection,
// 						intelligent data encoding, and adaptive layout
// 						adjustments.
// 					</Typography>
// 				</AccordionDetails>
// 			</Accordion>
// 			<Accordion
// 				expanded={expanded === "panel5"}
// 				onChange={handleChange("panel5", images[4])}
// 				disableGutters={true}
// 				sx={{
// 					backgroundColor: "#110c29",
// 					color: "white",
// 					borderTop: 0.5,
// 					borderColor: "rgba(170, 125, 252, 0.25)",
// 					paddingTop: 2,
// 					paddingBottom: 2,
// 					boxShadow: "none",
// 				}}
// 			>
// 				<AccordionSummary
// 					expandIcon={<ExpandMoreIcon sx={{ color: "white" }} />}
// 					aria-controls="panel4bh-content"
// 					id="panel4bh-header"
// 				>
// 					<Typography
// 						sx={{
// 							width: "45%",
// 							flexShrink: 0,
// 							fontFamily: "poppins",
// 							fontSize: 18,
// 						}}
// 					>
// 						Collaborate with AI
// 					</Typography>
// 				</AccordionSummary>
// 				<AccordionDetails>
// 					<Typography
// 						sx={{ fontFamily: "poppins", letterSpacing: 1 }}
// 					>
// 						Streamline workflows and automate processes with
// 						AI-driven capabilities that minimize manual effort in
// 						tasks such as data preparation, model deployment, and
// 						report generation.
// 					</Typography>
// 				</AccordionDetails>
// 			</Accordion>
// 		</div>
// 	);
// }

// import * as React from "react";
// import Accordion from "@mui/material/Accordion";
// import AccordionDetails from "@mui/material/AccordionDetails";
// import AccordionSummary from "@mui/material/AccordionSummary";
// import Typography from "@mui/material/Typography";
// import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
// import Box from "@mui/material/Box";

// const images = [
// 	"Images/Build.png",
// 	"Images/Build (1).png",
// 	"Images/Build (1).png",
// 	"Images/Visualise.png",
// 	"Images/Collaborate.png",
// ];

// export default function ControlledAccordions() {
// 	const [expanded, setExpanded] = React.useState("panel1");
// 	const [currentImage, setCurrentImage] = React.useState(images[0]);

// 	const handleChange = (panel, image) => (event, isExpanded) => {
// 		setExpanded(isExpanded ? panel : false);
// 		setCurrentImage(image);
// 	};

// 	return (
// 		<div
// 			style={{
// 				display: "flex",
// 				flexDirection: { xs: "column", sm: "column", md: "row" },
// 			}}
// 		>
// 			<div style={{ flex: 1, marginRight: "30px" }}>
// 				<Accordion
// 					expanded={expanded === "panel1"}
// 					onChange={handleChange("panel1", images[0])}
// 					square={true}
// 					disableGutters={true}
// 					sx={{
// 						backgroundColor: "#110c29",
// 						color: "white",
// 					}}
// 				>
// 					<AccordionSummary
// 						expandIcon={<ExpandMoreIcon sx={{ color: "white" }} />}
// 						aria-controls="panel1bh-content"
// 						id="panel1bh-header"
// 						sx={{
// 							backgroundColor: "rgba(255, 255, 255, 0.10)",
// 							borderRadius: 3,
// 							paddingTop: 2,
// 							paddingBottom: 2,
// 							borderBottom: 0.5,
// 							borderColor: "rgba(255, 255, 255, 0.25)",
// 						}}
// 					>
// 						<Typography
// 							sx={{
// 								width: "80%",
// 								flexShrink: 0,
// 								fontFamily: "poppins",
// 								fontSize: 18,
// 							}}
// 						>
// 							Build with AI
// 						</Typography>
// 					</AccordionSummary>
// 					<AccordionDetails>
// 						<Typography
// 							sx={{
// 								fontFamily: "poppins",
// 								letterSpacing: 1,
// 							}}
// 						>
// 							Augment decision-making processes with AI-powered
// 							systems that evaluate complex data, assess multiple
// 							variables, and provide actionable recommendations
// 							aligned with predefined objectives.
// 						</Typography>
// 					</AccordionDetails>
// 				</Accordion>
// 				<Accordion
// 					expanded={expanded === "panel2"}
// 					onChange={handleChange("panel2", images[1])}
// 					disableGutters={true}
// 					sx={{
// 						backgroundColor: "#110c29",
// 						color: "white",
// 					}}
// 				>
// 					<AccordionSummary
// 						expandIcon={<ExpandMoreIcon sx={{ color: "white" }} />}
// 						aria-controls="panel2bh-content"
// 						id="panel2bh-header"
// 						sx={{
// 							backgroundColor: "rgba(255, 255, 255, 0.10)",
// 							borderRadius: 3,
// 							paddingTop: 2,
// 							paddingBottom: 2,
// 							borderBottom: 0.5,
// 							borderColor: "rgba(255, 255, 255, 0.25)",
// 						}}
// 					>
// 						<Typography
// 							sx={{
// 								width: "80%",
// 								flexShrink: 0,
// 								fontFamily: "poppins",
// 								fontSize: 18,
// 							}}
// 						>
// 							Plan with AI
// 						</Typography>
// 					</AccordionSummary>
// 					<AccordionDetails>
// 						<Typography
// 							sx={{ fontFamily: "poppins", letterSpacing: 1 }}
// 						>
// 							Gain a competitive edge by incorporating AI-driven
// 							predictive analytics to forecast future trends,
// 							identify risks, and uncover hidden opportunities
// 							within your data.
// 						</Typography>
// 					</AccordionDetails>
// 				</Accordion>
// 				<Accordion
// 					sx={{
// 						backgroundColor: "#110c29",
// 						color: "white",
// 					}}
// 					expanded={expanded === "panel3"}
// 					onChange={handleChange("panel3", images[2])}
// 					disableGutters={true}
// 				>
// 					<AccordionSummary
// 						expandIcon={<ExpandMoreIcon sx={{ color: "white" }} />}
// 						aria-controls="panel3bh-content"
// 						id="panel3bh-header"
// 						sx={{
// 							backgroundColor: "rgba(255, 255, 255, 0.10)",
// 							borderRadius: 3,
// 							paddingTop: 2,
// 							paddingBottom: 2,
// 							borderBottom: 0.5,
// 							borderColor: "rgba(255, 255, 255, 0.25)",
// 						}}
// 					>
// 						<Typography
// 							sx={{
// 								width: "80%",
// 								flexShrink: 0,
// 								fontFamily: "poppins",
// 								fontSize: 18,
// 							}}
// 						>
// 							Unlock Insights with AI
// 						</Typography>
// 					</AccordionSummary>
// 					<AccordionDetails>
// 						<Typography
// 							sx={{ fontFamily: "poppins", letterSpacing: 1 }}
// 						>
// 							Engage in natural language conversations with an AI
// 							assistant that understands user queries and provides
// 							personalized insights and recommendations.
// 						</Typography>
// 					</AccordionDetails>
// 				</Accordion>
// 				<Accordion
// 					expanded={expanded === "panel4"}
// 					onChange={handleChange("panel4", images[3])}
// 					disableGutters={true}
// 					sx={{
// 						backgroundColor: "#110c29",
// 						color: "white",
// 						boxShadow: "none",
// 					}}
// 				>
// 					<AccordionSummary
// 						expandIcon={<ExpandMoreIcon sx={{ color: "white" }} />}
// 						aria-controls="panel4bh-content"
// 						id="panel4bh-header"
// 						sx={{
// 							backgroundColor: "rgba(255, 255, 255, 0.10)",
// 							borderRadius: 3,
// 							paddingTop: 2,
// 							paddingBottom: 2,
// 							borderBottom: 0.5,
// 							borderColor: "rgba(255, 255, 255, 0.25)",
// 						}}
// 					>
// 						<Typography
// 							sx={{
// 								width: "80%",
// 								flexShrink: 0,
// 								fontFamily: "poppins",
// 								fontSize: 18,
// 							}}
// 						>
// 							Visualize with AI
// 						</Typography>
// 					</AccordionSummary>
// 					<AccordionDetails>
// 						<Typography
// 							sx={{ fontFamily: "poppins", letterSpacing: 1 }}
// 						>
// 							Transform data into compelling visualizations with
// 							AI-powered capabilities that automate chart
// 							selection, intelligent data encoding, and adaptive
// 							layout adjustments.
// 						</Typography>
// 					</AccordionDetails>
// 				</Accordion>
// 				<Accordion
// 					expanded={expanded === "panel5"}
// 					onChange={handleChange("panel5", images[4])}
// 					disableGutters={true}
// 					sx={{
// 						backgroundColor: "#110c29",
// 						color: "white",

// 						boxShadow: "none",
// 					}}
// 				>
// 					<AccordionSummary
// 						expandIcon={<ExpandMoreIcon sx={{ color: "white" }} />}
// 						aria-controls="panel4bh-content"
// 						id="panel4bh-header"
// 						sx={{
// 							backgroundColor: "rgba(255, 255, 255, 0.10)",
// 							borderRadius: 3,
// 							paddingTop: 2,
// 							paddingBottom: 2,
// 							borderBottom: 0.5,
// 							borderColor: "rgba(255, 255, 255, 0.25)",
// 						}}
// 					>
// 						<Typography
// 							sx={{
// 								width: "45%",
// 								flexShrink: 0,
// 								fontFamily: "poppins",
// 								fontSize: 18,
// 							}}
// 						>
// 							Collaborate with AI
// 						</Typography>
// 					</AccordionSummary>
// 					<AccordionDetails>
// 						<Typography
// 							sx={{ fontFamily: "poppins", letterSpacing: 1 }}
// 						>
// 							Streamline workflows and automate processes with
// 							AI-driven capabilities that minimize manual effort
// 							in tasks such as data preparation, model deployment,
// 							and report generation.
// 						</Typography>
// 					</AccordionDetails>
// 				</Accordion>
// 			</div>
// 			<div style={{ flex: 1 }}>
// 				<img
// 					src={currentImage}
// 					alt="Accordion Image"
// 					style={{ width: "100%", height: "510px" }}
// 				/>
// 			</div>
// 		</div>
// 	);
// }

import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Box from "@mui/material/Box";

const images = [
	"Images/Build.png",
	"Images/Build (1).png",
	"Images/Build (1).png",
	"Images/Visualise.png",
	"Images/Collaborate.png",
];

export default function ControlledAccordions() {
	const [expanded, setExpanded] = React.useState("panel1");
	const [currentImage, setCurrentImage] = React.useState(images[0]);

	const handleChange = (panel, image) => (event, isExpanded) => {
		setExpanded(isExpanded ? panel : false);
		setCurrentImage(image);
	};

	return (
		<Box
			sx={{
				display: "flex",
				flexDirection: { xs: "column", sm: "column", md: "row" },
				gap: 3,
			}}
		>
			<Box sx={{ flex: 1 }}>
				<Accordion
					expanded={expanded === "panel1"}
					onChange={handleChange("panel1", images[0])}
					square={true}
					disableGutters={true}
					sx={{
						backgroundColor: "#110c29",
						color: "white",
					}}
				>
					<AccordionSummary
						expandIcon={<ExpandMoreIcon sx={{ color: "white" }} />}
						aria-controls="panel1bh-content"
						id="panel1bh-header"
						sx={{
							backgroundColor: "rgba(255, 255, 255, 0.10)",
							borderRadius: 3,
							paddingTop: 2,
							paddingBottom: 2,
							borderBottom: 0.5,
							borderColor: "rgba(255, 255, 255, 0.25)",
						}}
					>
						<Typography
							sx={{
								width: "80%",
								flexShrink: 0,
								fontFamily: "Inter ,sans-serif",
								fontSize: { xs: 16, sm: 16, md: 18 },
							}}
						>
							Build with AI
						</Typography>
					</AccordionSummary>
					<AccordionDetails>
						<Typography
							sx={{
								fontFamily: "Inter ,sans-serif",
								fontSize: { xs: 16, sm: 16, md: 18 },
							}}
						>
							Augment decision-making processes with AI-powered
							systems that evaluate complex data, assess multiple
							variables, and provide actionable recommendations
							aligned with predefined objectives.
						</Typography>
					</AccordionDetails>
				</Accordion>
				<Accordion
					expanded={expanded === "panel2"}
					onChange={handleChange("panel2", images[1])}
					disableGutters={true}
					sx={{
						backgroundColor: "#110c29",
						color: "white",
					}}
				>
					<AccordionSummary
						expandIcon={<ExpandMoreIcon sx={{ color: "white" }} />}
						aria-controls="panel2bh-content"
						id="panel2bh-header"
						sx={{
							backgroundColor: "rgba(255, 255, 255, 0.10)",
							borderRadius: 3,
							paddingTop: 2,
							paddingBottom: 2,
							borderBottom: 0.5,
							borderColor: "rgba(255, 255, 255, 0.25)",
						}}
					>
						<Typography
							sx={{
								width: "80%",
								flexShrink: 0,
								fontFamily: "Inter ,sans-serif",
								fontSize: { xs: 16, sm: 16, md: 18 },
							}}
						>
							Plan with AI
						</Typography>
					</AccordionSummary>
					<AccordionDetails>
						<Typography
							sx={{
								fontFamily: "Inter ,sans-serif",
								fontSize: { xs: 16, sm: 16, md: 18 },
							}}
						>
							Gain a competitive edge by incorporating AI-driven
							predictive analytics to forecast future trends,
							identify risks, and uncover hidden opportunities
							within your data.
						</Typography>
					</AccordionDetails>
				</Accordion>
				<Accordion
					sx={{
						backgroundColor: "#110c29",
						color: "white",
					}}
					expanded={expanded === "panel3"}
					onChange={handleChange("panel3", images[2])}
					disableGutters={true}
				>
					<AccordionSummary
						expandIcon={<ExpandMoreIcon sx={{ color: "white" }} />}
						aria-controls="panel3bh-content"
						id="panel3bh-header"
						sx={{
							backgroundColor: "rgba(255, 255, 255, 0.10)",
							borderRadius: 3,
							paddingTop: 2,
							paddingBottom: 2,
							borderBottom: 0.5,
							borderColor: "rgba(255, 255, 255, 0.25)",
						}}
					>
						<Typography
							sx={{
								width: "80%",
								flexShrink: 0,
								fontFamily: "Inter ,sans-serif",
								fontSize: { xs: 16, sm: 16, md: 18 },
							}}
						>
							Unlock Insights with AI
						</Typography>
					</AccordionSummary>
					<AccordionDetails>
						<Typography
							sx={{
								fontFamily: "Inter ,sans-serif",
								fontSize: { xs: 16, sm: 16, md: 18 },
							}}
						>
							Engage in natural language conversations with an AI
							assistant that understands user queries and provides
							personalized insights and recommendations.
						</Typography>
					</AccordionDetails>
				</Accordion>
				<Accordion
					expanded={expanded === "panel4"}
					onChange={handleChange("panel4", images[3])}
					disableGutters={true}
					sx={{
						backgroundColor: "#110c29",
						color: "white",
						boxShadow: "none",
					}}
				>
					<AccordionSummary
						expandIcon={<ExpandMoreIcon sx={{ color: "white" }} />}
						aria-controls="panel4bh-content"
						id="panel4bh-header"
						sx={{
							backgroundColor: "rgba(255, 255, 255, 0.10)",
							borderRadius: 3,
							paddingTop: 2,
							paddingBottom: 2,
							borderBottom: 0.5,
							borderColor: "rgba(255, 255, 255, 0.25)",
						}}
					>
						<Typography
							sx={{
								width: "80%",
								flexShrink: 0,
								fontFamily: "Inter ,sans-serif",
								fontSize: { xs: 16, sm: 16, md: 18 },
							}}
						>
							Visualize with AI
						</Typography>
					</AccordionSummary>
					<AccordionDetails>
						<Typography
							sx={{
								fontFamily: "Inter ,sans-serif",
								fontSize: { xs: 16, sm: 16, md: 18 },
							}}
						>
							Transform data into compelling visualizations with
							AI-powered capabilities that automate chart
							selection, intelligent data encoding, and adaptive
							layout adjustments.
						</Typography>
					</AccordionDetails>
				</Accordion>
				<Accordion
					expanded={expanded === "panel5"}
					onChange={handleChange("panel5", images[4])}
					disableGutters={true}
					sx={{
						backgroundColor: "#110c29",
						color: "white",

						boxShadow: "none",
					}}
				>
					<AccordionSummary
						expandIcon={<ExpandMoreIcon sx={{ color: "white" }} />}
						aria-controls="panel4bh-content"
						id="panel4bh-header"
						sx={{
							backgroundColor: "rgba(255, 255, 255, 0.10)",
							borderRadius: 3,
							paddingTop: 2,
							paddingBottom: 2,
							borderBottom: 0.5,
							borderColor: "rgba(255, 255, 255, 0.25)",
						}}
					>
						<Typography
							sx={{
								width: "65%",
								flexShrink: 0,
								fontFamily: "Inter ,sans-serif",
								fontSize: { xs: 16, sm: 16, md: 18 },
							}}
						>
							Collaborate with AI
						</Typography>
					</AccordionSummary>
					<AccordionDetails>
						<Typography
							sx={{
								fontFamily: "Inter ,sans-serif",
								fontSize: { xs: 16, sm: 16, md: 18 },
							}}
						>
							Streamline workflows and automate processes with
							AI-driven capabilities that minimize manual effort
							in tasks such as data preparation, model deployment,
							and report generation.
						</Typography>
					</AccordionDetails>
				</Accordion>
			</Box>
			<Box sx={{ flex: 1 }}>
				<img
					src={currentImage}
					alt="Accordion Image"
					style={{
						width: "100%",
						height: "auto",
						maxHeight: "510px",
					}}
				/>
			</Box>
		</Box>
	);
}
