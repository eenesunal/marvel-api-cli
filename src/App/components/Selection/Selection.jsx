import React from "react"

import { Container, Characters, Comics, Overlay, Title } from "./Selection.styled";

export default class Selection extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            charactersHover: false,
            comicsHover: false
        }
    }

    onCharactersMouseOver = () => {
        this.setState({
            charactersHover: true
        })
    }

    onComicsMouseOver = () => {
        this.setState({
            comicsHover: true
        })
    }

    onCharactersMouseLeave = () => {
        this.setState({
            charactersHover: false
        })
    }

    onComicsMouseLeave = () => {
        this.setState({
            comicsHover: false
        })
    }

    render() {
        const { charactersHover, comicsHover } = this.state;
        return (
            <Container>
                <Characters onMouseOver={this.onCharactersMouseOver} onMouseLeave={this.onCharactersMouseLeave}>
                    {
                        charactersHover ?
                            <Overlay>
                                <Title>CHARACTERS</Title>
                            </Overlay> :
                            <React.Fragment />
                    }
                </Characters>
                <Comics onMouseOver={this.onComicsMouseOver} onMouseLeave={this.onComicsMouseLeave}>
                    {
                        comicsHover ?
                            <Overlay>
                                <Title>COMICS</Title>
                            </Overlay> :
                            <React.Fragment />
                    }
                </Comics>
            </Container>
        )
    }
}