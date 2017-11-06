import React, { Component } from 'react';
import HouseContainer from './HouseContainer'


const proxyurl = "https://cors-anywhere.herokuapp.com/";
const houseUrl = "https://anapioficeandfire.com/api/houses/?pageSize=50"
const booksUrl = "https://anapioficeandfire.com/api/books?pageSize=12"

class App extends Component {

  state = {
    houses: [],
    input: '',
    books: [],
    currentFilter: null
  }

  componentDidMount = () => {
    this.fetchHouses()
  }

  fetchHouses = () => {
    fetch(proxyurl + houseUrl)
    .then(res => res.json())
    .then(houses => this.setState({houses}))
  }

  fetchBooks = () => {
    fetch(proxyurl + booksUrl)
    .then(res => res.json())
    .then(books => this.setState({books}))
  }

  updateFilter = (event) => {
    this.setState({currentFilter: event.target.value})
  }

  handleUpdate = (event) => {
    this.setState({input: event.target.value})
  }

  handleSubmit = (event) => {
    event.preventDefault()
    let newHouse = {name: "House " + this.state.input}
    this.setState({houses: [...this.state.houses, newHouse ]})
    this.setState({input: ""})
  }

  handleClick = (event) => {
    this.fetchBooks()
  }

  render() {
    return (
        <HouseContainer
          houses={this.state.houses}
          books={this.state.books}
          currentFilter={this.state.currentFilter}
          onUpdateFilter={this.updateFilter}
          onInputChange={this.handleUpdate}
          onSubmit={this.handleSubmit}
          currentInput={this.state.input}
          onClick={this.handleClick}
        />
    );
  }
}

export default App;
