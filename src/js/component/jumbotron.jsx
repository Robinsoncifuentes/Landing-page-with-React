import PropTypes from "prop-types";
import React from "react";
export function Jumbotron(props) {
	return (
		<div className="p-5 mb-4 bg-light rounded-3">
			<h1 className="display-5 fw-bold">{props.title}</h1>
			<p>{props.description}</p>
			<a
				className="btn btn-primary btn-sm"
				href={props.buttonURL}
				role="button">
				{props.buttonLabel}
			</a>
		</div>
	);
}
Jumbotron.propTypes = {
	title: PropTypes.string,
	description: PropTypes.string,
	buttonLabel: PropTypes.string,
	buttonURL: PropTypes.string,
};
