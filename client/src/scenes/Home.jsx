import React, { Component } from 'react';
import '../App.css';
import ListMovie from '../components/ListMovie';
import AddMovie from '../components/AddMovie';

class Home extends Component {
  render() {
    return (
      <div className="home">
        <AddMovie />
        <ListMovie />
      </div>
    );
  }
}

export default Home;