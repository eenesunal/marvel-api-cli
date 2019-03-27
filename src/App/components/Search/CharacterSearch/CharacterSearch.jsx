import React from "react"
import { Redirect } from "react-router-dom"
import { map, sortBy } from "lodash"

import Search from "../Search/Search"

import { getJSON } from "../../../../request"

import { Container, Content } from "./CharacterSearch.styled"
import { Link, VerticalList as List } from "../../../commons"

export default class CharacterSearch extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            characters: [],
            callLimit: 50,
            callOffset: 0,
            searchKey: "",
            searchResult: [],
            search: false
        }
    }

    componentDidMount() {
        const cachedCharacters = localStorage.getItem("characters") ? JSON.parse(localStorage.getItem("characters")) : []

        if (!cachedCharacters || cachedCharacters.length < 1) {
            getJSON({
                url: "characters",
                limit: this.state.callLimit,
                offset: this.state.callOffset
            })
                .then(this.onCharactersSuccess)
                .catch(this.onCharactersFailure)
        } else {
            this.setState({
                characters: cachedCharacters,
                callOffset: this.state.callOffset + this.state.callLimit
            })
        }
    }

    onSearch = (searchKey) => {
        this.setState({
            search: true,
            searchKey: searchKey
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

        localStorage.setItem("characters", JSON.stringify(resolve.data.results))
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
        const { characters, search, searchKey } = this.state

        if (search) return <Redirect push to={`/characters/${searchKey}`} />

        return (
            <Container>
                <Search onSearch={this.onSearch} />
                <Content>
                    {
                        characters.length > 0 ?
                            <List>
                                {
                                    map(characters, (character, key) => {
                                        return (
                                            <li key={key}>
                                                <Link>{character.name}</Link>
                                            </li>
                                        )
                                    })
                                }
                                <li>
                                    <Link onClick={this.loadMore}>Load more..</Link>
                                </li>
                            </List> :
                            <React.Fragment />
                    }
                </Content>
            </Container>
        )
    }
}