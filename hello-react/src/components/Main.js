import React, { Component } from "react";
import menuMakanan from "./components/home/Lib/Food";
class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "Menu Makanan",
      title2: "Menu Minuman",
      inputValue: "",
      inputKota: "",
    };
    this.rubahData = this.rubahData.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(value, e) {
    this.setState({ [value]: e.target.value });
    // this.setState((state, props) => {
    //   return{
    //   inputValue: e.target.value}
    // });
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
        <input
          type="text"
          onChange={(e) => this.handleChange("inputValue", e)}
          value={this.state.inputValue}
          placeholder=" Nama"
        ></input>
        <br />
        <br />
        <input
          type="text"
          onChange={(e) => this.handleChange("inputKota", e)}
          value={this.state.inputKota}
          placeholder=" Kota"
        ></input>
        {menuMakanan.map((value, index) => {
          console.log(value);
          return (
            <div key={index}>
              <p>
                <strong>No : {index + 1}</strong>
              </p>
              <p>Nama Makanan : {value.nama}</p>
              <p>Harga : {value.harga}</p>
            </div>
          );
        })}
      </div>
    );
  }
}

export default Main;
