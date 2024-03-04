import React, { Component } from "react";

import "./Contacts.css";

import phone from "../../assets/Vector.png";
import letter from "../../assets/Group.png";

export default class Contacts extends Component {
  render() {
    return (
      <section className="contacts">
        <div className="first_div">
          <h1>Связь с нами</h1>
          <h3>
            У вас остались вопросы? Напишите нам - мы ответим в ближайшее время!
          </h3>
          <div>
            <img src={phone} alt="phone" />
            <h2>+7 (111) 222-33-44</h2>
            <img src={letter} alt="letter" />
            <h2>order@bu-one.ru</h2>
          </div>
        </div>
        <div className="sec_div">
          <div className="container">
            <div className="name">
              <p>Имя</p>
              <h2>Иван</h2>
            </div>
            <div className="surname">
              <p>Фамилия</p>
              <h2>Иванов </h2>
            </div>
          </div>
          <p>Сообщение</p>
          <h2>Ваше сообщение</h2>
          <button>Отправить сообщение</button>
        </div>
      </section>
    );
  }
}
