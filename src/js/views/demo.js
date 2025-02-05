import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";

import { Context } from "../store/appContext";

import "../../styles/demo.css";
import Card from "./card";
import CardPlanets from "./cardPlanets";

export const Demo = () => {
	const { store, actions } = useContext(Context);

// 	const [characters, setCharacters] = useState([
// 		{ 					
// 		Gender: "FIRST",
// 		HairColor: "white",          
// 		EyeColor: "hhh"
// 	}
// ])


	return (
			<>
				<div className="container">
					<h1 className="text-danger pb-4 pt-2 fw-semibold">Characters</h1>
					<ul className="list-group d-flex flex-row flex-wrap gap-3">
						{store.characters.map((item, index) => (
							<li key={index} className="card" style={{ width: "18rem" }}>
								<Card item={item} />
							</li>
						))}
					</ul>
	
					<h1 className="text-danger pb-4 pt-2 fw-semibold mt-5">Planets</h1>
					<ul className="planets list-group d-flex flex-row flex-wrap gap-3">
						{store.planets.map((item, index) => (
							<li key={index} className="cardPlanets" style={{ width: "18rem" }}>
								<CardPlanets item={item} />
							</li>
						))}
					</ul>
				</div>
			</>
		);
	};
		