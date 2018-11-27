import React, { Component } from 'react'

import Search from "../components/Search/Search";

import './App.css'

import { getJSON } from "../../request"

export default class App extends Component {
  // componentDidMount() {
  //   getJSON({ url: "characters" })
  //     .then((characters) => {
  //       console.log(characters)
  //     })
  //     .catch((error) => {
  //       console.error(error)
  //     })
  // }

  render() {
    return (
      <Search />
    );
  }
}
