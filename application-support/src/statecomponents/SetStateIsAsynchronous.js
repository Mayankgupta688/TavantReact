import React from "react";

export default class SetStateIsAsynchronous extends React.Component {
    constructor() {
        super();

        this.state = {
            counter:  0
        }
        
        this.setState({
            counter: this.state.counter + 1
        });

        this.setState({
            counter: this.state.counter + 1
        });

        this.setState({
            counter: this.state.counter + 1
        });

        this.setState({
            counter: this.state.counter + 1
        });
    }

    render() {
        return (
            <h1>The Current Counter for Updated {this.state.counter}</h1>
        )
    }    
}