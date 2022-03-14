import React, { Component } from "react";
import Top from "./components/home/Top";
import Header from "./components/home/Header";
import Footer from "./components/home/Footer";
import Custominput from "./components/home/Custominput";

class Home extends Component {
  render() {
    return (
      <div>
        <Header lists="3 list terbaik versi kami" />
        <Top />
        <h1> hello react </h1>
        <Custominput />
        {/* <Form /> */}
        {/* <Main /> */}
        {/* {<Lists />} */}
        <Footer name="Rio Mulya" />
      </div>
    );
  }
}

export default Home;
