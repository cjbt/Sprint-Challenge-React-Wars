import React from 'react';
import StarWarsChar from './StarWarsChar';

const StarWarsList = props => {
  return (
    <div>
      {props.starwarsChars.map(char => (
        <StarWarsChar name={char.name} />
      ))}
    </div>
  );
};

export default StarWarsList;
