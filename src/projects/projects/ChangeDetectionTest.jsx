import React, { Component } from "react";

// CSS
import "./Project.css";

// Images
import html from "../../assets/icons/html.svg";
import css from "../../assets/icons/css.svg";
import js from "../../assets/icons/js.svg";
import bootstrap from "../../assets/icons/bootstrap.svg";
import react from "../../assets/icons/react.svg";
import changedetection from "../../assets/exercise.jpg";

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

export default class ChangeDetectionTest extends Component {
	componentDidMount = () => {
		window.scrollTo(0, 0);
	};
	render() {
		return (
			<Project>
				<GoogleAnalytics page="/projects/changedetectiontest" />
				<Helmet>
					<meta charSet="utf-8" />
					<title>Change Detection Test</title>
					<link
						rel="canonical"
						href="http://lucasahlgren.com/projects/changedetectiontest"
					/>
				</Helmet>

				<Title
					title="Change Detection Test"
					subtitle="Color perception test on the web"
				/>

				<Container>
					<Image img={changedetection} alt="Change Detection Test" />
					<Section>
						<Text>
							<p>
								This is a web application created during the course Human
								Perception for Information Technology (DM2350). It is a course
								in the interactive media technology master at KTH (Royal
								Institute of Technology). The course gives an overview of human
								perception with emphasis on vision, hearing and touch and areas
								related to information technology e.g. color, music, speech and
								haptics.
							</p>
							<p>
								This application was created in a group project in the course to
								study how color affects Visual Working Memory (VWM) in User
								Interfaces (UI) on the web. The application consists of five
								change detection tasks with multiple choice questions asking
								what changed between the two layout screens.
							</p>
							<p>
								I was responsible for creating the web application. The
								application was created with React.js and Bootstrap for the UI
								to make it responsive to different screen sizes. The application
								is connected to a Google Form to store the results from the
								test.
							</p>
							<p>
								Group members: Lucas Ahlgren, Angie Melissa Marin Puentes, Erna
								Guðrún Sigurðardóttir and Arjun Menon.
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
								<Link href="https://github.com/lucasahlgren/DM2350-Human-Perception-for-Information-Technology">
									Github
								</Link>
								<Link href="http://change-detection-game.firebaseapp.com">
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
