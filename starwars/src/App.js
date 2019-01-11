import React, { Component } from 'react';
import './App.css';
import StarWarsList from './components/StarWarsList/StarWarsList';
import Button from './components/Pagination/Button';

const starWarsURL = page => `https://swapi.co/api/people/?page=${page}`;

class App extends Component {
  constructor() {
    super();
    this.state = {
      starwarsChars: [],
      page: 1
    };
  }

  componentDidMount() {
    console.log(this.state.page);
    this.getCharacters(starWarsURL(this.state.page));
  }

  getCharacters = URL => {
    // feel free to research what this code is doing.
    // At a high level we are calling an API to fetch some starwars data from the open web.
    // We then take that data and resolve it our state.
    fetch(URL)
      .then(res => {
        return res.json();
      })
      .then(data => {
        console.log(data);
        this.setState({ starwarsChars: data.results });
      })
      .catch(err => {
        throw new Error(err);
      });
  };

  getNext = () => {
    this.setState(prevState => ({
      page: (prevState.page += 1)
    }));
    this.getCharacters(starWarsURL(this.state.page));
  };
  getPrev = () => {
    this.setState(prevState => ({
      page: (prevState.page -= 1)
    }));
    this.getCharacters(starWarsURL(this.state.page));
  };

  render() {
    return (
      <div className='App'>
        <StarWarsList starwarsChars={this.state.starwarsChars} />
        <Button buttonName='Previous' handleChange={this.getPrev} />
        <Button buttonName='Next' handleChange={this.getNext} />
      </div>
    );
  }
}

export default App;
