import React, { Component } from "react";

// CSS
import "./Project.css";

// Images
import d3 from "../../assets/icons/d3.svg";
import html from "../../assets/icons/html.svg";
import css from "../../assets/icons/css.svg";
import js from "../../assets/icons/js.svg";
import bootstrap from "../../assets/icons/bootstrap.svg";
import redux from "../../assets/icons/redux.svg";
import react from "../../assets/icons/react.svg";
import gronsakshjalpen from "../../assets/mockups/gronsakshjalpen_montage.jpg";

// Components
import Title from "../components/Title";
import Helmet from "react-helmet";
import Project from "../components/Project";
import Image from "../components/Image";
import Text from "../components/Text";
import Section from "../components/Section";
import SideBar from "../components/SideBar";
import Tools from "../components/Tools";
import Links from "../components/Links";
import Container from "../components/Container";
import Tool from "../components/Tool";
import Link from "../components/Link";
import GoogleAnalytics from "../../components/GoogleAnalytics";

export default class Gronsakshjalpen extends Component {
	componentDidMount = () => {
		window.scrollTo(0, 0);
	};
	render() {
		return (
			<Project>
				<GoogleAnalytics page="/projects/gronsakshjalpen" />
				<Helmet>
					<meta charSet="utf-8" />
					<title>Grönsakshjälpen</title>
					<link rel="canonical" href="http://lucasahlgren.com/projects/gronsakshjalpen" />
				</Helmet>

				<Title
					title="Grönsakshjälpen"
					subtitle="Environmental sustainability of vegetables"
				/>

				<Container>
					<Image img={gronsakshjalpen} alt="Grönsakshjälpen" />
					<Section>
						<Text>
							<p>
								This is an group project from the Individual Course in Media Technology (DM2905) at KTH. It is a project course formed to let students explore their own interests in the form of a project. 
								We decided to do a project about creating a tool for comparing the environmental impact of different vegetables.
							</p>
							<p>
								We created a tool called Grönsakshjälpen, it is a web application that lets the user learn more about the environmental impact from 21 different vegetables and compare them against each other. 
								Besides environmetal impact data e.g. greenhouse gas emissions, the user can also look up nutrition data and calculate the environmental impact based on per gram of carbohydrates, protein, fat and currency unit (SEK).   
							</p>
							<p>
								I was responsible for setting up the application for development and deployment using React.js, Redux and Google Firebase, I also gathered and processed the data so that it could be used in the application. I also helped to design and create the visualizations and graphics for the application.
							</p>
							<p>
								Group members: Lucas Ahlgren and{" "}
								<a href="https://www.johanneskarlsson.com/">
									Johannes Karlsson
								</a>.
							</p>
						</Text>

						<SideBar>
							<Tools>
							<Tool alt="D3.js" img={d3}>
									D3.js
								</Tool>
								<Tool alt="HTML" img={html}>
									HTML
								</Tool>
								<Tool alt="CSS" img={css}>
									CSS
								</Tool>
								<Tool alt="Bootstrap" img={bootstrap}>
									Bootstrap
								</Tool>
								<Tool alt="JSX" img={js}>
									JSX
								</Tool>
								<Tool alt="React.js" img={react}>
									React.js
								</Tool>
								<Tool alt="Redux" img={redux}>
									Redux
								</Tool>
							</Tools>
							<Links>
								<Link href="https://github.com/johanneskarlsson/veg-o-meter">
									Github
								</Link>
								<Link href="https://gronsakshjalpen.firebaseapp.com/">
									Application
								</Link>
							</Links>
						</SideBar>
					</Section>
				</Container>
			</Project>
		);
	}
}
