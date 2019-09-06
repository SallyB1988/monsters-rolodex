import React, { Component } from 'react';
import './App.css';

import { CardList } from './components/card-list/card-list'
import { SearchBox } from './components/search-box/search-box'

class App extends Component {
  constructor() {
    super();
    this.state = {
      monsters: [],
      searchField: ''
    }
  }

  componentDidMount() {

    // fetch automatically sets up a promise
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(users => this.setState({ monsters: users }))
      .catch(error => console.log(error))
  }

  handleChange = e => {
    this.setState({ searchField: e.target.value })
  }

  filterMonsters = () => {
    const { monsters, searchField } = this.state;
    return (
      monsters.filter((m) => (
        m.name.toLowerCase().includes(searchField.toLowerCase())
      )))
  }

  render() {
    const filteredMonsters = this.filterMonsters()

    return (
      <div className="App">
        <h1>Monsters Rolodex</h1>
        <SearchBox placeholder='search monsters' handleChange={this.handleChange} />
        <CardList monsters={filteredMonsters} />
      </div>
    );

  }
}

export default App;
