import React, { Component } from "react";

class Image extends Component {
  render() {
    return (
      <img
        src={this.props.sumbergambar}
        alt={this.props.notfound}
        width={this.props.lebar}
      />
    );
  }
}

export default Image;
