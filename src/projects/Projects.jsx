import React from "react";

// CSS
import "./Projects.css";

// Images
import labtrino from "../assets/mockups/labtrino.jpg";
import mixar from "../assets/mockups/mixar.jpg";
import perception from "../assets/mockups/perception.jpg";
import infoviz from "../assets/mockups/infoviz.jpg";
import portfolio from "../assets/mockups/portfolio.jpg";
import hu from "../assets/mockups/holodrone.jpg";
import sik from "../assets/mockups/sik.jpg";
import shapping from "../assets/mockups/shapping.jpg";
import snowballwar from "../assets/mockups/snowball_war.jpg";
import meatometer from "../assets/mockups/meatometer.jpg";
import gronsakshjalpen from "../assets/mockups/gronsakshjalpen.jpg";
import tcokalkylatorn from "../assets/mockups/tco-kalkylatorn.jpg";

// Components
import TopBar from "../components/TopBar";
import PortfolioContainer from "./components/PortfolioContainer";
import ProjectThumbnail from "./components/ProjectThumbnail";
import Helmet from "react-helmet";
import GoogleAnalytics from "../components/GoogleAnalytics";

export default class Projects extends React.Component {
	componentDidMount = () => {
		window.scrollTo(0, 0);
	};
	render() {
		return (
			<section id="projects">
				<div className="container">
				<GoogleAnalytics page="/projects" />
				<Helmet>
					<meta charSet="utf-8" />
					<title>Projects</title>
					<meta name="description" content="Here is a list of projects I have done or been involved in over the years, both personal projects and school projects." />
					<meta name="keywords" content="Lucas Ahlgren, projects, kth, portfolio, engineer, media technology, student, game, web, design" />
					<link rel="canonical" href="http://lucasahlgren.com/projects" />
				</Helmet>
				<TopBar title="Projects" />
				<div className="main-container">
				<PortfolioContainer>
					<ProjectThumbnail imgsrc={infoviz} title="World Values Survey visualization" alt="World Values Survey visualization" link="/projects/wvs" description="Web application" />
					<ProjectThumbnail imgsrc={snowballwar} title="Snowball War" alt="Snowball War" link="/projects/snowballwar" description="Multiplayer game" />
					<ProjectThumbnail imgsrc={tcokalkylatorn} title="Total cost of ownership as a tool for the public" alt="Master thesis" link="/projects/masterthesis" description="Degree project/Master thesis" />
					<ProjectThumbnail imgsrc={portfolio} title="Portfolio" alt="Portfolio" link="/projects/portfolio" description="Web/Design" />
					<ProjectThumbnail imgsrc={labtrino} title="Water consumption visualization" alt="Labtrino" link="/projects/labtrino" description="Web application" />
					<ProjectThumbnail imgsrc={meatometer} title="Meat-O-Meter" alt="Meat-O-Meter" link="/projects/meat-o-meter" description="Design installation" />
					<ProjectThumbnail imgsrc={sik} title="Skillingaryds Innebandyklubb" alt="Skillingaryds Innebandyklubb" link="/projects/sik" description="Design" />
					<ProjectThumbnail imgsrc={gronsakshjalpen} title="Grönsakshjälpen" alt="Grönsakshjälpen" link="/projects/gronsakshjalpen" description="Web application" />
					<ProjectThumbnail imgsrc={mixar} title="MixAR" alt="MixAR" link="/projects/mixar" description="Augmented reality" />
					<ProjectThumbnail imgsrc={perception} title="Change Detection Test" alt="Change Detection Test" link="/projects/changedetectiontest" description="Web application" />
					<ProjectThumbnail imgsrc={shapping} title="shAPPing" alt="shAPPing" link="/projects/shapping" description="Hybrid application" />
					<ProjectThumbnail imgsrc={hu} title="Project HU" alt="Project HU" link="/projects/hu" description="Design" />
				</PortfolioContainer>
				</div>
				</div>
			</section>
		);
	}
}
