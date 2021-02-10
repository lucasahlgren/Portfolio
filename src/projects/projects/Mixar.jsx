import React, { Component } from "react";

// CSS
import "./Project.css";

// Images
import unity from "../../assets/icons/unity.png";
import vuforia from "../../assets/icons/vuforia.png";
import android from "../../assets/ionicons/logo-android.svg";

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

export default class Mixar extends Component {
	componentDidMount = () => {
		window.scrollTo(0, 0);
	};
	render() {
		return (
			<Project>
				<GoogleAnalytics page="/projects/mixar" />
				<Helmet>
					<meta charSet="utf-8" />
					<title>MixAR</title>
					<link rel="canonical" href="http://lucasahlgren.com/projects/mixar" />
				</Helmet>

				<Title
					title="MixAR"
					subtitle="AR 3D sound experience"
				/>

				<Container>
					<Video
						title="Mixar demo video"
						src="https://www.youtube.com/embed/ge9gzYqq_Pc?rel=0"
					/>
					<Section>
						<Text>
							<p>
								MixAR is the end result of a group project in the course
								Multimodal Interaction and Interfaces (DT2140). It is a course
								that introduces new interfaces/interactions that can be used in
								human-computer interactions. This includes e.g. gest
								recognition, augmented reality (AR), voice control and haptics.
							</p>
							<p>
								MixAR is a smartphone AR application that allows the user to
								experience spatial 3D sound from musical instruments. The idea
								behind the application is to experience musical instruments in
								AR as if they were there in the physical world. Tangible image
								cards are used to place the AR instruments in the room. Each
								instruments is turned on and off by tapping on the AR intrument
								that appears above the image card. Then if you move around in
								the room will affect how the instruments sound, e.g. the sound
								will appear from the right if the image card is placed to the
								right. Also the distance to the image card will have an effect,
								moving away from the image card will make the instruments play
								quieter. Furthermore the user have the option to select a reverb
								effect to simulate different room acoustics to even further
								enhance the in-room experince of the instruments.
							</p>
							<p>
								I was responsible for: setting up the project including version
								control in Unity, create the image markers for the instruments
								and code (C#) some of the functionalities in application such as
								image marker tracking. At the end I also created the video demo,
								demonstrating how the applications works.
							</p>
							<p>
								Group members: Lucas Ahlgren, Carl Svedhag, Thelma Svenns and
								Gustav Bergman.
							</p>
						</Text>

						<SideBar>
							<Tools>
								<Tool alt="Unity" img={unity}>
									Unity
								</Tool>
								<Tool alt="Vuforia" img={vuforia}>
									Vuforia
								</Tool>
								<Tool alt="Android" img={android}>
									Android
								</Tool>
							</Tools>
							<Links>
								<Link href="https://www.youtube.com/watch?v=ge9gzYqq_Pc">
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
