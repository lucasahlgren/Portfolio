import React from "react";

const Video = props => {
	return (
		<div className="col-md-10 mx-auto py-4">
			<div className="resp-container">
				<iframe
					title={props.title}
					className="resp-iframe"
					src={props.src}
					frameBorder="0"
					allow="encrypted-media"
					allowFullScreen
				/>
			</div>
		</div>
	);
};
export default Video;
