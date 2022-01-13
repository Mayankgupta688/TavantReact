import React from "react";

export default class TimerComponent extends React.Component {
    constructor() {
        super();

        this.state = {
            counter:  0,
            userName: "TechnoFunnel"
        };

        setInterval(() => {
            this.state.counter = this.state.counter + 1;
            console.log(this.state.counter);
            this.forceUpdate();
        }, 1000);
    }

    render() {
        return (
            <h1>The Current Counter for {this.state.userName} is {this.state.counter}</h1>
        );
    }    
}