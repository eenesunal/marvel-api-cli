import React from "react"
import { map } from "lodash"
import { Link } from "react-router-dom"

import { getJSON } from "../../../../request"

import { Comic, ComicsList, ComicName, Container, Description, Image, ImageWrapper, Information, Name } from "./CharacterDetail.styled"

export default class CharacterDetail extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            result: null,
            character: null
        }
    }

    componentDidMount() {
        getJSON({ url: `characters/${this.props.match.params.characterId}` })
            .then(this.onCharacterSuccess)
            .catch(this.onCharacterFailure)
    }

    onCharacterSuccess = (result) => {
        this.setState({ result: result, character: result.data.results[0] }, () => {
            console.log(this.state)
        })
    }

    onCharacterFailure = (error) => {
        alert("An error occured while fetching character data.")
        console.error(error)
    }

    render() {
        const {character} = this.state
        if(character) {
            return (
                <Container>
                    <ImageWrapper>
                        <Image src={`${character.thumbnail.path}.${character.thumbnail.extension}`} />
                    </ImageWrapper>
                    <Information>
                        <Name>{ character.name }</Name>
                        <Description>{ character.description }</Description>
                    </Information>
                    <ComicsList>
                        {
                            map(character.comics.items, (comic, key) => {
                                return (
                                    <Comic key={key}>
                                        <ComicName>{comic.name}</ComicName>
                                        <Link to={comic.resourceURI} />
                                    </Comic>
                                )
                            })
                        }
                    </ComicsList>
                </Container>
            )
        } else {
            return (
                <React.Fragment />
            )
        }
    }
}