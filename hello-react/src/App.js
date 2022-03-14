import React, { Component } from "react";
import Top from "./components/home/Top";
import Header from "./components/home/Header";
import Footer from "./components/home/Footer";
import Custominput from "./components/home/Custominput";
import Contact from "./components/page/Contact";
import { BrowserRouter, Route } from "react-router-dom";
// import Form from "./component/Form";
// import Lists from "./list/Lists";
// import Main from "./component/Main";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Header lists="3 list terbaik versi kami" />
          <Top />
          <h1> hello react </h1>
          <Custominput />
          {/* <Form /> */}
          {/* <Main /> */}
          {/* {<Lists />} */}
          <Footer name="Rio Mulya" />
          <Route path="/Contact" component={Contact} />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
