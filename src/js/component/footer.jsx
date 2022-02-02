import PropTypes from "prop-types";
import React from "react";
export function Footer(props) {
	return (
		<div className="card-footer bg-dark d-flex justify-content-center">
			<p className="text-light d-flex justify-content-evenly">
				{props.description}
			</p>
		</div>
	);
}
Footer.propTypes = {
	description: PropTypes.string,
};
