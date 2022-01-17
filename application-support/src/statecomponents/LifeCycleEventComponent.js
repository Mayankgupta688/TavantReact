import React from 'react';

export default class LifeCycleEventComponent extends React.Component {
    constructor() {
        super();
        this.state = {
            counter: 0,
            updateValue: 0,
            someArray: [10, 20, 3]
        }
    }

    incrementCounter = (event) => {
        this.setState({
            counter: this.state.counter + 1
        });
    }

    shouldComponentUpdate(nextProps, nextState) {

        if(nextState.counter >= 105) {
            return false;
        }

        console.log(this.state.counter);

        return true;
    }

    updateInputValue = (event) => {
        this.setState({
            ...this.state,
            updateValue: event.target.value
        })
    }

    render() {
        return (
            <div>
                <h1>Counter Value is: {this.state.counter}</h1><br/>
                <label>Enter Some Value: </label><input type="text" value={this.state.updateValue} onChange={this.updateInputValue}/><br/><br/>

                {this.state.someArray.map((val) => {
                    return <h3>The Iterated Value is {val}</h3>
                })}

                {this.state.updateValue > 100 && (
                    <div>
                        <label>Enter Some Age: </label><input type="text" /><br/><br/>
                        <label>Enter Some Salary: </label><input type="text"/><br/><br/>
                    </div>
                )}
                <input type="button" onClick={this.incrementCounter} value="Click to Update Counter" />
            </div>
        )
    }

    componentDidUpdate() {
        //alert("Component did update event")
    }

    componentDidMount() {
        this.setState({
            counter: 100
        })
        //alert("This is component did mount event");
    }

    componentWillUnmount() {
        console.log("Component is going to be destroyed...");
    }
}