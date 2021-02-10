import React from "react";

const Tools = props => {
	return (
		<div className="col-6 col-md-12 p-0">
			<h4>Tools</h4>
			<ul className="tool-ul">{props.children}</ul>
		</div>
	);
};
export default Tools;
