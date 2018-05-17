import React, { Component } from 'react';
import Fish from './Fish';

class Menu extends Component {
  render() {
    return (
      <div className="main__section menu">
        <ul className="menu__fish-list">
          {Object.keys(this.props.fishes).map(key =>
            <Fish key={key} index={key} details={this.props.fishes[key]} addToOrder={this.props.addToOrder} />
          )}
        </ul>
      </div>
    );
  }
}

export default Menu;