import React, { Component } from 'react'

export default class ProfilePage extends Component {

    constructor(props) {
        super();
        this.state = {
            count: 0
        }
    }

    handleIncrease() {
        this.setState({
            count: this.state.count + 1
        })
    }

    render() {
        console.log(this.props.model);
        return (
            <div>
                <h1>Thanks for visiting the Profile Page</h1>
                <h2>The Profile ID is {this.props.profileId}</h2>
                <h5>Count is: {this.state.count}</h5>
                <button onClick={this.handleIncrease.bind(this)}>Increase</button>
            </div>
        )
    }
}
