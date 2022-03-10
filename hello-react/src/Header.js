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
  handleMessage(value, e) {
    e.preventDefault();
    alert(value);
    alert(this.state.daftar);
  }

  componentDidMount() {
    console.log("menjalankan componentDidMount");
  }

  render() {
    console.log("Menjalankan Render");
    return (
      <div>
        <h2>class Header</h2>
        <p>{this.state.daftar}</p>
        <p>{this.state.datalist}</p>
        <a
          href="/"
          onClick={(e) => this.handleMessage("Pesan dari class component", e)}
        >
          Halaman Header
        </a>
      </div>
    );
  }
}

export default Header;
