import React from "react";

// CSS
import "./TopBar.css";

const TopBar = props => {
	return (
		<div className="top-bar">
			<h1>{props.title}</h1>
		</div>
	);
};

export default TopBar;
