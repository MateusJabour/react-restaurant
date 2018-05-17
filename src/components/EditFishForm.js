import React from 'react'

class EditFishForm extends React.Component {
  handleChange = (e) => {
    const updatedFish = {
      ...this.props.fish,
      [e.currentTarget.name] : e.currentTarget.value
    }
    this.props.updateFish(this.props.index, updatedFish);
  }

  render () {
    return (
      <div action="" className="fish-form" onSubmit={this.createFish}>
        <input
          name="name"
          type="text"
          onChange={this.handleChange}
          value={this.props.fish.name}
        />
        <input
          name="price"
          type="text"
          onChange={this.handleChange}
          value={this.props.fish.price}
        />
        <textarea name="desc" onChange={this.handleChange} value={this.props.fish.desc} ></textarea>
        <input
          name="image"
          type="text"
          onChange={this.handleChange}
          value={this.props.fish.image}
        />
        <select name="status" onChange={this.handleChange} value={this.props.fish.status}>
          <option value="available">Fresh</option>
          <option value="unavailable">Sold out</option>
        </select>
      <button onClick={() => this.props.deleteFish(this.props.index)}>Remove fish</button>
      </div>
    );
  }
}

export default EditFishForm;
