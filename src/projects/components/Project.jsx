import React from "react";

const Project = props => {
	return (
		<section className="project">
			<div className="container">{props.children}</div>
		</section>
	);
};
export default Project;
