import React, { Component } from "react";
// CSS
import "./About.css";

// Images
import profile from "../assets/profile4.jpg";

// Components
import TopBar from "../components/TopBar";
import Helmet from "react-helmet";
import GoogleAnalytics from "../components/GoogleAnalytics";

export default class About extends Component {
	componentDidMount = () => {
		window.scrollTo(0, 0);
	};
	render() {
		return (
			<section id="about">
				<div className="container">
					<GoogleAnalytics page="/about" />
					<Helmet>
						<meta charSet="utf-8" />
						<title>About</title>
						<meta
							name="keywords"
							content="Lucas Ahlgren,about,kth,portfolio,engineer,media technology,student"
						/>
						<link rel="canonical" href="http://lucasahlgren.com/about" />
					</Helmet>
					<TopBar title="About me" />
					<div className="main-container">
						<div className="row px-3 justify-content-center">
							<div className="col-md-4">
								<img src={profile} className="img-fluid" alt="Lucas Ahlgren" />
							</div>
							<div className="col-md-6">
								<h3 className="uppercase mt-3 m-md-0">Hello there!</h3>
								<p>Thank you for visiting my portfolio.</p>
								<p className="justify">
									My name is Lucas Ahlgren and I am an engineering student who
									is studying for a master's degree in interactive media
									technology at the Royal Institute of Technology (KTH) in
									Stockholm, Sweden. I have a passion for visual media and web
									development and spend a lot of time learning these topics not
									just in school, but also in my spare time. I am a creative
									person who likes to express my creative side through
									photography, graphic design and motion graphics. Besides
									photography, my interests are sports and traveling. During my
									teens, I played floorball in division 1 for Skillingaryds
									Innebandyklubb which thought me the importance of teamwork not
									just in sports, but in life in general. Through sports I also
									got the chance to utilize my competitive side as well, I do
									not give up in the first place.
								</p>
								<p className="justify">
									I possess a wide range of skills related to media technology,
									human-computer interaction and user experience (UX). I have
									done projects in web development, interaction design,
									information visualization, AR, sound, video and motion
									graphics. Here are some of the tools and technologies I have
									used in those projects: HTML, CSS, Bootstrap, Javascript,
									jQuery, D3.js, React.js, React Native, JSX, Python, C#, Java,
									Matlab, SQL, XML, PHP, Unity, Vuforia, Github, Adobe XD,
									Photoshop, After Effects, Premiere Pro, Illustrator, Cinema 4D
									etc.
								</p>
								<p className="justify">
									Once again thank you for visiting my portfolio, feel free to
									check out my work and do not hesitate to contact me if you
									want to collaborate or ask a question.
								</p>
								<p>
									Email:{" "}
									<a href="mailto:contact@lucasahlgren.com">
										contact@lucasahlgren.com
									</a>
								</p>
							</div>
						</div>
					</div>
				</div>
			</section>
		);
	}
}
