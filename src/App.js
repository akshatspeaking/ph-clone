import React, { Component } from "react";
// import logo from "./logo.svg";
import Header from "./components/header/Header";
import Feed from "./components/feed/Feed";
import Sidebar from "./components/sidebar/Sidebar";

import "./App.css";
import Modal from "./components/Modal";

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      items: [
        {
          logo:
            "https://ph-files.imgix.net/fe68ff2b-8d45-4f1e-b788-81f1c4ad9c13.gif?auto=format&auto=compress&codec=mozjpeg&cs=strip&w=80&h=80&fit=crop&dpr=2",
          heading: "Fluent System Icons",
          tagline: "Thousands of modern and clear UI icons for free",
          numComments: "36",
          tag: "Design Tools",
          numUpvotes: "141",
        },
        {
          logo:
            "https://ph-files.imgix.net/acf956a4-15e5-4214-832f-949f0651c289.jpeg?auto=format&auto=compress&codec=mozjpeg&cs=strip&w=80&h=80&fit=crop&dpr=2",
          heading: "Ethical Explorer Pack",
          tagline: "Tools to help manage the future impact of today's tech.",
          numComments: "17",
          tag: "Productivity",
          numUpvotes: "356",
        },
        {
          logo:
            "https://ph-files.imgix.net/fe68ff2b-8d45-4f1e-b788-81f1c4ad9c13.gif?auto=format&auto=compress&codec=mozjpeg&cs=strip&w=80&h=80&fit=crop&dpr=2",
          heading: "Fluent System Icons",
          tagline: "Thousands of modern and clear UI icons for free",
          numComments: "36",
          tag: "Design Tools",
          numUpvotes: "141",
        },
        {
          logo:
            "https://ph-files.imgix.net/acf956a4-15e5-4214-832f-949f0651c289.jpeg?auto=format&auto=compress&codec=mozjpeg&cs=strip&w=80&h=80&fit=crop&dpr=2",
          heading: "Ethical Explorer Pack",
          tagline: "Tools to help manage the future impact of today's tech.",
          numComments: "17",
          tag: "Productivity",
          numUpvotes: "356",
        },
        {
          logo:
            "https://ph-files.imgix.net/fe68ff2b-8d45-4f1e-b788-81f1c4ad9c13.gif?auto=format&auto=compress&codec=mozjpeg&cs=strip&w=80&h=80&fit=crop&dpr=2",
          heading: "Fluent System Icons",
          tagline: "Thousands of modern and clear UI icons for free",
          numComments: "36",
          tag: "Design Tools",
          numUpvotes: "141",
        },
        {
          logo:
            "https://ph-files.imgix.net/acf956a4-15e5-4214-832f-949f0651c289.jpeg?auto=format&auto=compress&codec=mozjpeg&cs=strip&w=80&h=80&fit=crop&dpr=2",
          heading: "Ethical Explorer Pack",
          tagline: "Tools to help manage the future impact of today's tech.",
          numComments: "17",
          tag: "Productivity",
          numUpvotes: "356",
        },
      ],
      modalVisible: false,
    };
  }
  toggleModal = () => {
    if (this.state.modalVisible) {
      this.setState({ modalVisible: false });
    } else {
      this.setState({ modalVisible: true });
    }
  };
  addProduct = (e) => {
    let newProduct = {
      logo: document.querySelector(".form-logo").value,
      heading: document.querySelector(".form-heading").value,
      tagline: document.querySelector(".form-tagline").value,
      numComments: "0",
      tag: "New Product",
      numUpvotes: "0",
    };
    let updatedItems = [newProduct, ...this.state.items];
    this.setState({ items: updatedItems, modalVisible: false });
  };

  render() {
    return (
      <div className="App">
        <Modal show={this.state.modalVisible} addProduct={this.addProduct} />
        <Header toggleModal={this.toggleModal} />
        <div className="container">
          <div className="main-row">
            <Feed items={this.state.items} />
          </div>
          <div className="side-row">
            <Sidebar />
          </div>
        </div>
      </div>
    );
  }
}
