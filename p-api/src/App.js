import React, { Component } from "react";
import axios from "axios";
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dataApi: [],
      edit: false,
      dataPost: {
        title: "",
        thumbnailUrl: "",
        albumId: "",
        id: 1,
      },
    };
    this.handleRemove = this.handleRemove.bind(this);
    this.reloadData = this.reloadData.bind(this);
    this.inputChange = this.inputChange.bind(this);
    this.onsubmitForm = this.onsubmitForm.bind(this);
    this.getDataId = this.onsubmitForm.bind(this);
  }
  onsubmitForm = () => {
    if (this.state.edit === false) {
      axios
        .post("http://localhost:3004/posts", this.state.dataPost)
        .then(() => {
          this.reloadData();
          this.clearData();
        });
    } else {
      axios
        .put(
          `http://localhost:3004/posts/${this.state.dataPost.id}`,
          this.state.dataPost
        )
        .then(() => {
          this.reloadData();
        });
    }
  };

  clearData = () => {
    let newdataPost = { ...this.state.dataPost };
    newdataPost["albumId"] = "";
    newdataPost["title"] = "";
    newdataPost["thumbnailUrl"] = "";

    this.setState({
      dataPost: newdataPost,
    });
  };

  getDataId = (e) => {
    axios.get(`http://localhost:3004/posts/${e.target.value}`).then((res) => {
      console.log(res);
      this.setState({
        dataApi: res.data,
        edit: true,
      });
    });
  };

  inputChange(e) {
    let newdataPost = { ...this.state.dataPost };
    if (this.state.edit === false) {
      newdataPost["id"] = new Date().getTime();
    }
    newdataPost[e.target.name] = e.target.value;

    this.setState({ dataPost: newdataPost }, () =>
      console.log(this.state.dataPost)
    );
  }

  reloadData() {
    axios.get("http://localhost:3004/posts").then((res) => {
      this.setState({
        dataApi: res.data,
        edit: "false",
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
                value={this.state.dataPost.albumId}
                name="albumId"
              ></input>
              <input
                value={this.state.dataPost.title}
                type="text"
                placeholder="Masukkan Tittle"
                style={{ padding: "10px", margin: "10px" }}
                onChange={this.inputChange}
                name="title"
              ></input>
              <input
                value={this.state.dataPost.thumbnailUrl}
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
                Save Data
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
                  <button
                    value={data.id}
                    onClick={this.getDataId}
                    style={{ margin: "5px" }}
                  >
                    Edit
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
