import React, { Component } from 'react';
import BusinessList from "../BusinessList/BusinessList"
import SearchBar from "../SearchBar/SearchBar"
import "./App.css"

const business = {
  imageSrc: 'https://s3.amazonaws.com/codecademy-content/programs/react/ravenous/pizza.jpg',
  name: 'MarginOtto Pizzeria',
  address: '1010 Paddington Way',
  city: 'Flavortown',
  state: 'NY',
  zipCode: '10101',
  category: 'Italian',
  rating: 4.5,
  reviewCount: 90
}
const businesses = [ business, business, business, business, business, business ];



export default class App extends Component {
  render() {
    return (
      <div className="App">
          <h1>FeedMe</h1>
          <SearchBar />
          <BusinessList businesses={businesses}/>
      </div>
    );
// Improve consistency
  }
}

