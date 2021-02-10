import React, { Component } from "react";

// CSS
import "./Project.css";

// Images
import react from "../../assets/icons/react.svg";
import html from "../../assets/icons/html.svg";
import css from "../../assets/icons/css.svg";
import js from "../../assets/icons/js.svg";
import bootstrap from "../../assets/icons/bootstrap.svg";
import portfolio from "../../assets/portfolio.jpg";

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

export default class Portfolio extends Component {
	componentDidMount = () => {
		window.scrollTo(0, 0);
	};
	render() {
		return (
			<Project>
				<GoogleAnalytics page="/projects/portfolio" />
				<Helmet>
					<meta charSet="utf-8" />
					<title>Portfolio</title>
					<link
						rel="canonical"
						href="http://lucasahlgren.com/projects/portfolio"
					/>
				</Helmet>

				<Title title="Portfolio" subtitle="Creating my own website" />

				<Container>
					<Image img={portfolio} alt="Portfolio" />
					<Section>
						<Text>
							<p>
								This is a personal project of mine, to create my own website and
								portfolio. It was a good opportunity for me to practice and broaden my
								skills in web development and web design using the latest
								front-end technologies such as React.js, Bootstrap 4 and Google
								Firebase. For this one I even bought my own web domain and learned how to use it together with Google Firebase. 
								The work is still in progress.
							</p>
						</Text>

						<SideBar>
							<Tools>
								<Tool alt="React.js" img={react}>
									React.js
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
							</Tools>
							<Links>
								<Link href={"https://github.com/lucasahlgren/Portfolio"}>
									Github
								</Link>
							</Links>
						</SideBar>
					</Section>
				</Container>
			</Project>
		);
	}
}
