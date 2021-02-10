import React, { Component } from "react";

// CSS
import "./Project.css";

// Images
import ae from "../../assets/icons/ae.svg";
import ps from "../../assets/icons/ps.svg";
import ai from "../../assets/icons/ai.svg";
import pr from "../../assets/icons/pr.svg";
import c4d from "../../assets/icons/c4d.png";

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

export default class Hu extends Component {
	componentDidMount = () => {
		window.scrollTo(0, 0);
	};
	render() {
		return (
			<Project>
				<GoogleAnalytics page="/projects/hu" />
				<Helmet>
					<meta charSet="utf-8" />
					<title>HU</title>
					<link rel="canonical" href="http://lucasahlgren.com/projects/hu" />
				</Helmet>

				<Title
					title="Project HU"
					subtitle="A utopian drone technology for paralyzed people"
				/>

				<Container>
					<Video
						title="HU videos"
						src="https://www.youtube.com/embed/videoseries?list=PL7JqV0F2thxgFPJTKaOXYGcY_zeAX9IWW"
					/>
					<Section>
						<Text>
							<p>
								This is a group project from the course Reflective design
								process (AD1RD1) at KTH. It is a course that focuses on the
								design process including how to deal with problems and
								challenges, how to defend your design choices and decisions and
								how to create effective teams.
							</p>
							<p>
								Project HU is the end result of the group project in the course.
								In the project we were supposed to design something to support
								social inclusion in the year of 2050. Project HU is a utopian
								drone technology meant to help paralyzed people come back to
								their everyday lives. The user wears a helmet that controlls a
								drone that creates a projection of the user in the real world.
								The drone is equiped with cameras and microphones to help the
								user interact with other people.
							</p>
							<p>
								I was responsible for designing the prototype and creating the
								video demo. During the course I also created a couple of
								illustrations for presentations and the project report. I
								created the video demo in Adobe Premiere Pro and used Adobe
								After Effects to create the motion graphics. All the
								illustrations in the video was created by Sabina Nordell and the
								voice over track was recorded by Oscar Wiigh. The 3D-model of
								the drone and the helmet was designed and created in Cinema 4D
								Lite.
							</p>
							<p>
								Group members: Lucas Ahlgren, Diba Vosta, Oscar Wiigh, Sabina
								Nordell, Emma Olsson and Carl Rosengren.
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
								<Tool alt="Photoshop" img={ps}>
									Photoshop
								</Tool>
								<Tool alt="Illustrator" img={ai}>
									Illustrator
								</Tool>
								<Tool alt="Cinema 4D" img={c4d}>
									Cinema 4D
								</Tool>
							</Tools>
							<Links>
								<Link href="https://www.youtube.com/watch?v=eFbTyrgZE2g&list=PL7JqV0F2thxgFPJTKaOXYGcY_zeAX9IWW">
									Video demo
								</Link>
							</Links>
						</SideBar>
					</Section>
				</Container>
			</Project>
		);
	}
}
