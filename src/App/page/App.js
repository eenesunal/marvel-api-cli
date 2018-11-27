import React, { Component } from 'react'

import { CharacterDetail, ComicDetail, CharacterSearch, ComicSearch, Selection } from "../components"

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
      <div>
        <CharacterDetail />
        <ComicDetail />
        <CharacterSearch />
        <ComicSearch />
        <Selection />
      </div>
    )
  }
}
