import React, { Component } from 'react'
import { BrowserRouter as Router, Route } from "react-router-dom";

import { Selection, ComicSearch, CharacterSearch } from "../components"

import { Container } from "./App.styled";

export default class App extends Component {
  render() {
    return (
      <Router>
        <Container>
          <Route path="/" exact component={Selection} />
          <Route path="/characters" exact component={CharacterSearch} />
          <Route path="/comics" exact component={ComicSearch} />
        </Container>
      </Router>
    )
  }
}
