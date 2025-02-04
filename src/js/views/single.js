import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";

export const Single = props => {
	const { store, actions } = useContext(Context);
	const {id} = useParams();
	console.log(id);

	const [description, setDescription] = useState ("");

	useEffect(() => {
		console.log("muestra Characters details")

		fetch(`https://www.swapi.tech/api/people/${id}`)
		.then((response) => response.json())
		.then((data) => setDescription(data.result.properties.hair_color))
		
	},[id])

	
	return (


		<div>
			{/* <h1>{store.character.name}</h1>
			<div>{store.character.description}</div> */}
			<h1>Hola</h1>
			<p>{description}</p>
		
		</div>
	);
};

Single.propTypes = {
	match: PropTypes.object
};
