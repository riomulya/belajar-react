import React, { Component } from "react";
import Image from "./Image";

class Lists extends Component {
  render() {
    return (
      <ol>
        <Image
          sumbergambar="https://s3-ap-southeast-1.amazonaws.com/niomic/img/sample/food1.jpg"
          lebar="100"
          notfound="Nasi Padang"
        />
        <li>Nasi Padang</li>
        <Image
          sumbergambar="https://s3-ap-southeast-1.amazonaws.com/niomic/img/sample/nasipadang.jpg"
          lebar="150"
          notfound="Nasi Kotak"
        />
        <li>Nasi Kotak</li>
        <Image
          sumbergambar="https://s3-ap-southeast-1.amazonaws.com/niomic/img/sample/sate.png"
          lebar="200"
          notfound="Nasi Goreng"
        />
        <li>Nasi Goreng</li>
      </ol>
    );
  }
}

export default Lists;
