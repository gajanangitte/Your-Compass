import React, { Component } from 'react';
import BusinessList from "../BusinessList/BusinessList"
import SearchBar from "../SearchBar/SearchBar"
import "./App.css"

export default class App extends Component {
  render() {
    return (
      <div className="App">
          <h1>FeedMe</h1>
          <SearchBar />
          <BusinessList />
      </div>
    );
// Improve consistency
  }
}

