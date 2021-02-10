import React, { Component } from "react";

// CSS
import "./Project.css";

// Images
import ae from "../../assets/icons/ae.svg";
import ps from "../../assets/icons/ps.svg";
import ai from "../../assets/icons/ai.svg";
import pr from "../../assets/icons/pr.svg";
import sik from "../../assets/mockups/sik_montage.jpg";

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

export default class SIK extends Component {
	componentDidMount = () => {
		window.scrollTo(0, 0);
	};
	render() {
		return (
			<Project>
				<GoogleAnalytics page="/projects/sik" />
				<Helmet>
					<meta charSet="utf-8" />
					<title>SIK</title>
					<link rel="canonical" href="http://lucasahlgren.com/projects/sik" />
				</Helmet>

				<Title
					title="Skillingaryds Innebandyklubb"
					subtitle="Creative work for the local sports team"
				/>

				<Container>
					<Image img={sik} alt="SIK montage" />
					<Section>
						<Text>
							<p>
								In my spare time I help my local sports team Skillingaryds Innebandyklubb with their social media channels, primarily Facebook and Instagram.
								The work includes everything from taking pictures at the games to graphics design and motion graphics. I enjoy it very much as I get the chance to be creative and improve my skills within these areas.
								I see it as a good opportunity to help my former team and have a lot of fun doing it.  
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
							</Tools>
							<Links>
							<Link href="https://www.facebook.com/SkillingarydsIK/">
									Facebook
								</Link>
								<Link href="https://www.instagram.com/sik_herr/">
									Instagram
								</Link>
							</Links>
						</SideBar>
					</Section>
				</Container>
			</Project>
		);
	}
}
