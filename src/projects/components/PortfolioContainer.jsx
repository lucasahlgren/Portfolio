import React from "react";

const PortfolioContainer = props => {
	return (
		<div className="d-flex justify-content-start flex-wrap m-0 p-0">
			{props.children}
		</div>
	);
};
export default PortfolioContainer;
