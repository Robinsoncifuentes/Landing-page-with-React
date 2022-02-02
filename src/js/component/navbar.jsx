import React from "react";
export function NavBar() {
	return (
		<div>
			<nav className="navbar navbar-expand-lg navbar-light bg-dark">
				<div className="container-fluid col-md-12 col-sm-3 ">
					<a className="navbar-brand text-light" href="#">
						Start Bootstrap
					</a>
					<button
						className="navbar-toggler"
						type="button"
						data-bs-toggle="collapse"
						data-bs-target="#navbarNav"
						aria-controls="navbarNav"
						aria-expanded="false"
						aria-label="Toggle navigation">
						<span className="navbar-toggler-icon"></span>
					</button>
					<div
						className="collapse navbar-collapse d-flex flex-row-reverse"
						id="navbarNav">
						<ul className="navbar-nav">
							<li className="nav-item">
								<a
									className="nav-link active text-light"
									aria-current="page"
									href="#">
									Home
								</a>
							</li>
							<li className="nav-item">
								<a className="nav-link text-light" href="#">
									About
								</a>
							</li>
							<li className="nav-item">
								<a className="nav-link text-light" href="#">
									Service
								</a>
							</li>
							<li className="nav-item">
								<a className="nav-link text-light" href="">
									Contact
								</a>
							</li>
						</ul>
					</div>
				</div>
			</nav>
		</div>
	);
}
