import React, { Component } from "react";

// CSS
import "./Project.css";

// Images
import onsen from "../../assets/icons/onsen.png";
import evothings from "../../assets/icons/evothings.png";
import html from "../../assets/icons/html.svg";
import css from "../../assets/icons/css.svg";
import js from "../../assets/icons/js.svg";
import apachecordova from "../../assets/icons/apachecordova.png";
import shapping from "../../assets/mockups/shapping_montage.jpg";

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

export default class Shapping extends Component {
	componentDidMount = () => {
		window.scrollTo(0, 0);
	};
	render() {
		return (
			<Project>
				<GoogleAnalytics page="/projects/shapping" />
				<Helmet>
					<meta charSet="utf-8" />
					<title>shAPPing</title>
					<link
						rel="canonical"
						href="http://lucasahlgren.com/projects/shapping"
					/>
				</Helmet>

				<Title title="Shapping" subtitle="Shopping with Bluetooth Beacons" />

				<Container>
					<Image img={shapping} alt="Shapping montage" />
					<Section>
						<Text>
							<p>
								shAPPing is a hybrid mobile app developed in a group project
								during the course Mobile Development with Web Technologies
								(DM2518). A hybrid app differs from a traditional web app or
								native mobile app in the sense that it uses web technologies in
								a native app shell to be able to access native app features
								(e.g. bluetooth and gps). It is useful since you can develop
								both the web apps and mobile apps using only web technologies.
								The course consisted of four labs and one group project. The
								labs covered different techniques to build and access different
								features on your smartphone. This includes: Google maps API,
								Bluetooth beacons, visualizing sensor data and Message Queuing
								Telemetry Transport (MQTT).
							</p>
							<p>
								shAPPing is a mobile shopping app, it uses a smartphone's
								Bluetooth feature to scan product in the store using Bluetooth
								beacons. The app is developed using the following technologies:
								HTML, CSS, JavaScript, Onsen UI, Apache Cordova, Firebase and
								Evothings. The application is connected to a database on
								Firebase to access information about products in the store as
								well as customer information (account details). Apache Cordova
								is the framework we used to create the hybrid application in
								Evothings Studio.
							</p>
							<p>
								I was responsible for: the login page including the login
								functionality with firebase and the checkout page.
							</p>
							<p>
								Group members: Lucas Ahlgren, Patric Hjorth, Evelina Hedberg,
								Joel Weidenmark and Filip Stål.
							</p>
						</Text>

						<SideBar>
							<Tools>
								<Tool alt="Apache Cordova" img={apachecordova}>
									Apache Cordova
								</Tool>
								<Tool alt="Onsen UI" img={onsen}>
									Onsen UI
								</Tool>
								<Tool alt="Evothings" img={evothings}>
									Evothings
								</Tool>
								<Tool alt="HTML" img={html}>
									HTML
								</Tool>
								<Tool alt="CSS" img={css}>
									CSS
								</Tool>
								<Tool alt="JavaScript" img={js}>
									JavaScript
								</Tool>
							</Tools>
							<Links>
								<Link href="https://github.com/lucasahlgren/DM2518-Mobile-Development-with-Web-Technologies/tree/master/app">
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
