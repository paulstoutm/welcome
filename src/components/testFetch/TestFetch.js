import React from 'react'
class TestFetch extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            currentCharacter: {}
        }
    }
    componentDidMount() {
        this.myTestFetch()
    }
    myTestFetch() {
        fetch("https://swapi.dev/api/people/3")
            .then(res => res.json())
            .then(characterJSON => {
                console.log(characterJSON)
                this.setState({ currentCharacter: characterJSON })
            })
    }
    render() {
        return (
            <div className="TestFetch">
                Name: {this.state.currentCharacter.name}
                <br/> 
                Height: {this.state.currentCharacter.height}
                <br/> 
                
            </div>
        )
    }
}
export default TestFetch;