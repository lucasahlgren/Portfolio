import React from "react";

const Photo = props => {
	return (
		<div className="mb-4">
			<div className="portfolio_item">
				<img src={props.imgsrc} alt={props.alt} className="img-fluid" />
				<div className="portfolio_item_hover">
					<div className="item_info p-4">
						<span>{props.title}</span>
						<em>{props.date}</em>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Photo;
