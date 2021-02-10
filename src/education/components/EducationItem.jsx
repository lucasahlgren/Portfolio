import React from "react";

const EducationItem = (props) => {
	return (
		<li className={props.class}>
			<div className="timeline-image">
				<img className="img-fluid" src={props.img} alt={props.alt} />
			</div>
			<div className="timeline-panel">
				<div className="timeline-heading">
					<h4 className="dates">{props.dates}</h4>
					<h4>{props.school}</h4>
					<h4>{props.city}</h4>
				</div>
				<div className="timeline-body">
					<p className="text-muted">{props.title}</p>
				</div>
			</div>
		</li>
	);
};

export default EducationItem;
