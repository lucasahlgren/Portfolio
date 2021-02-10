import React, { Component } from "react";
import { Switch, Route, withRouter, Redirect } from "react-router-dom";
import { TransitionGroup, CSSTransition } from "react-transition-group";

// CSS
import "./css/style.css";

// Google Analytics
import ReactGA from "react-ga";

// Components
import Projects from "./projects/Projects";
import Education from "./education/Education";
import About from "./about/About";
import Header from "./header/Header";
import Home from "./home/Home";
import Preloader from "./preloader/Preloader";
import Photography from "./photography/Photography";
import Portfolio from "./projects/projects/Portfolio";
import Infoviz from "./projects/projects/Infoviz";
import SIK from "./projects/projects/SIK";
import Shapping from "./projects/projects/Shapping";
import SnowballWar from "./projects/projects/SnowballWar";
import Mixar from "./projects/projects/Mixar";
import Hu from "./projects/projects/Hu";
import ChangeDetectionTest from "./projects/projects/ChangeDetectionTest";
import Labtrino from "./projects/projects/Labtrino";
import Footer from "./footer/Footer";
import MeatOMeter from "./projects/projects/MeatOMeter";
import Gronsakshjalpen from "./projects/projects/Gronsakshjalpen";
import MasterThesis from "./projects/projects/MasterThesis";

class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			fade: false
		};
	}

	componentWillMount = () => {
		window.setTimeout(this.fadeLoader, 5000);
	};

	fadeLoader = () => {
		this.setState({ fade: true });
	};

	componentDidMount = () => {
		this.initializeReactGA();
	};

	initializeReactGA = () => {
		ReactGA.initialize("UA-130615050-1");
		ReactGA.pageview("/");
	};

	render() {
		var preloader = !this.state.fade ? <Preloader /> : null;
		var isHome = this.props.location.pathname === "/" ? true : false;

		return (
			<div className="app">
				<div className="section-bg">
					{preloader}
					<Header home={isHome} />
					<TransitionGroup className="transition-group">
						<CSSTransition
							key={this.props.location.pathname}
							timeout={{ enter: 300, exit: 300 }}
							classNames="fade">
							<section className="route-section">
								<Switch location={this.props.location}>
									<Route exact path="/" component={Home} />
									<Route exact path="/about" component={About} />
									<Route exact path="/projects" component={Projects} />
									<Route exact path="/education" component={Education} />
									<Route exact path="/photography" component={Photography} />
									<Route exact path="/projects/wvs" component={Infoviz} />
									<Route exact path="/projects/mixar" component={Mixar} />
									<Route exact path="/projects/hu" component={Hu} />
									<Route exact path="/projects/meat-o-meter" component={MeatOMeter} />
									<Route exact path="/projects/gronsakshjalpen" component={Gronsakshjalpen} />
									<Route exact path="/projects/masterthesis" component={MasterThesis} />
									<Route
										exact
										path="/projects/changedetectiontest"
										component={ChangeDetectionTest}
									/>
									<Route exact path="/projects/labtrino" component={Labtrino} />
									<Route
										exact
										path="/projects/portfolio"
										component={Portfolio}
									/>
									<Route exact path="/projects/sik" component={SIK} />
									<Route exact path="/projects/shapping" component={Shapping} />
									<Route
										exact
										path="/projects/snowballwar"
										component={SnowballWar}
									/>
									<Route
										component={() => {
											return <Redirect to="/" />;
										}}
									/>
								</Switch>
								<Footer />
							</section>
						</CSSTransition>
					</TransitionGroup>
				</div>
			</div>
		);
	}
}

export default withRouter(App);
