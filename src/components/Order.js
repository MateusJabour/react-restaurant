import React from 'react'
import { formatPrice } from '../helpers';

class Order extends React.Component {
  renderOrder = key => {
    const fish = this.props.fishes[key];
    const count = this.props.order[key];
    const isAvailable = fish && fish.status === 'available';
    if (!fish) return null;
    if (isAvailable) {
      return (
        <li key={key} className="order__item">
          {formatPrice(count * fish.price)}

          <div>{count} lbs {fish.name}</div>
          <button onClick={() => this.props.removeFromOrder(key)}>&times;</button>
        </li>
      )
    }

    return (
      <li key={key} className="order__item-unavailable">
        Sorry {fish ? fish.name : 'fish'} is no longer available
      </li>
    )
  };

  render () {
    const orderIds = Object.keys(this.props.order);
    const total = orderIds.reduce((total, key) => {
      const fish = this.props.fishes[key];
      const count = this.props.order[key];
      const isAvailable = fish && fish.status === 'available';

      if (isAvailable) {
        return total + (fish.price * count);
      }

      return total;
    }, 0);

    return (
      <div className="main__section order">
        <ul className="order__items">
          {orderIds.map(this.renderOrder)}
          <li className="order__total">
            Total: <strong>{formatPrice(total)}</strong>
          </li>
        </ul>
      </div>
    );
  }
}

export default Order;
