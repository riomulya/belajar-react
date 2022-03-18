import React, { Component } from "react";
import axios from "axios";
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dataApi: [],
    };
  }
  filter(value) {
    if (value === 1) {
      return;
    }
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
          if (data.albumId === 1 || data.albumId === 2) {
            return (
              <span key={index} style={{ margin: "5px" }}>
                <p>No : {data.id}</p>
                <p>Album Ke : {data.albumId}</p>
                <p>
                  Judul : <strong>{data.title}</strong>
                </p>
                <img src={data.thumbnailUrl} alt={data.title} />
              </span>
            );
          }
        })}
      </div>
    );
  }
}

export default App;
