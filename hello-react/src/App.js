import React, { Component } from "react";
import Top from "./component/Top";
import Header from "./Header";
import Footer from "./Footer";
import Lists from "./list/Lists";

class App extends Component {
  render() {
    return (
      <div>
        <Header lists="3 list terbaik versi kami" />
        <Top />
        <h1> hello react </h1>
        <Lists />
        <Footer name="Rio Mulya" />
      </div>
    );
  }
}

export default App;