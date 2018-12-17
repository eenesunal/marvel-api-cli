import React from "react"
import { map } from "lodash"
import { Redirect } from "react-router-dom"

import { getJSON } from "../../../../request"

import { Box, Description, Container, Left, Name, Right, Thumbnail, ThumbnailOverlay, ThumbnailText, Results } from "./CharacterResult.styled"
import { Header, SearchButton as Button } from "../../Search/CharacterSearch/CharacterSearch.styled"
import { Input } from "../../../commons/index"

export default class CharacterResult extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            result: [],
            characters: [],
            characterSelected: false,
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

    onCharacterSelect = (e) => {
        this.setState({
            characterSelected: true,
            selectedCharacterId: e.currentTarget.attributes.id.value
        })
    }

    render() {
        const { characters, characterSelected, notFound, selectedCharacterId } = this.state

        if (notFound) return <Redirect push to="/characters" />
        if (characterSelected) return <Redirect push to={`/characters/detail/${selectedCharacterId}`} />

        return (
            <Container>
                <Header>
                    <Input
                        placeholder="Type a Marvel character name.."
                    />
                    <Button>Search</Button>
                </Header>
                <Results>
                    {
                        map(characters, (character, key) => {
                            if (!character.description && (character.description === "" || character.description === " ")) {
                                character.description = "Description not found."
                            }

                            return (
                                <Box key={key}>
                                    <Left>
                                        <Thumbnail src={`${character.thumbnail.path}.${character.thumbnail.extension}`} />
                                        <ThumbnailOverlay>
                                            <ThumbnailText
                                                id={character.id}
                                                onClick={this.onCharacterSelect}
                                            >
                                                {character.name}
                                            </ThumbnailText>
                                        </ThumbnailOverlay>
                                    </Left>
                                    <Right>
                                        <Name
                                            id={character.id}
                                            onClick={this.onCharacterSelect}
                                        >
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
                </Results>
            </Container>
        )
    }
}