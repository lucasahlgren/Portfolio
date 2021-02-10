import React, { Component } from "react";

// CSS
import "./Project.css";

// Images
import d3 from "../../assets/icons/d3.svg";
import html from "../../assets/icons/html.svg";
import css from "../../assets/icons/css.svg";
import js from "../../assets/icons/js.svg";
import bootstrap from "../../assets/icons/bootstrap.svg";
import jquery from "../../assets/icons/jquery.svg";
import infoviz from "../../assets/infoviz.jpg";

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

export default class Infovis extends Component {
	componentDidMount = () => {
		window.scrollTo(0, 0);
	};
	render() {
		return (
			<Project>
				<GoogleAnalytics page="/projects/wvs" />
				<Helmet>
					<meta charSet="utf-8" />
					<title>World Values Survey Visualization</title>
					<link rel="canonical" href="http://lucasahlgren.com/projects/wvs" />
				</Helmet>

				<Title
					title="World Values Survey"
					subtitle="Information visualization"
				/>

				<Container>
					<Image img={infoviz} alt="Labtrino visualization" />
					<Section>
						<Text>
							<p>
								This is an individual project from the course Information
								Visualization (DH2321) at KTH. It is a course from the visual
								media track in the interactive media technology
								master. The course covered the information visualization
								pipeline from data structuring to visual mapping, but also topics such as human perception. 
								The course consisted of three practical assignments, two individual projects and one group
								project to dvelve deeper into how to design 
								visualizations to provide insights about the dataset.
							</p>
							<p>
								In this project I created a
								visualization with data from the World Values Survey and
								Gapminder. It is based on data about what people
								think is important in life e.g. religion, work, family etc. Each
								category is encoded with a color that helps to separate the
								categories from each other, but also to get an idea of what category is currently on the
								screen. When a new category is selected the fill color for each country updates to visualize the percentage of people thinking that
								cateogry is important for the chosen time period. A more
								saturated color indicates a higher percentage of people
								thinking that category is important. The idea behind the design of
								the visualization is to make use of preattentive features such
								as color, position and size to help the user gain insights about
								the dataset faster and easier.
							</p>
							<p>
								The application is designed for desktops and works best in Google Chrome or Mozilla Firefox. Feel free to check it
								out via the link.
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
								<Tool alt="JavaScript" img={js}>
									JavaScript
								</Tool>
								<Tool alt="jQuery" img={jquery}>
									jQuery
								</Tool>
							</Tools>
							<Links>
								<Link href="https://github.com/lucasahlgren/DH2321-Information-Visualization/tree/master/project2">
									Github
								</Link>
								<Link href="https://ivis19project2.firebaseapp.com/">
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
