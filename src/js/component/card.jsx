import PropTypes from "prop-types";
import React from "react";
export function Card(props) {
	return (
		<div className="card shadow-sm">
			<img src={props.imgURL} />
			<div className="card-body">
				<p>{props.description}</p>
				<a
					className="btn btn-primary btn-sm d-flex justify-content-center"
					href=""
					role="button">
					{props.buttonLabel}
				</a>
			</div>
		</div>
	);
}
Card.propTypes = {
	description: PropTypes.string,
	buttonLabel: PropTypes.string,
	imgURL: PropTypes.string,
};
