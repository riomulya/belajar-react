import React, { Component } from "react";

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      datalist: this.props.lists,
      daftar: "Daftar Makanan Nusantara",
      statusRendering: true,
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
        {this.state.statusRendering === false ? (
          <div>
            <h1>Selamat Datang</h1>
            <h2>Silahkan Pilih Menu</h2>
          </div>
        ) : (
          <div>
            <h1>Selamat Tinggal</h1>
            <h2>Jangan Lupa datang Kembali</h2>
          </div>
        )}
      </div>
    );

    // return (
    //   <div>
    //     <h2>class Header</h2>
    //     <p>{this.state.daftar}</p>
    //     <p>{this.state.datalist}</p>
    //     <a
    //       href="/"
    //       onClick={(e) => this.handleMessage("Pesan dari class component", e)}
    //     >
    //       Halaman Header
    //     </a>
    //   </div>
    // );
  }
}

export default Header;
