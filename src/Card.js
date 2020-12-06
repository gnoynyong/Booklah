import React from 'react';
import './Card.css';

function Card({src,location,description,price}) {
    return (
        <div className="card">
            <img src={src} alt="court"/>
            <div className="card-info">
                <h2>{location}</h2>
                <h4>{description}</h4>
                <h5>{price}</h5>
            </div>  
        </div>
    )
}

export default Card
