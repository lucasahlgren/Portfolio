import React from "react";

const Tool = props => {
	return (
		<li>
			<img alt={props.alt} src={props.img} className="tech-icon" />
			{props.children}
		</li>
	);
};
export default Tool;
