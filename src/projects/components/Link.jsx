import React from "react";

const Link = props => {
	return (
		<li>
			<a href={props.href}>{props.children}</a>
		</li>
	);
};
export default Link;
