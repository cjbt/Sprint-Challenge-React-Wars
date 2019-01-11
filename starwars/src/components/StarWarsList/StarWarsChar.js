import React from 'react';
import './StarWars.css';

const StarWarsChar = props => {
  return (
    <div className='starwarscard-container'>
      <h1>Name: {props.name}</h1>
    </div>
  );
};

export default StarWarsChar;
