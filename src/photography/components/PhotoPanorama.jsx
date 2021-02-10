import React from "react";

const PhotoPanorama = props => {
	return (
		<div className="mb-3">
			<div className="portfolio_item">
				<img src={props.imgsrc} alt={props.alt} className="img-fluid" />
				<div className="portfolio_item_hover">
					<div className="portfolio-border clearfix">
						<div className="item_info p-4">
							<span>{props.title}</span>
							<em>{props.date}</em>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default PhotoPanorama;
