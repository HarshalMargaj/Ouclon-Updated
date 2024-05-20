import React from "react";
import Navbar from "./components/Section_One/Navbar";
import SectionOne from "./components/Section_One/SectionOne";
import SectionTwo from "./components/Section_Two/SectionTwo";
import SectionThree from "./components/Section_Three/SectionThree";
import SectionFour from "./components/Section_Four/SectionFour";
import SectionFive from "./components/Section_Five/SectionFive";
import SectionSix from "./components/Section_Six/SectionSix";
import SectionSeven from "./components/Section_Seven/SectionSeven";
import Main from "./components/Integrations/main";
import Footer from "./components/Footer";
import "./App.css";
import "./components/Responsive.css";

const App = () => {
	return (
		<div className="main">
			<Navbar />
			<SectionOne />
			<SectionTwo />
			<SectionThree />
			<SectionFour />
			<SectionFive />
			<SectionSix />
			<SectionSeven />
			<Main />
			<Footer />
		</div>
	);
};

export default App;
