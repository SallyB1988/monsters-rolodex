import React, { Component } from 'react';
import './App.css';

import { CardList } from './components/card-list/card-list'

class App extends Component {
  constructor() {
    super();
    this.state = {
      monsters: []
    }
  }

  componentDidMount() {

    // fetch automatically sets up a promise
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(users => this.setState({ monsters: users }))
      .catch(error => console.log(error))
  }

  render() {

    return (
      <div className="App">
        <CardList monsters={this.state.monsters} />
      </div>
    );

  }
}

export default App;
