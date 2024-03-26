import React from 'react';
import Pokedex from './Pokedex'
import './Pokecard.css'

const Pokecard = ({ cards }) => {
    console.log(cards, 'this is cards');
    const card1 = cards[0];
    console.log(card1, 'this is card1');
    return (
        cards.map(card => (
            <div className='card'>
                <h3 className='name'>{card.name}</h3>
                <img />
            </div>
        ))
    
    )
}

export default Pokecard; 