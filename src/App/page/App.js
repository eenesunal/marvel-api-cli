import React, { Component } from 'react'
import { BrowserRouter as Router, Route } from "react-router-dom"

import { CharacterSearch, CharacterResult, CharacterDetail } from "../components"

import { Container } from "./App.styled"

export default class App extends Component {
  render() {
    return (
      <Router>
        <Container>
          <Route path="/" exact component={CharacterSearch} />
          <Route path="/characters/:searchKey" exact component={CharacterResult} />
          <Route path="/characters/:searchKey/:characterId" exact component={CharacterDetail} />
        </Container>
      </Router>
    )
  }
}
