import React, {useContext } from "react";
import { Context } from "../store/appContext";

import Favorites from "./favorites";
// import { Single } from "./single";
import { Link } from "react-router-dom";

const Card = (props) => {

        const { store, actions } = useContext(Context);
        const id = props.item.url.replace("https://swapi.dev/api/people/","").replace("/","")
        console.log(id);
        
       const inFavorite = store.favoritesCharacters.includes(props.item.name)
    return (
        <div>
            <img src={`https://starwars-visualguide.com/assets/img/characters/${id}.jpg`} className="card-img-top" alt="..."/>
            <div className="card-body">
                <h5 className="card-title">{props.item.name}</h5>
                <p className="card-text">Gender: {props.item.gender}</p>
                <p className="card-text">Hair: {props.item.hair_color}</p>
                <p className="card-text">Eye-Color: {props.item.eye_color}</p>
                {/* <p className="card-text">id: {props.item.url.replace("https://swapi.dev/api/people/","").replace("/","")}</p> */}
                {/* <p className="card-text">id: {props.item.url.replace("https://swapi.dev/api/people/","").replace("/","")}</p> */}
                <div className="d-flex">
                    <Link to={`/single/${props.item.url.replace("https://swapi.dev/api/people/","").replace("/","")}`}>
                        <div className="btn + btn-outline-primary">Learn more!</div>
                    </Link>
                    <div className={"btn " + (inFavorite ? "btn-warning ms-auto" : "btn-outline-warning")} onClick={() => actions.addToFavorites(props.item.name)}><i className="fa-regular fa-heart"></i></div>
                </div>    
            </div>
        </div>
    )
}

export default Card