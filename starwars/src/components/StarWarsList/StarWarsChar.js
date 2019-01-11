import React from 'react';
import './StarWars.css';

const StarWarsChar = props => {
  return (
    <div className='starwarscard-container'>
      <h1>Name: {props.name}</h1>
      <ul>
        <li>Height: {props.height}</li>
        <li>Birth Year: {props.birthyear}</li>
        <li>Gender: {props.gender}</li>
      </ul>
    </div>
  );
};

export default StarWarsChar;
