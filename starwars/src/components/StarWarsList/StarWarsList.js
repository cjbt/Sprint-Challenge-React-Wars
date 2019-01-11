import React from 'react';
import StarWarsChar from './StarWarsChar';
import './StarWars.css';

const StarWarsList = props => {
  return (
    <div className='starwarslist-container'>
      {props.starwarsChars.map(char => (
        <StarWarsChar name={char.name} />
      ))}
    </div>
  );
};

export default StarWarsList;
