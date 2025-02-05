import React, { useContext } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";
import "../../styles/navbar.css";


export const Navbar = () => {

	const { store, actions } = useContext(Context);

	return (
		<nav className="navbar navbar-light bg-light mb-0">
			<Link to="/">
				<img className="logoStarWars" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRsLx7DhskrlNNHPSLKOKPsvg1LKlRuEDzD9A&s"/>
			</Link>
			<div className="ml-auto">
				
				<div className="dropdown">
					<div className="btn btn-primary dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
					<span>Favorites</span> <span className="bg-secondary text-white" style={{paddingLeft: "4px", paddingRight:"4px"}}>{store.favoritesCharacters.length + store.favoritesPlanets.length}</span>
					</div>
					<ul className="dropdown-menu">
						{store.favoritesCharacters.length > 0 ? (store.favoritesCharacters.map((item, index) => (
						<li
							key={index}
							className="dropdown-item d-flex justify-content-between"> <span>{item}</span>
							<i className="fa-solid fa-trash ps-4" onClick={() => actions.deleteFavorite(item)}></i>
						</li>
						))
					) : (
					<li className="dropdown-item">Empty</li>
				)}

						{store.favoritesPlanets.length > 0 ? (store.favoritesPlanets.map((item, index) => (
						<li
							key={index}
							className="dropdown-item d-flex justify-content-between"> <span>{item}</span>
							<i className="fa-solid fa-trash ps-4" onClick={() => actions.deleteFavoritePlanet(item)}></i>
						</li>
						))
					) : null }
					</ul>
				</div>
			</div>
		</nav>
	);
};
