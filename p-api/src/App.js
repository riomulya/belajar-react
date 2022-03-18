import React, { Component } from "react";
import axios from "axios";
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dataApi: [],
      dataPost: {
        title: "",
        thumbnailUrl: "",
        albumId: "",
      },
    };
    this.handleRemove = this.handleRemove.bind(this);
    this.reloadData = this.reloadData.bind(this);
    this.inputChange = this.inputChange.bind(this);
    this.onsubmitForm = this.onsubmitForm.bind(this);
  }
  onsubmitForm() {
    axios.post("http://localhost:3004/posts", this.state.dataPost).then(() => {
      this.reloadData();
    });
  }

  inputChange(e) {
    let newdataPost = { ...this.state.dataPost };
    newdataPost["id"] = new Date().getTime();
    newdataPost[e.target.name] = e.target.value;

    this.setState({ dataPost: newdataPost }, () =>
      console.log(this.state.dataPost)
    );
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
          <>
            <span>
              <input
                type="text"
                placeholder="Masukkan Nomor Album"
                style={{ padding: "10px" }}
                onChange={this.inputChange}
                name="albumId"
              ></input>
              <input
                type="text"
                placeholder="Masukkan Tittle"
                style={{ padding: "10px", margin: "10px" }}
                onChange={this.inputChange}
                name="title"
              ></input>
              <input
                type="text"
                placeholder="Masukkan link Gambar"
                style={{ padding: "10px", margin: "10px" }}
                onChange={this.inputChange}
                name="thumbnailUrl"
              ></input>
              <button
                style={{ padding: "10px", margin: "10px" }}
                type="submit"
                onClick={this.onsubmitForm}
              >
                Tambah
              </button>
            </span>
          </>
          {this.state.dataApi.map((data, index) => {
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
          })}
        </center>
      </div>
    );
  }
}

export default App;
