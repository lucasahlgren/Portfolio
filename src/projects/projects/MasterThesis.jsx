import React, { Component } from "react";

// CSS
import "./Project.css";

// Images
import d3 from "../../assets/icons/d3.svg";
import html from "../../assets/icons/html.svg";
import css from "../../assets/icons/css.svg";
import js from "../../assets/icons/js.svg";
import bootstrap from "../../assets/icons/bootstrap.svg";
import redux from "../../assets/icons/redux.svg";
import react from "../../assets/icons/react.svg";
import tcokalkylatorn from "../../assets/mockups/tco-kalkylatorn_montage.jpg";

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

export default class Gronsakshjalpen extends Component {
	componentDidMount = () => {
		window.scrollTo(0, 0);
	};
	render() {
		return (
			<Project>
				<GoogleAnalytics page="/projects/masterthesis" />
				<Helmet>
					<meta charSet="utf-8" />
					<title>Grönsakshjälpen</title>
					<link rel="canonical" href="http://lucasahlgren.com/projects/masterthesis" />
				</Helmet>
				
				

				<Title
					title="Total cost of ownership as a tool for the public"
					subtitle="Degree project/master thesis"
				/>
				
				<Container>
					<Image img={tcokalkylatorn} alt="TCO-kalkylatorn" />
					<Section>
						<Text>
							<p>
								Sustainability and the role of battery electric vehicles (BEVs) in the shift to more sustainable transportation are gaining more and more attention in society today. However, only 4.3% of new passenger car registrations in Sweden were BEVs in 2019. High purchase prices are considered a major barrier to BEV purchases. But the purchase price alone does not reflect what the consumer pays for owning a vehicle. Previous research shows that BEVs could be cheaper compared to conventional vehicles such as internal combustion engine vehicles (ICEVs) from a Total Cost of Ownership (TCO) perspective. Lack of knowledge about TCO can lead to uneconomical purchase decisions. Moreover, lower adoption rates of BEVs, although BEVs can be more cost-effective and better for the environment in the long run.
							</p>
							<p>
								This paper reports on an exploratory research process including the development and user study of a TCO tool aimed for the public. The purpose is to better understand how a TCO tool influences peoples’ inclination towards purchasing a BEV. Based on an iterative design process, a web application was developed to help car consumers calculate and visualize TCO of new passenger cars. The web application was then used in a user study consisting of think-aloud evaluations and semi-structured interviews with car consumers about the prototype.
							</p>
							<p>
								The conclusion point towards an interesting direction for a TCO tool moving forward. This study suggests that a TCO tool can make users aware of the cost benefits of owning a BEV. However, more research is needed to understand if this realisation is enough to have an effect on BEV purchases.
							</p>
						</Text>
						<SideBar>
							<Tools>
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
								<Tool alt="React.js" img={react}>
									React.js
								</Tool>
								<Tool alt="Redux" img={redux}>
									Redux
								</Tool>
							</Tools>
							<Links>
								<Link href="https://tco-kalkylatorn.firebaseapp.com/">
									Application
								</Link>
								<Link href="https://kth.diva-portal.org/smash/record.jsf?pid=diva2:1466823">
									PDF
								</Link>
							</Links>
						</SideBar>
					</Section>
				</Container>
			</Project>
		);
	}
}
