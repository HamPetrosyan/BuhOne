import React, { Component } from "react";

import "./ServiceItem.css";

export default class ServiceItem extends Component {
  render() {
    return (
      <article className="service">
        <img src={this.props.imgSrc} alt={this.props.text} />
        <div className="desc">
          <h2>{this.props.text}</h2>
        </div>
      </article>
    );
  }
}
