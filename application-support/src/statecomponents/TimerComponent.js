import React from "react";

export default class TimerComponent extends React.Component {
    constructor() {
        super();

        this.state = {
            counter:  0,
            userName: "TechnoFunnel"
        }

        setInterval(() => {

            var effectiveName = this.state.counter % 2 ? "Mayank": "TechnoFunnel";

            this.setState({
                ...this.state,
                counter: this.state.counter + 1,
                userName: effectiveName
            });
        }, 1000)
    }

    render() {
        return (
            <h1>The Current Counter for {this.state.userName} is {this.state.counter}</h1>
        )
    }    
}