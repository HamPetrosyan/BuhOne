import React, { Component } from "react";

import "./Header.css";

import logo from "../../assets/logo.png";
import image from "../../assets/image.png";

export default class Header extends Component {
  render() {
    return (
      <header>
        <div>
          <img src={logo} alt="logo" />
          <h1>BuhOne</h1>
        </div>
        <nav>
          <a href="#">Главная</a>
          <a href="#">услуги</a>
          <a href="#">кейсы</a>
          <a href="#">о компании</a>
          <a href="#">контакты</a>
        </nav>
        <img src={image} alt="image" />
      </header>
    );
  }
}
