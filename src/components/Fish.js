import React from 'react'
import PropTypes from 'prop-types';

import { formatPrice } from '../helpers';

class Fish extends React.Component {
  static propTypes = {
    details: PropTypes.shape({
      image: PropTypes.string,
      desc: PropTypes.string,
      name: PropTypes.string,
      status: PropTypes.string,
      price: PropTypes.number,
    }),
    addToOrder: PropTypes.func,
  }

  render () {
    const { image, desc, name, price, status } = this.props.details;
    const isAvailable = status === 'available';

    return (
      <li className="fish">
        <img src={image} alt={desc} className="fish__picture"/>
        <div className="fish__info">
          <h3 className="fish__name">{name}
            <span className="fish__price">{formatPrice(price)}</span>
          </h3>
          <p>{desc}</p>
          <button className="fish__status-button"disabled={!isAvailable} onClick={() => this.props.addToOrder(this.props.index)}>
            { isAvailable ? 'Add to Cart' : 'Sold Out'}
          </button>
        </div>
      </li>
    )
  }
}

export default Fish;