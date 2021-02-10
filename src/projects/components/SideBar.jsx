import React from "react";

const SideBar = props => {
	return (
		<div className="col-md-2 pt-2 p-md-0">
			<div className="row m-0 p-0 justify-content-around">{props.children}</div>
		</div>
	);
};
export default SideBar;
