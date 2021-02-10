import React from "react";

const Title = props => {
	return (
		<div className="top-bar">
			<h1>{props.title}</h1>
			<h2 className="pink">{props.subtitle}</h2>
		</div>
	);
};
export default Title;
