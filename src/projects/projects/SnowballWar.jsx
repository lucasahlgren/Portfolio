import React, { Component } from "react";

// CSS
import "./Project.css";

// Images
import unity from "../../assets/icons/unity.png";
import snowballwar from "../../assets/mockups/snowball_war_montage.jpg";

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

export default class SnowballWar extends Component {
	componentDidMount = () => {
		window.scrollTo(0, 0);
	};
	render() {
		return (
			<Project>
				<GoogleAnalytics page="/projects/snowballwar" />
				<Helmet>
					<meta charSet="utf-8" />
					<title>Snowball War</title>
					<link
						rel="canonical"
						href="http://lucasahlgren.com/projects/snowballwar"
					/>
				</Helmet>

				<Title title="Snowball War" subtitle="Multiplayer game" />

				<Container>
					<Image img={snowballwar} alt="Snowball War" />
					<Section>
						<Text>
							<p>
								Snowball War is a third-person multiplayer game
								created during the course Computer Graphics and Interaction
								(DH2323) at KTH (It is the first game we have ever created). As
								the name suggests the game is supposed to simulate a snowball
								war. It is based on the popular game game format "Battle Royal" 
								where the main objective is to stay in the game as long as possible. 
								The last surviving player is the winner of the game.
								If you are interested to test it out you can download the game
								(Windows) via the link in the links section.
							</p>
							<p>
								The player is controlled by using the W, A, S and D keys on the
								keyboard, W for moving forward, A for left, S for backward and D
								for right, the player can also jump using the spacebar to avoid
								incoming snowballs or to jump on objects in the terrain. The user throws 
								snowballs using the mouse (recommended) or the trackpad on your laptop.
								Right clicking makes the player pick up a snowball from the ground and left
								clicking subsequently makes the player throw a snowball, the
								longer the user holds down the left mouse key the more force will be
								added to the throw.
							</p>
							<p>
								In order to start a game, one player must create a game session
								(Create game) and other players can join the session using the host's ip
								adress. The host is also the server in the game which means that if
								the host player leaves the game or exits the game will cause the session to stop and 
								the other players will return to the main menu.
							</p>
							<p>
								The game was created using Unity Game Engine and the UNet
								networking API. Game assets such as graphics, 3D models and objects
								in the terrain come from a couple of different resources, mainly
								the Unity Asset Store, but also Adobe Mixamo, Pexels.com and
								Storyblocks.com.
							</p>
							<p>
								I was responsible for implementing the networking parts of the
								game e.g. the game lobby, the game manager (responsible for
								switching states in the game), syncing movements over the network (players and snowballs).
								I also created the graphics and the
								user interface for the menu and the game.
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
								<Tool alt="Unity" img={unity}>
									Unity
								</Tool>
							</Tools>
							<Links>
								<Link
									href={
										"https://drive.google.com/file/d/1a9TSZeFaMiy6t3rX-ybtwwhnpwLOW0-v/view?usp=sharing"
									}
								>
									Download
								</Link>
							</Links>
						</SideBar>
					</Section>
				</Container>
			</Project>
		);
	}
}
