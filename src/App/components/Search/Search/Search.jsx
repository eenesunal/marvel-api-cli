import React from "react"

import { Input } from "../../../commons"
import { Header, SearchButton as Button } from "./Search.styled"

import logo from "../../../../assets/img/logo.png"

export default class CharacterSearch extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            searchKey: "",
            search: false,
        }
    }

    onSearchKeyChange = (e) => {
        let searchKey = e.currentTarget.value
        this.setState({ searchKey })
    }

    onSearch = (e) => {
        this.props.onSearch(this.state.searchKey);
    }

    render() {
        return (
            <Header>
                <img
                    alt="logo"
                    src={logo}
                />
                <Input
                    onChange={this.onSearchKeyChange}
                    placeholder="Type a Marvel character name.."
                />
                <Button onClick={this.onSearch}>Search</Button>
            </Header>
        )
    }
}