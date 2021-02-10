import React from "react";
//import { ReactComponent as Facebook } from "../assets/icons/facebook.svg";
import { ReactComponent as Instagram } from "../../assets/icons/instagram.svg";
import { ReactComponent as Linkedin } from "../../assets/icons/linkedin.svg";
import { ReactComponent as Github } from "../../assets/icons/github.svg";
import { ReactComponent as PX500 } from "../../assets/icons/500px.svg";

const SocialMedia = props => {
	return (
		<ul className="social-ul m-0 p-0 d-flex justify-content-center">
			<li className={"box-social " + props.margin}>
				<a href="https://www.linkedin.com/in/lucas-ahlgren-a2750167/">
					<Linkedin
						className="social-media-fill"
						width={props.size}
						height={props.size}
					/>
				</a>
			</li>
			<li className={"box-social " + props.margin}>
				<a href="https://github.com/lucasahlgren">
					<Github
						className="social-media-fill"
						width={props.size}
						height={props.size}
					/>
				</a>
			</li>
			<li className={"box-social " + props.margin}>
				<a href="https://www.instagram.com/lucasahlgren/">
					<Instagram
						className="social-media-fill"
						width={props.size}
						height={props.size}
					/>
				</a>
			</li>
			<li className={"box-social " + props.margin}>
				<a href="https://500px.com/LucasAhlgren">
					<PX500
						className="social-media-fill"
						width={props.size}
						height={props.size}
						fill="black"
					/>
				</a>
			</li>
		</ul>
	);
};

export default SocialMedia;
