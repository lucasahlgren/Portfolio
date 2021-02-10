import React, { Component } from "react";

// Components
import SocialMedia from "./components/SocialMedia";

// CSS
import "./Footer.css";

export default class Footer extends Component {
	render() {
		return (
			<footer>
				<div className="container-fluid">
					<div className="row justify-content-center">
						<div className="col">
							<SocialMedia size="33px" margin="m-2" />
						</div>
					</div>
                    <div className="row justify-content-center">
					<p className="copyright p-2">© Lucas Ahlgren 2020</p>
                    </div>
				</div>
			</footer>
		);
	}
}
