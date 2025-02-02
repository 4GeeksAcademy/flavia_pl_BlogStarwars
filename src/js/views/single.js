import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";

export const Single = props => {
	const { store, actions } = useContext(Context);
	const params = useParams();
	const { id } = useParams();

	// useEffect( actions.showCharacterDescription(params.uid),[])


	return (


		<div>
			{/* <h1>{store.character.name}</h1>
			<div>{store.character.description}</div> */}
			<h1>Hola</h1>
		
		</div>
	);
};

Single.propTypes = {
	match: PropTypes.object
};
