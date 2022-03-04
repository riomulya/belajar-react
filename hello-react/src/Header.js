import React, { Component } from "react";

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      datalist: this.props.lists,
      daftar: "Daftar Makanan Nusantara",
    };
    this.handleMessage = this.handleMessage.bind(this);
  }
  handleMessage() {
    alert(this.state.daftar);
  }
  render() {
    return (
      <div>
        <h2>class Header</h2>
        <p>{this.state.daftar}</p>
        <p>{this.state.datalist}</p>
        <a href="/" onClick={this.handleMessage}>
          Halaman Header
        </a>
      </div>
    );
  }
}

export default Header;
