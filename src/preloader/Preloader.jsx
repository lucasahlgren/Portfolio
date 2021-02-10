import React, { Component } from "react";

// Images
import { ReactComponent as Logo } from "../assets/lucasahlgren.svg";

// CSS
import "./Preloader.css";

export default class Preloader extends Component {
	constructor(props) {
		super(props);
		this.state = {
			fade: false
		};
	}

	componentWillMount = () => {
		window.setTimeout(this.fadeLoader, 3200);
	};

	fadeLoader = () => {
		this.setState({ fade: true });
	};

	render() {
		return (
			<div id="preloader" data-fadepreloader={this.state.fade}>
				<div className="pre-container fade-in">
					<Logo
						className="row logo-preloader"
						data-fadepreloader={this.state.fade}
					/>
				</div>
			</div>
		);
	}
}
