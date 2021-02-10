import React, { Component } from "react";

// CSS
import "./Project.css";

// Images
import react from "../../assets/icons/react.svg";
import d3 from "../../assets/icons/d3.svg";
import html from "../../assets/icons/html.svg";
import css from "../../assets/icons/css.svg";
import js from "../../assets/icons/js.svg";
import bootstrap from "../../assets/icons/bootstrap.svg";

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
import Video from "../components/Video";
import GoogleAnalytics from "../../components/GoogleAnalytics";

export default class Labtrino extends Component {
	componentDidMount = () => {
		window.scrollTo(0, 0);
	};
	render() {
		return (
			<Project>
				<GoogleAnalytics page="/projects/labtrino" />
				<Helmet>
					<meta charSet="utf-8" />
					<title>Labtrino</title>
					<link
						rel="canonical"
						href="http://lucasahlgren.com/projects/labtrino"
					/>
				</Helmet>

				<Title title="Labtrino" subtitle="Water consumption visualization" />

				<Container>
					<Video
						title="Labtrino demo video"
						src="https://www.youtube.com/embed/zuv5xfDzQe4?rel=0"
					/>
					<Section>
						<Text>
							<p>
								This is a group project from the course Information
								Visualization (DH2321) at KTH. It is a course from the visual
								media track in the interactive media technology
								master. The course covered the information visualization
								pipeline from data structuring to visual mapping, but also topics such as human perception. 
								The course consisted of three practical assignments, two individual projects and one group
								project to dvelve deeper into how to design 
								visualizations to provide insights about the dataset.
							</p>
							<p>
								This project was made in collaboration with startup company
								Labtrino AB, they are developing smart water meter systems for
								residental property owners. This web application was created to
								help property managers in their daily work by providing them a
								set of visualizations to gain insights about water consumption in their properties.
							</p>
							<p>
								I was responsible for setting up the React project for
								development and deployment. I also created some of the
								functionalities within the application e.g. filtering based on dates 
								that updates all the visualizations. At the end I also created the line-chart showing hot
								and cold water consumption.
							</p>
							<p>
								Group members: Lucas Ahlgren, Ibrahim Asfadai, Evelina Hedberg,
								Filippa Bång, Axel Karlsson and{" "}
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
							</Tools>

							<Links>
								<Link href="https://github.com/axol123/iVis19Labtrino">
									Github
								</Link>
								<Link href="https://infovis-838ec.firebaseapp.com">
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
