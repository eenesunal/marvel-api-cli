import React from "react"

import { map } from "lodash"
import { getJSON } from "../../../../request"

import { Container, Content, Header } from "./CharacterSearch.styled"
import { Input, VerticalList as List } from "../../../commons"

export default class CharacterSearch extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            characters: [],
            charactersFlat: []
        }
    }

    componentDidMount() {
        getJSON({ url: "characters" })
            .then(this.onCharactersSuccess)
            .catch(this.onCharactersFailure)
    }

    onCharactersSuccess = (resolve) => {
        this.setState({ characters: resolve.data.results })

        let charactersFlat = [];
        for (let i = 0; i < resolve.data.results.length; i++) {
            let dataItem = resolve.data.results[i]
            charactersFlat.push({ name: dataItem.name, id: dataItem.id })
        }
        this.setState({ charactersFlat })
    }

    onCharactersFailure = (error) => {
        alert("An error occured while fetching characters data.")
        console.log(error)
    }

    render() {
        const { charactersFlat } = this.state

        return (
            <Container>
                <Header>
                    <Input />
                </Header>
                <Content>
                    <List>
                        {
                            map(charactersFlat, (character) => {
                                return (
                                    <li>{character.name}</li>
                                )
                            })
                        }
                    </List>
                </Content>
            </Container>
        )
    }
}