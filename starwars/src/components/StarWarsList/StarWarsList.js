import React from 'react';
import StarWarsChar from './StarWarsChar';
import './StarWars.css';

const StarWarsList = props => {
  return (
    <div className='starwarslist-container'>
      {props.starwarsChars.map(char => (
        <StarWarsChar
          name={char.name}
          height={char.height}
          birthyear={char.birth_year}
          gender={char.gender}
          homeworld={char.homeworld}
        />
      ))}
    </div>
  );
};

export default StarWarsList;
