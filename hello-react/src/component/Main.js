import React, { Component } from "react";

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "Menu Makanan",
      title2: "Menu Minuman",
    };
    this.rubahData = this.rubahData.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    console.error(e.target.value);
  }

  rubahData() {
    this.setState((state, props) => {
      return { title: state.title2, title2: state.title };
    });
  }

  render() {
    return (
      <div>
        <h3>{this.state.title}</h3>
        <h3>{this.state.title2}</h3>
        <button onClick={this.rubahData}>Rubah Data</button>
        <br />
        <br />
        <input type="text" onChange={this.handleChange}></input>
      </div>
    );
  }
}

export default Main;