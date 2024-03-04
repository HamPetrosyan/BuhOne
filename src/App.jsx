import React, { Component } from "react";

import Header from "./Components/Header/Header";
import Presentation from "./Components/Presentation/Presentation";
import Services from "./Components/Services/Services";
import Contacts from "./Components/Contacts/Contacts";
import Footer from "./Components/Footer/Footer";

export default class App extends Component {
  render() {
    return (
      <>
        <Header />
        <Presentation />
        <Services />
        <Contacts />
        <Footer />
      </>
    );
  }
}
