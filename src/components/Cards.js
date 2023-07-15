import React from "react";
import movies from "../movies"

const Cards = (props) =>{
    return(
        <div>
            <h1>My movies</h1>
            <div className="card">
                <div className="top">
                    <h2>{props.name}</h2>
                    <img src={props.imgURL} alt="asdf" />
                </div>
                <div className="bottom">
                    <p>{props.like}</p>
                    <p>{props.year}</p>
                </div>
            </div>
        </div>
    );
};

export default Cards;