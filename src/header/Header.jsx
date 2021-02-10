import React, { Component } from "react";
import { withRouter } from "react-router-dom";

// Images
import { ReactComponent as Logo } from "../assets/lucasahlgren.svg";

// CSS
import "./Header.css";

import { Link } from "react-router-dom";

class Header extends Component {
	constructor(props) {
		super(props);
		this.state = { menuOpen: false };
	}

	menuOpen = () => {
		const open = this.state.menuOpen;

		this.setState({ menuOpen: !open });
	};

	render() {
		/* Current state */
		const open = this.state.menuOpen;
		const home = this.props.home;

		return (
			<header id="navigation">
				<div data-open={open} className="header">
					<div className="logo-header">
						<Link to="/">
							<Logo
								className="logo"
								data-ishome={home}
								data-isclicked={open}
								alt="Lucas Ahlgren"
							/>
						</Link>
					</div>
					<nav className="desktop-nav">
						<ul className="desktop-nav-list" data-ishome={home}>
							<li className="px-2 mx-2">
								<Link className="nav-link p-0 pb-1" to="/projects">
									Projects
								</Link>
							</li>
							<span>|</span>
							<li className="px-2 mx-2">
								<Link className="nav-link p-0 pb-1" to="/photography">
									Photography
								</Link>
							</li>
							<span>|</span>
							<li className="px-2 mx-2">
								<Link className="nav-link p-0 pb-1" to="/education">
									Education
								</Link>
							</li>
							<span>|</span>
							<li className="px-2 mx-2">
								<Link className="nav-link p-0 pb-1" to="/about">
									About
								</Link>
							</li>
						</ul>
					</nav>

					<div className="menu-trigger" onClick={this.menuOpen}>
						<span
							data-isclicked={open}
							data-ishome={home}
							className="menu-icon"
						/>
					</div>
				</div>

				<nav className="mobile-nav" data-open={open}>
					<ul>
						<li>
							<Link
								className="nav-link p-0 pb-1"
								onClick={this.menuOpen}
								to="/projects"
							>
								Projects
							</Link>
						</li>
						<li>
							<Link
								className="nav-link p-0 pb-1"
								onClick={this.menuOpen}
								to="/photography"
							>
								Photography
							</Link>
						</li>
						<li>
							<Link
								className="nav-link p-0 pb-1"
								onClick={this.menuOpen}
								to="/education"
							>
								Education
							</Link>
						</li>
						<li>
							<Link
								className="nav-link p-0 pb-1"
								onClick={this.menuOpen}
								to="/about"
							>
								About
							</Link>
						</li>
					</ul>
				</nav>
			</header>
		);
	}
}

export default withRouter(Header);
