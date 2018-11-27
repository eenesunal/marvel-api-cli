import React, { Component } from 'react'

import { Selection } from "../components"

import { Container } from "./App.styled";

export default class App extends Component {
  render() {
    return (
      <Container>
        <Selection />
      </Container>
    )
  }
}
