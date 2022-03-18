import React, { Component } from "react";
import axios from "axios";
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dataApi: [],
    };
  }
  componentDidMount() {
    // fetch("https://jsonplaceholder.typicode.com/photos")
    //   .then((response) => response.json())
    //   .then((res) =>
    //     this.setState({
    //       dataApi: res,
    //     })
    //   );

    axios.get("https://jsonplaceholder.typicode.com/photos").then((res) => {
      this.setState({
        dataApi: res.data,
      });
    });
  }
  render() {
    return (
      <div>
        <h1>Helo Api</h1>
        {this.state.dataApi.map((data, index) => {
          return (
            <span key={index} style={{ margin: "5px" }}>
              <p>No : {data.id}</p>
              <img src={data.thumbnailUrl} alt={data.title} />
            </span>
          );
        })}
      </div>
    );
  }
}

export default App;
