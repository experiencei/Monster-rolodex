import React from 'react';
import Card from "../Card/card";
import "./cardlist.css";
const Cardlist = props => {
    return (
        <div className='card-list'>
           {props.monster.map((monster) => (
               <Card
                   key={monster.id}
                   monste={monster}
               />
          ))}
        </div>
    )
}

export default Cardlist
