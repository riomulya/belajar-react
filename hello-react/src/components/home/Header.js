import React, { Component } from "react";
import "./Header.css";
class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      datalist: this.props.lists,
      daftar: "Daftar Makanan Nusantara",
      statusRendering: true,
    };
    this.handleMessage = this.handleMessage.bind(this);
    this.handleElement = this.handleElement.bind(this);
  }
  handleMessage(value, e) {
    e.preventDefault();
    alert(value);
    alert(this.state.daftar);
  }

  handleElement() {
    this.setState((state, props) => {
      return { statusRendering: !this.state.statusRendering };
    });
  }

  componentDidMount() {
    console.log("menjalankan componentDidMount");
  }

  render() {
    console.log("Menjalankan Render");
    console.log(this.state.statusRendering);

    return (
      <div>
        {this.state.statusRendering === true ? (
          <div>
            <h1
              style={{
                color: "red",
                fontFamily: "sans-serif",
                paddingTop: "50px",
              }}
            >
              Selamat Datang
            </h1>
            <h2>Silahkan Pilih Menu</h2>
          </div>
        ) : (
          <div>
            <h1 className="judul">
              Selamat Tinggal
              <h2>Jangan Lupa datang Kembali</h2>
            </h1>
          </div>
        )}
        <br />
        <button onClick={this.handleElement}>Change</button>
        <br />
        <br />
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
