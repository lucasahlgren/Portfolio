import React from "react";

// CSS
import "./Photography.css";

// Images
import bullfinch from "../assets/domherre.jpg";
import ballboy from "../assets/isner_ballboy.jpg";
import lens from "../assets/lens.jpg";
import silhouette from "../assets/silhouette.jpg";
import newyork from "../assets/nyskyline.jpg";
import portrait from "../assets/portrait.jpg";
import goalie from "../assets/goalie.jpg";
import floorballgoal from "../assets/floorballgoal.jpg";
import volleygoal from "../assets/volley_goal.jpg";
import celebration from "../assets/celebration.jpg";
import ragnarsson from "../assets/ragnarsson.jpg";
import edvardsson from "../assets/edvardsson.jpg";
import floorballfun from "../assets/floorballfun.jpg";
import floorballshot from "../assets/floorballshot.jpg";
import sunset from "../assets/clearwater_sunset.jpg";
import amish from "../assets/amish.jpg";
import isner from "../assets/isner.jpg";
import ymer from "../assets/ymer.jpg";
import delpotro from "../assets/delpotro.jpg";
import nypanorama from "../assets/newyork_panorama.jpg";
import arlington from "../assets/arlington.jpg";
import cheer from "../assets/cheer.jpg";
import cat from "../assets/cat.jpg";
import babymacaque from "../assets/baby_macaque.jpg";
import lazymacaque from "../assets/lazy_macaque.jpg";
import gibraltarpanorama from "../assets/gibraltar_panorama2.jpg";

// Components
import Photo from "./components/Photo";
import PhotoVerticle from "./components/PhotoVerticle";
import PhotoPanorama from "./components/PhotoPanorama";
import PortfolioContainer from "./components/PortfolioContainer";
import FirstColumn from "./components/FirstColumn";
import SecondColumn from "./components/SecondColumn";
import ThirdColumn from "./components/ThirdColumn";
import TopBar from "../components/TopBar";
import Helmet from "react-helmet";
import GoogleAnalytics from "../components/GoogleAnalytics";

export default class Photography extends React.Component {
	componentDidMount = () => {
		window.scrollTo(0, 0);
	};
	render() {
		return (
			<section id="photography">
				<div className="container">
					<GoogleAnalytics page="/photography" />
					<Helmet>
						<meta charSet="utf-8" />
						<title>Photography</title>
						<meta
							name="description"
							content="I am passionate about photography, it is a great way for me to express my creative side and brings me a lot of joy and satisfaction."
						></meta>
						<meta
							name="keywords"
							content="Lucas Ahlgren, photography,camera, photo, portfolio, engineer, media technology"
						/>
						<link rel="canonical" href="http://lucasahlgren.com/photography" />
					</Helmet>
					<TopBar title="Photography" />
					<div className="main-container">
						<PortfolioContainer>
							<FirstColumn>
								<Photo
									imgsrc={bullfinch}
									title="Bullfinch"
									date="2016-03-26"
									alt="Bullfinch"
								/>
								<Photo
									imgsrc={ballboy}
									title="Stockholm Open Tennis"
									date="2016-10-19"
									alt="Isner and ball boy"
								/>
								<Photo
									imgsrc={celebration}
									title="Goal celebration"
									date="2019-10-26"
									alt="Goal celebration"
								/>
								<Photo
									imgsrc={goalie}
									title="Floorball Goalie"
									date="2019-01-04"
									alt="Floorball goalie"
								/>
								<Photo
									imgsrc={sunset}
									title="Clearwater Beach Sunset"
									date="2018-06-30"
									alt="Clearwater Beach sunset"
								/>
								<Photo
									imgsrc={lazymacaque}
									title="Lazy Macaque"
									date="2019-06-24"
									alt="Lazy macaque"
								/>
								<Photo
									imgsrc={floorballshot}
									title="Shot"
									date="2019-01-04"
									alt="Shot"
								/>
								<Photo
									imgsrc={arlington}
									title="Arlington Cemetery"
									date="2017-06-25"
									alt="Arlington Cemetery panorama"
								/>
								<Photo
									imgsrc={amish}
									title="Amish Auctioneer"
									date="2017-06-23"
									alt="Amish auctioneer"
								/>
							</FirstColumn>
							<SecondColumn>
								<Photo
									imgsrc={newyork}
									title="New York Skyline"
									date="2015-06-30"
									alt="New York skyline"
								/>
								<Photo
									imgsrc={lens}
									title="RGB Lens"
									date="2015-09-10"
									alt="RGB Lens"
								/>
								<Photo
									imgsrc={cat}
									title="Devon Rex"
									date="2017-05-26"
									alt="Devon Rex portrait"
								/>
								<Photo
									imgsrc={volleygoal}
									title="Volley goal"
									date="2019-10-26"
									alt="Volley goal"
								/>
								<Photo
									imgsrc={isner}
									title="John Isner"
									date="2016-10-19"
									alt="John Isner"
								/>
								<Photo
									imgsrc={gibraltarpanorama}
									title="Rock of Gibraltar"
									date="2019-06-24"
									alt="Rock of Gibraltar"
								/>
								<Photo
									imgsrc={ragnarsson}
									title="Jonas Ragnarsson"
									date="2019-10-26"
									alt="Jonas Ragnarsson"
								/>
								<Photo
									imgsrc={cheer}
									title="Cheerleading Stunt"
									date="2018-03-11"
									alt="Cheerleading Stunt"
								/>
								<Photo
									imgsrc={floorballfun}
									title="Surprising goal"
									date="2019-01-04"
									alt="Surprising goal"
								/>
							</SecondColumn>
							<ThirdColumn>
								<Photo
									imgsrc={babymacaque}
									title="Baby Macaque"
									date="2019-06-24"
									alt="Baby macaque"
								/>
								<Photo
									imgsrc={portrait}
									title="Autumn Portrait"
									date="2015-10-10"
									alt="Autumn portrait"
								/>
								<Photo
									imgsrc={nypanorama}
									title="New York"
									date="2015-06-30"
									alt="New York panorama"
								/>
								<Photo
									imgsrc={edvardsson}
									title="Simon Edvardsson"
									date="2019-10-26"
									alt="Simon Edvardsson"
								/>
								<Photo
									imgsrc={silhouette}
									title="Clearwater Beach B&amp;W "
									date="2018-06-30"
									alt="Cleawater beach B&amp;W"
								/>
								<Photo
									imgsrc={delpotro}
									title="Juan Martin Del Potro"
									date="2016-10-19"
									alt="Juan Martin Del Potro"
								/>
								<Photo
									imgsrc={floorballgoal}
									title="Goal"
									date="2019-01-04"
									alt="Goal"
								/>
								<Photo
									imgsrc={ymer}
									title="Mikael Ymer"
									date="2016-10-19"
									alt="Mikael Ymer"
								/>
							</ThirdColumn>
						</PortfolioContainer>
					</div>
				</div>
			</section>
		);
	}
}
