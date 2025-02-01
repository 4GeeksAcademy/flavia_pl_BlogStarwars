import React, { useContext } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";
import "../../styles/navbar.css";


export const Navbar = () => {

	const { store, actions } = useContext(Context);

	return (
		<nav className="navbar navbar-light bg-light mb-3">
			<Link to="/">
				<img className="logoStarWars" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRsLx7DhskrlNNHPSLKOKPsvg1LKlRuEDzD9A&s"/>
			</Link>
			<div className="ml-auto">
				
				<div className="dropdown">
					<div className="btn btn-primary dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
					Favorites {store.favoritesCharacters.length}
					</div>
					<ul className="dropdown-menu">
						{store.favoritesCharacters.map((item, index) => {
					return (
						<li
							key={index}
							className="dropdown-item"> {item}
						</li>
					);
				})}
					</ul>
				</div>
				
			</div>
		</nav>
	);
};
