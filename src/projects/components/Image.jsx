import React from "react";

const Image = props => {
	return (
		<div className="col-md-10 mx-auto py-4">
			<img src={props.img} alt={props.alt} className="img-fluid" />
		</div>
	);
};

export default Image;
