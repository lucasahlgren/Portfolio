import React, { Component } from "react";

// CSS
import "./Home.css";

// Components
import Helmet from "react-helmet";
import GoogleAnalytics from "../components/GoogleAnalytics";

export default class Home extends Component {
	componentDidMount = () => {
		window.scrollTo(0, 0);
	};
	render() {
		return (
			<section id="home" className="container-fluid p-0">
				<GoogleAnalytics page="/" />
				<Helmet>
					<meta charSet="utf-8" />
					<title>Lucas Ahlgren</title>
					<meta
						name="description"
						content="Lucas Ahlgren | Portfolio | Media technology student from the Royal Institute of Technology (KTH) in Stockholm, Sweden."
					/>
					<meta
						name="keywords"
						content="Lucas Ahlgren,portfolio,kth,engineer,media technology,student,royal institute of technology,hemsida"
					/>
					<link rel="canonical" href="http://lucasahlgren.com/" />
				</Helmet>
				<div className="container profile height-100 align-items-center d-flex">
					<div className="row home-content col-lg-11 mx-auto">
						<div className="col-lg-5 col-md-7 col-sm-10 mx-auto p-0">
							<h2 className="centered-text white">MEDIA ENGINEER</h2>
						</div>
						<div className="col-lg-7 order-first align-items-center d-flex">
							<div className="text">
								<h1 className="text1">Hey I'm a</h1>
								<h2 className="text2">Media engineer</h2>
							</div>
						</div>
					</div>
				</div>
			</section>
		);
	}
}
