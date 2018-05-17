import React, { Component } from 'react';

class Slider extends Component {
  state = {
    tab: 0
  };
  
  wrapperRef = React.createRef();

  tabs = this.props.tabs || this.props.children.map( (tab) => {
    return tab.type.name;
  });

  changeSection = (rightDirection) => {
    const overflowCondition = rightDirection ? this.state.tab === Object.keys(this.tabs).length - 1 : this.state.tab === 0
    if (overflowCondition) return;

    const newTab = rightDirection ? this.state.tab + 1 : this.state.tab - 1;
    this.wrapperRef.value.style.transform = `translateX(calc(-100% / ${Object.keys(this.tabs).length} * ${newTab})`;
    this.setState({ tab: newTab });
  }

  render() {
    return (
      <div className="main__sections">
        <div className="main__section-control">
          <button className="main__change-section-button" onClick={() => this.changeSection(false)}>&lt;</button>
          <h2 className="main__section_name">{this.tabs[this.state.tab]}</h2>
          <button className="main__change-section-button" onClick={() => this.changeSection(true)}>&gt;</button>
        </div>
        <div className="wrapper" ref={this.wrapperRef}>
          {this.props.children}
        </div>
      </div>
    );
  }
}

export default Slider;