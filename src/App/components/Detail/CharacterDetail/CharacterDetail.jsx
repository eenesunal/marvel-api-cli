import React from "react"

import { getJSON } from "../../../../request"

export default class CharacterDetail extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            result: null,
            character: null
        }
    }

    componentDidMount() {
        getJSON({url: `characters/${this.props.match.params.characterId}`})
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
        return (
            <span>Character Detail</span>
        )
    }
}