import React from 'react';
import { getFunName } from '../helpers';
import Footer from './Footer';

class StorePicker extends React.Component {
  constructor () {
    super();

    this.goToStore = this.goToStore.bind(this);
  }

  myInput = React.createRef();

  goToStore(event) {
    event.preventDefault();
    const storeName = this.myInput.value.value;
    this.props.history.push(`/store/${storeName}`);
  }

  render () {
    return (
      <React.Fragment>
        <div className="store-selector-container">
          <form className="store-selector" onSubmit={this.goToStore}>
            <h2 className="store-selector__title">Please Enter A Store</h2>
            <input
              type="text"
              ref={this.myInput}
              required
              placeholder="Store name"
              defaultValue={getFunName()}
              className="store-selector__name-input"
            />
            <button type="submit" className="store-selector__submit-button">Visit Store</button>
          </form>
        </div>
        <Footer />
      </React.Fragment>
    );
  }
}

export default StorePicker;
