import React, { Component } from "react";

// CSS
import "./Project.css";

// Images
import ae from "../../assets/icons/ae.svg";
import pr from "../../assets/icons/pr.svg";

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

export default class MeatOMeter extends Component {
	componentDidMount = () => {
		window.scrollTo(0, 0);
	};
	render() {
		return (
			<Project>
				<GoogleAnalytics page="/projects/meat-o-meter" />
				<Helmet>
					<meta charSet="utf-8" />
					<title>Meat-O-Meter</title>
					<link
						rel="canonical"
						href="http://lucasahlgren.com/projects/meat-o-meter"
					/>
				</Helmet>

				<Title title="Meat-O-Meter" subtitle="Sustainability and meat production" />

				<Container>
					<Video
						title="Meat-O-Meter demo video"
						src="https://www.youtube.com/embed/RBcyiDI2Vnw?rel=0"
					/>
					<Section>
						<Text>
							<p>
								This is a group project from the Advanced Projectcourse in Interactive Media Technology (DM2799) at KTH. 
								In the course we worked with researchers on a sustainbility project called Meat-O-Meter, a project aiming to create a design installation to shed light on the meat production system and its hidden costs.
							</p>
							<p>
								We created a physical design installation based on a medical metaphor where earth is sick (meat sickness) laying on a bed connected to a variant of an ECG-monitor we call ECOG-monitor. 
								The monitor is playing an animation that sheds light on three different aspects of meat production, namely: greenhouse gas emissions, land use and water use. 
								The design of the animation is inpired by a real functional ECG-monitor including waveforms, but adapted for the purpose of the project e.g. by including graphics and graphs to make information process easier and faster for the observer. 
							</p>
							<p>
								I was responsible for creating the animation for the monitor screen. 
								For that purpose I used a motion graphics software called Adobe After Effects and a video editing software called Adobe Premiere Pro.
							</p>
							<p>
								Group members: Lucas Ahlgren, Hedvig Fahlstedt, Patric Hjorth,{" "}
								<a href="https://www.johanneskarlsson.com/">
									Johannes Karlsson
								</a> and Alessandro Salutari. 
							</p>
						</Text>

						<SideBar>
							<Tools>
							<Tool alt="After Effects" img={ae}>
									After Effects
								</Tool>
								<Tool alt="Premiere Pro" img={pr}>
									Premiere Pro
								</Tool>
							</Tools>

							<Links>
								<Link href="https://youtu.be/RBcyiDI2Vnw">
									Video demo
								</Link>
								<Link href="https://youtu.be/f2kIIkuJJZA">
									ECOG animation
								</Link>
							</Links>
						</SideBar>
					</Section>
				</Container>
			</Project>
		);
	}
}
