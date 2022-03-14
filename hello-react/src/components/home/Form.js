import { Component } from "react";

export default class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: "",
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleChange(e) {
    this.setState({ value: e.target.value });
  }
  handleSubmit(value, e) {
    alert("Pesan Input Adalah : " + this.state.value);
    e.preventDefault();
  }
  render() {
    return (
      <div>
        <form onSubmit={(e) => this.handleSubmit("value", e)}>
          <input
            type="text"
            value={this.state.value}
            onChange={this.handleChange}
          />
          <br />
          <br />
          <input type="submit" value="Submit Data" />
        </form>
      </div>
    );
  }
}
