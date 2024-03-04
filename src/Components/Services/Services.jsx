import React, { Component } from "react";

import "./Services.css";

import ServiceItem from "./ServiceItems/ServiceItem";
import company2 from "../../assets/company2.png";

export default class Services extends Component {
  render() {
    return (
      <section className="services">
        <h2>Наши услуги</h2>
        <h1>Мы специализируемся</h1>
        <div className="all_services">
          <ServiceItem imgSrc={company2} text="Бухгалтерское обслуживание" />
          <ServiceItem imgSrc={company2} text="Бухгалтерское обслуживание" />
          <ServiceItem imgSrc={company2} text="Бухгалтерское обслуживание" />
          <ServiceItem imgSrc={company2} text="Бухгалтерское обслуживание" />
          <ServiceItem imgSrc={company2} text="Бухгалтерское обслуживание" />
          <ServiceItem imgSrc={company2} text="Бухгалтерское обслуживание" />
        </div>
      </section>
    );
  }
}
