import React, { Component } from 'react';

class Navbar extends Component {
  render() {
    console.log('navbar');
    return (
      <nav className="navbar">
        <i className="navbar-log fas fa-leaf"></i>
        <span>Habit Tarcker</span>
        <span className="navbar-count">{this.props.totalCount}</span>
      </nav>
    );
  }
}

export default Navbar;
