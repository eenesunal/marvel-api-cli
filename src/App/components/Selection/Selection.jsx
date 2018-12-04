import React from "react"
import { Redirect } from "react-router-dom"

import { Container, Characters, Comics, Overlay, Title } from "./Selection.styled"

export default class Selection extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            charactersHover: false,
            comicsHover: false,
            charactersClicked: false,
            comicsClicked: false,
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

    onCharacterClick = () => {
        this.setState({
            charactersClicked: true
        });
    }

    onComicClick = () => {
        this.setState({
            comicsClicked: true
        });
    }

    render() {
        const { charactersHover, charactersClicked, comicsHover, comicsClicked } = this.state;

        if (charactersClicked) return <Redirect push to="/characters" />
        if (comicsClicked) return <Redirect push to="/comics" />

        return (
            <Container>
                <Characters
                    onMouseOver={this.onCharactersMouseOver}
                    onMouseLeave={this.onCharactersMouseLeave}
                >
                    {
                        charactersHover ?
                            <Overlay onClick={this.onCharacterClick}>
                                <Title>CHARACTERS</Title>
                            </Overlay> :
                            <React.Fragment />
                    }
                </Characters>
                <Comics
                    onMouseOver={this.onComicsMouseOver}
                    onMouseLeave={this.onComicsMouseLeave}
                >
                    {
                        comicsHover ?
                            <Overlay onClick={this.onComicClick}>
                                <Title>COMICS</Title>
                            </Overlay> :
                            <React.Fragment />
                    }
                </Comics>
            </Container>
        )
    }
}