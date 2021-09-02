import React from 'react';
import "./card.css";

function Card(props) {
    return (
        <div className='card-container'>
        <img alt="Monster" src={`https://robohash.org/${props.monste.id}?set=set2&size=180x180`}></img>
        <h1>{props.monste.name}</h1>
        <p>{props.monste.email}</p>
        </div>
    )
}

export default Card;
