import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";
import "../../styles/single.css";

export const Single = props => {
    const { store, actions } = useContext(Context);
    const params = useParams();
    console.log(params);

    const [details, setDetails] = useState ({});
    const [descriptionC, setDescriptionC] = useState ("");

    useEffect(() => {
        console.log("muestra planets details")

        fetch("https://www.swapi.tech/api/planets/" + params.planets_id)
        .then((response) => response.json())
        // .then((data) => console.log(data))
        .then((data) => {
            setDetails(data.result.properties);
            setDescriptionC(data.result.description);
        });

    },[])

    
    return (
        <>
            <div className="d-flex justify-content-center">
                <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAQMAAADCCAMAAAB6zFdcAAAAM1BMVEXMzMyUlJSTk5PPz8/Ly8uYmJi/v7+rq6vIyMimpqbExMS6urqcnJy9vb2lpaWwsLCvr69WLtuUAAADPUlEQVR4nO3Yi5KbIBSAYQGJoEbz/k/bcwBvszFmN2112v+bnUnZuKcc7lhVAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD8t5zYlKq90sson4c4URfjGEo9XRhj002Vdu0jNve3UmiHj0OcJ3hrjLG50q5LhSF/tS29jqIhNn9UfzfEeWovdfTG21ZLrfWpEFOL3EqpOe7G3pg+Z/3jEKdxo/U+1JLCILV08hmrW2kRLTXVXUrhKEo0EiX/c5BQKcRtE6L905n8nFZydKm76tyHoXKNVNylPvR1Surxuhfd3UrK+RkJYXOIuISIhyHO5Ly3d5nOueajjOhSc/nqkQeHzOh+TqDsIdutpPJzjq48XUKMT0JczjIOVv0V0vDXASBfpZ6dH2+Eq0JsYre0izSWnzaF3RD130/uTdJvOpMHo6uWNoimVnudzVJKS329ms1OVnnbamfbYW4DzfdW5wPCFKLahvDXXhCk45TuXjox0gYnVb9XrqxrOZ3ytJEV4yHd65c2kAHv+2jzbJiyzp/PQlyQC15ms4wFNy8OOQHnbFnby2/z463OGl1Bl/kte5/+pP3vjRDXE2R09zKAZT9IVS07WkkgbZGbTtQpHo0dlybQtcRKhPTUfojrtkHawJ1OCBnb+524GsiyhUi+qwgyFeRpHU4vQ1y3DfREUM17ozcH60GVdgFvlk0hH4pcXlzrJ+vB/WuIa5k28NJtT/eFsD3luc5s2yTvrlMzllK1u7VcztwGaSM/Ph8oXUNXJ57cfJJnboO3QlzKdKwr4+D4nJjPkmY1u6eeL+fsvXOid8/+/0vQHmqda/MCvtwXVof97X2hlnTC5vTcpIZLh8VqnhIlRDuHuPDFUXuxb9veTMOhXPqWe2O3uTdqcnpGssuqqPetJshjKc8lxPbeeHT1PJNmoG8QlvcHZv/ynzo7nZXlsSmCnhrTOwgT3ghxRflFz+v3SKtxXy4KkuayyNV9CmFun72KOpFrm75vNi8D59d/qXRbdWEXY9TToH6uQnRD3z/eDHFN33mvXMruy1O/49U0AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAODf9AuctBw9uJzE/AAAAABJRU5ErkJggg==" style={{width:"600px", height:"500px", objectFit: "cover"}}></img>
                <div className="ms-5">
                    <h1>{details.name}</h1>
                    <p>{descriptionC}</p>
                </div>
            </div>
            <div style={{ height: "1px", backgroundColor: "red", width: "50%", marginLeft: "auto", marginRight: "auto", marginTop: "20px", marginBottom: "20px" }}></div>
            <div className="container">
                <div className="d-flex justify-content-between mx-auto" style={{ marginTop:"80px", width: "700px"}}>
                    <div className="d-block text-danger d" style={{width:"16px"}}>
                        <p>Name:</p>
                        <p>{details.name}</p>
                    </div>
                    <div className="d-block text-danger">
                        <p>Climate:</p>
                        <p>{details.climate}</p>
                    </div>
                    <div className="d-block text-danger">
                        <p>Population:</p>
                        <p>{details.population}</p>
                    </div>
                    <div className="d-block text-danger ">
                        <p>Orbital Period:</p>
                        <p>{details.orbital_period}</p>
                    </div>
                    <div className="d-block text-danger">
                        <p>Rotation period:</p>
                        <p>{details.rotation_period}</p>
                    </div>
                    <div className="d-block text-danger ">
                        <p>Diameter:</p>
                        <p>{details.diameter}</p>
                    </div>
                </div>
            </div>
            <div style={{ height: "1px", backgroundColor: "black", width: "75%", marginLeft: "auto", marginRight: "auto", marginTop: "50px", marginBottom: "20px" }}></div>
        </>
    );
};

Single.propTypes = {
    match: PropTypes.object
};
