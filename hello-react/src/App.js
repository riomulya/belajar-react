import React, { Component } from "react";
import Top from "./component/Top";
import Header from "./Header";
import Footer from "./Footer";
// import Lists from "./list/Lists";
import Main from "./component/Main";

class App extends Component {
  render() {
    return (
      <div>
        <Header lists="3 list terbaik versi kami" />
        <Top />
        <h1> hello react </h1>
        <Main
          menuMakanan={[
            {
              nama: "Mie Ayam++",
              harga: 10000,
            },
            {
              nama: "Bakso",
              harga: 15000,
            },
            {
              nama: "Mie Ayam Bakso",
              harga: 20000,
            },
            {
              nama: "Soto",
              harga: 10000,
            },
          ]}
        />
        {/* {<Lists />} */}
        <Footer name="Rio Mulya" />
      </div>
    );
  }
}

export default App;
