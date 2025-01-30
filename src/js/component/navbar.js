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
					<div class="dropdown">
						<a class="btn btn-primary dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
						Favorites
						</a>
						<ul class="dropdown-menu">
							<li><a class="dropdown-item" href="#">Action</a></li>
							<li><a class="dropdown-item" href="#">Another action</a></li>
							<li><a class="dropdown-item" href="#">Something else here</a></li>
						</ul>
					</div>
				</Link>
			</div>
		</nav>
	);
};
