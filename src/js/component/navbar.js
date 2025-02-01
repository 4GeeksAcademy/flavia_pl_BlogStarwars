import React from "react";
import { Link } from "react-router-dom";
import "../../styles/navbar.css";

export const Navbar = () => {
	return (
		<nav className="navbar navbar-light bg-light mb-3">
			<Link to="/">
				<img className="logoStarWars" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRsLx7DhskrlNNHPSLKOKPsvg1LKlRuEDzD9A&s"/>
			</Link>
			<div className="ml-auto">
				<Link to="/demo">
					<div className="dropdown">
						<div className="btn btn-primary dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
						Favorites
						</div>
						<ul className="dropdown-menu">
							{/* <li><a className="dropdown-item" href="#">Action</a></li>        qui va un array di preferiti  --> map??
							<li><a className="dropdown-item" href="#">Another action</a></li>
							<li><a className="dropdown-item" href="#">Something else here</a></li> */}
						</ul>
					</div>
				</Link>
			</div>
		</nav>
	);
};
