import React, { Component } from "react";
import axios from "axios";
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dataApi: [],
    };
    this.handleRemove = this.handleRemove.bind(this);
    this.reloadData = this.reloadData.bind(this);
  }
  reloadData() {
    axios.get("http://localhost:3004/posts").then((res) => {
      this.setState({
        dataApi: res.data,
      });
    });
  }
  handleRemove(e) {
    fetch(`http://localhost:3004/posts/${e.target.value}`, {
      method: "DELETE",
    }).then(() => this.reloadData());
  }
  componentDidMount() {
    // fetch("http://localhost:3004/posts")
    //   .then((response) => response.json())
    //   .then((res) =>
    //     this.setState({
    //       dataApi: res,
    //     })
    //   );
    this.reloadData();
  }
  render() {
    return (
      <div>
        <center>
          <h1>Helo Api</h1>
          {this.state.dataApi.map((data, index) => {
            if (
              data.albumId === 1 ||
              data.albumId === 2 ||
              data.albumId === 12 ||
              data.albumId === 22 ||
              data.albumId === 32 ||
              data.albumId === 42
            ) {
              return (
                <span key={index} style={{ margin: "5px" }}>
                  <p>No : {data.id}</p>
                  <p>Album Ke : {data.albumId}</p>
                  <p>
                    Judul : <strong>{data.title}</strong>
                  </p>
                  <img src={data.thumbnailUrl} alt={data.title} />
                  <p>
                    <button value={data.id} onClick={this.handleRemove}>
                      Delete
                    </button>
                  </p>
                  <br />
                  <hr />
                </span>
              );
            }
          })}
        </center>
      </div>
    );
  }
}

export default App;
