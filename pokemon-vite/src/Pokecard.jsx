import React from 'react';
import Pokedex from './Pokedex'
import './Pokecard.css'

const Pokecard = ({ cards }) => {
    console.log(cards, 'this is cards');

    return (
            cards.map(card => (
                <div className='card'>
                    <h3 className='name'>{card.name}</h3>
                    <div className="img-container">
                        <img className='img' src={card.img}/>
                    </div>
                    <div className="stats-container">
                    <p className="stats">Type: {card.type}</p>
                    <p className="stats">EXP: {card.base_experience}</p>
                    </div>
                </div>
            ))
    )
}

export default Pokecard; 