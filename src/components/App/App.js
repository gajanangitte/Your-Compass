import Yelp from '../../utils/Yelp.js'
import React, { Component } from 'react';
import BusinessList from "../BusinessList/BusinessList"
import SearchBar from "../SearchBar/SearchBar"
import "./App.css"


export default class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      businesses : [],
    }
    this.searchYelp = this.searchYelp.bind(this);
  }

  searchYelp( term, location, sortBy ) {

  	// console.log(`Searching Yelp with ${term}, ${location}, ${sortBy}`);4
    Yelp.search(term, location, sortBy).then( (Businesses) => {
      this.setState({businesses: Businesses});
    } );

  }

  render() {
    return (
      <div className="App">
          <h1>FeedMe</h1>
          <SearchBar searchYelp={this.searchYelp}/>
          <BusinessList businesses={this.state.businesses}/>
      </div>
    );
// Improve consistency
  }
}

