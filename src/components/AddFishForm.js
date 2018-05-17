import React from 'react'

class AddFishForm extends React.Component {
  nameRef = React.createRef();
  priceRef = React.createRef();
  statusRef = React.createRef();
  descRef = React.createRef();
  imageRef = React.createRef();

  createFish = (e) => {
    e.preventDefault();
    console.log(this.nameRef);
    const fish = {
      name: this.nameRef.value.value,
      price: parseFloat(this.priceRef.value.value),
      status: this.statusRef.value.value,
      desc: this.descRef.value.value,
      image: this.imageRef.value.value,
    }
    this.props.addFish(fish);
    e.currentTarget.reset();
  }

  render () {
    return (
      <form action="" className="fish-form" onSubmit={this.createFish}>
        <input name="name" ref={this.nameRef} placeholder="Name" type="text"/>
        <input name="price" ref={this.priceRef} placeholder="Price" type="text"/>
        <textarea name="desc" ref={this.descRef} placeholder="Desc"></textarea>
        <input name="image" ref={this.imageRef} placeholder="Image" type="text"/>
        <select name="status" ref={this.statusRef}>
          <option value="available">Fresh</option>
          <option value="unavailable">Sold out</option>
        </select>
        <button type="submit">+ Add Fish</button>
      </form>
    );
  }
}

export default AddFishForm;
