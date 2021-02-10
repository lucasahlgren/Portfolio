import React, { Component } from "react";

// CSS
import "./Education.css";

// Images
import kth from "../assets/kth.jpg";
import jkpg from "../assets/jkpg.jpg";
import fenix from "../assets/fenix.jpg";
import linnaeus from "../assets/linnaeus.jpg";

// Components
import TopBar from "../components/TopBar";
import Helmet from "react-helmet";
import EducationItem from "./components/EducationItem";
import GoogleAnalytics from "../components/GoogleAnalytics";

export default class Education extends Component {
	componentDidMount = () => {
		window.scrollTo(0, 0);
	};
	render() {
		return (
			<section id="education">
				<div className="container">
				<GoogleAnalytics page="/education" />
				<Helmet>
					<meta charSet="utf-8" />
					<title>Education</title>
					<meta
						name="keywords"
						content="Lucas Ahlgren,education,kth,portfolio,engineer,media technology,student"
					/>
					<link rel="canonical" href="http://lucasahlgren.com/eduaction" />
				</Helmet>
				<TopBar title="Education" />

				<div className="main-container">
						<div className="row px-2">
							<div className="col-md-12 col-sm-10 mx-auto">
								<ul className="timeline">
									<EducationItem
										img={kth}
										alt="KTH logo"
										title="Degree Programme in Media Technology (Civilingenjör i Medieteknik)"
										school="Royal Institute of Technology"
										city="Stockholm"
										dates="2015-2020"
										class="timeline-inverted"
									>
										I have a bachelor of science in interactive media technology
										and are currently pursuing my master's degree in interactive
										media technology with a specialisation in visual media
										technology.
									</EducationItem>

									<EducationItem
										img={linnaeus}
										alt="Linnaeus University logo"
										title="Web design (15 credits)"
										school="Linnaeus University"
										city="Växjö"
										dates="2015"
										class="timeline-inverted"
									>
										In 2015 I took a distance learning course in web design
										covering design (HTML/XHTML, CSS, XML, DTD and RSS),
										programming (JavaScript) and an introduction to internet and
										WWW (protocols, standards, history and trends).
									</EducationItem>

									<EducationItem
										img={jkpg}
										alt="Jönköping University logo"
										title="Video Editing and Video Production (7.5 credits) and Video Editing in After Effects (7.5 credits)"
										school="Jönköping University"
										city="Jönköping"
										dates="2013-2014"
										class="timeline-inverted"
									>
										Between 2013 and 2014 I took two courses at Jönköping
										University. Video Editing and Video Production (7.5 credits)
										and Video Editing in After Effects (7.5 credits).
									</EducationItem>

									<EducationItem
										img={fenix}
										alt="Fenix High school logo"
										title="Natural science programme (Naturvetenskap)"
										school="Fenix Kunskapscentrum"
										city="Vaggeryd"
										dates="2009-2012"
										class="timeline-inverted"
									>
										In highschool I took the natural science programme with a
										specialization in natural science.
									</EducationItem>
								</ul>
							</div>
						</div>
					</div>
				
				</div>
			</section>
		);
	}
}
