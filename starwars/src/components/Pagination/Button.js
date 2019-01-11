import React from 'react';

const Button = props => {
  return <button onClick={props.handleChange}>{props.buttonName}</button>;
};

export default Button;
