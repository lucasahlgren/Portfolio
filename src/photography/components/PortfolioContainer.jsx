import React from "react";

const PortfolioContainer = props => {
	return (
		<div className="d-flex row mx-auto justify-content-start m-0 p-0">
			{props.children}
		</div>
	);
};
export default PortfolioContainer;
