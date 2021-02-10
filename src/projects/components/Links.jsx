import React from "react";

const Links = props => {
	return (
		<div className="col-6 pl-md-0 pl-3 col-md-12 p-0">
			<h4>Links</h4>
			<ul className="links-ul">{props.children}</ul>
		</div>
	);
};
export default Links;
