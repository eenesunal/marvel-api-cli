import React from "react"
import { map } from "lodash"
import { Redirect } from "react-router-dom"

import { getJSON } from "../../../../request"

import { Box, Description, Container, Left, Name, Right, Thumbnail } from "./CharacterResult.styled"

export default class CharacterResult extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            result: [],
            characters: [],
            notFound: false
        }
    }

    componentDidMount() {
        getJSON({
            url: "characters",
            name: this.props.match.params.searchKey
        })
            .then(this.onSearchSuccess)
            .catch(this.onSearchFailure)
    }

    getWithSimilarKey = () => {
        getJSON({
            url: "characters",
            nameStartsWith: this.props.match.params.searchKey
        })
            .then(this.onSimilarSearchSuccess)
            .catch(this.onSearchFailure)
    }

    onSearchSuccess = (result) => {
        if (result && result.data.results.length > 0) {
            this.setState({ result })

            let characters = result.data.results
            this.setState({ characters })
        } else {
            this.getWithSimilarKey()
        }
    }

    onSimilarSearchSuccess = (result) => {
        if (result && result.data.results.length > 0) {
            this.setState({ result })

            let characters = result.data.results
            this.setState({ characters })
        } else {
            alert("No data found with your key.")
            this.setState({ notFound: true })
        }
    }

    onSearchFailure = (error) => {
        alert("An error occured while searching.")
        console.log(error)
    }

    render() {
        const { characters, notFound } = this.state
        console.log(characters)

        if (notFound) return <Redirect push to="/characters" />

        return (
            <Container>
                {
                    map(characters, (character, key) => {
                        return (
                            <Box key={key}>
                                <Left>
                                    <Thumbnail src={`${character.thumbnail.path}.${character.thumbnail.extension}`} />
                                </Left>
                                <Right>
                                    <Name>
                                        {character.name}
                                    </Name>
                                    <Description>
                                        {character.description}
                                    </Description>
                                </Right>
                            </Box>
                        )
                    })
                }
            </Container>
        )
    }
}