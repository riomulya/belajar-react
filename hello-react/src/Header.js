import React, { Component } from "react";

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      datalist: this.props.lists,
      daftar: "Daftar Makanan Nusantara",
    };
  }
  render() {
    return (
      <div>
        <h2>class Header</h2>
        <p>{this.state.daftar}</p>
        <p>{this.state.datalist}</p>
      </div>
    );
  }
}

export default Header;
