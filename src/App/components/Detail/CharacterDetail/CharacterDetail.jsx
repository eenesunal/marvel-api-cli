import React from "react"
import { map } from "lodash"

import { getJSON } from "../../../../request"

import { ListWrapper, ListItem, VerticalList, ListItemText, ListItemHeader, Container, Description, Image, ImageWrapper, Information, Name } from "./CharacterDetail.styled"

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
        this.setState({ result: result, character: result.data.results[0] })
    }

    onCharacterFailure = (error) => {
        alert("An error occured while fetching character data.")
        console.error(error)
    }

    render() {
        const { character } = this.state
        if (character) {
            return (
                <Container>
                    <ImageWrapper>
                        <Image src={`${character.thumbnail.path}.${character.thumbnail.extension}`} />
                    </ImageWrapper>
                    <Information>
                        <Name>{character.name}</Name>
                        <Description>{character.description}</Description>
                    </Information>
                    <ListWrapper>
                        <VerticalList>
                            <ListItemHeader>Featured Comics</ListItemHeader>
                            {
                                character.comics.items.length > 0 ?
                                    map(character.comics.items, (comic, key) => {
                                        return (
                                            <ListItem key={key}>
                                                <ListItemText>{comic.name}</ListItemText>
                                            </ListItem>
                                        )
                                    }) :
                                    <ListItem>
                                        <ListItemText>No comics found.</ListItemText>
                                    </ListItem>
                            }
                        </VerticalList>
                        <VerticalList>
                            <ListItemHeader>Featured Events</ListItemHeader>
                            {
                                character.events.items.length > 0 ?
                                    map(character.events.items, (event, key) => {
                                        return (
                                            <ListItem key={key}>
                                                <ListItemText>{event.name}</ListItemText>
                                            </ListItem>
                                        )
                                    }) :
                                    <ListItem>
                                        <ListItemText>No events found.</ListItemText>
                                    </ListItem>
                            }
                        </VerticalList>
                        <VerticalList>
                            <ListItemHeader>Featured Series</ListItemHeader>
                            {
                                character.series.items.length > 0 ?
                                    map(character.series.items, (serie, key) => {
                                        return (
                                            <ListItem key={key}>
                                                <ListItemText>{serie.name}</ListItemText>
                                            </ListItem>
                                        )
                                    }) :
                                    <ListItem>
                                        <ListItemText>No series found.</ListItemText>
                                    </ListItem>
                            }
                        </VerticalList>
                        <VerticalList>
                            <ListItemHeader>Featured Stories</ListItemHeader>
                            {
                                character.stories.items.length > 0 ?
                                    map(character.stories.items, (story, key) => {
                                        return (
                                            <ListItem key={key}>
                                                <ListItemText>{story.name}</ListItemText>
                                            </ListItem>
                                        )
                                    }) :
                                    <ListItem>
                                        <ListItemText>No stories found.</ListItemText>
                                    </ListItem>
                            }
                        </VerticalList>
                    </ListWrapper>
                </Container>
            )
        } else {
            return (
                <React.Fragment />
            )
        }
    }
}