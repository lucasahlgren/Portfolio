import React from "react";

const FirstColumn = props => {
	return <div className="col-md-4 col-12 p-3 first-column">{props.children}</div>;
};

export default FirstColumn;
