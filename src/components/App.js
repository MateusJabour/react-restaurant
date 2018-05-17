import React from 'react';

import Header from './Header';
import Footer from './Footer';
import Order from './Order';
import Inventory from './Inventory';
import Menu from './Menu';
import Slider from './Slider';
import base from '../base';

import sampleFishes from '../sample-fishes'

class App extends React.Component {
  state = {
    fishes: {},
    order: {},
  };

  componentDidMount() {
    const { params } = this.props.match;

    const localStorageRef = localStorage.getItem(`order-${params.storeId}`);

    if (localStorageRef) {
      this.setState({ order: JSON.parse(localStorageRef) });
    }

    this.ref = base.syncState(`${params.storeId}/fishes`, {
      context: this,
      state: 'fishes'
    });
  }

  componentWillUnmount() {
    base.removeBinding(this.ref);
  }

  componentDidUpdate() {
    const { params } = this.props.match;
    localStorage.setItem(`order-${params.storeId}`, JSON.stringify(this.state.order))
  }

  addFish = fish => {
    const fishes = {...this.state.fishes};
    fishes[`fish${Date.now()}`] = fish;
    this.setState({ fishes });
  }

  updateFish = (key, updatedFish) => {
    const fishes = {...this.state.fishes };
    fishes[key] = updatedFish;
    this.setState({ fishes });
  }

  deleteFish = (key) => {
    const fishes = { ...this.state.fishes };
    fishes[key] = null;
    this.setState({ fishes });
  }

  loadSamplesFishes = e => {
    this.setState({ fishes: sampleFishes });
  }

  addToOrder = key => {
    const order = {...this.state.order};
    order[key] = order[key] + 1 || 1;
    this.setState({ order });
  }

  removeFromOrder = key => {
    const order = {...this.state.order};
    delete order[key];
    this.setState({ order });
  }

  render() {
    return (
      <React.Fragment>
        <Header tagline={`${this.props.match.params.storeId}`}/>
        <main className="main">
          <Slider>
            <Menu
              fishes={this.state.fishes}
              addToOrder={this.addToOrder}
            />
            <Order
              fishes={this.state.fishes}
              order={this.state.order}
              removeFromOrder={this.removeFromOrder}
            />
            <Inventory
              addFish={this.addFish}
              updateFish={this.updateFish}
              deleteFish={this.deleteFish}
              loadSamplesFishes={this.loadSamplesFishes}
              fishes={this.state.fishes}
            />
          </Slider>
        </main>
        <Footer />
      </React.Fragment>
    );
  }
}

export default App;
