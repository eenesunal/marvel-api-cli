import React from "react"

import { map, sortBy } from "lodash"
import { getJSON } from "../../../../request"

import { Container, Content, Header } from "./CharacterSearch.styled"
import { Input, Link, VerticalList as List } from "../../../commons"

export default class CharacterSearch extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            characters: [],
            callLimit: 50,
            callOffset: 0,
            searchKey: "",
            searchResult: []
        }
    }

    componentDidMount() {
        getJSON({
            url: "characters",
            limit: this.state.callLimit,
            offset: this.state.callOffset
        })
            .then(this.onCharactersSuccess)
            .catch(this.onCharactersFailure)
    }

    onSearchChange = (e) => {
        let searchKey = e.currentTarget.value
        this.setState({ searchKey }, () => {
            if (this.state.searchKey.length > 2) {
                getJSON({
                    url: "characters",
                    limit: this.state.callLimit,
                    nameStartsWith: this.state.searchKey
                })
                    .then(this.onSearchSuccess)
                    .catch(this.onCharactersFailure)
            }
        })
    }

    loadMore = () => {
        getJSON({
            url: "characters",
            limit: this.state.callLimit,
            offset: this.state.callOffset
        })
            .then(this.onLoadMoreSuccess)
            .catch(this.onCharactersFailure)
    }

    onCharactersSuccess = (resolve) => {
        this.setState({
            characters: resolve.data.results,
            callOffset: this.state.callOffset + this.state.callLimit
        })
    }

    onSearchSuccess = (resolve) => {
        this.setState({
            searchResult: resolve.data.results
        })
    }

    onCharactersFailure = (error) => {
        alert("An error occured while fetching characters data.")
        console.log(error)
    }

    onLoadMoreSuccess = (resolve) => {
        let characters = resolve.data.results
        this.state.characters.forEach((character) => {
            characters.push(character)
        })

        characters = sortBy(characters, ["name"])

        this.setState({
            characters: characters,
            callOffset: this.state.callOffset + this.state.callLimit
        })
    }


    render() {
        const { characters } = this.state

        return (
            <Container>
                <Header>
                    <Input
                        onChange={this.onSearchChange}
                        placeholder="Type a Marvel character name.."
                    />
                </Header>
                <Content>
                    {
                        characters.length > 0 ?
                            <List>
                                {
                                    map(characters, (character, key) => {
                                        return (
                                            <li key={key}>
                                                <Link href="#">{character.name}</Link>
                                            </li>
                                        )
                                    })
                                }
                                <li>
                                    <Link onClick={this.loadMore} href="#">Load more..</Link>
                                </li>
                            </List> :
                            <React.Fragment />
                    }
                </Content>
            </Container>
        )
    }
}