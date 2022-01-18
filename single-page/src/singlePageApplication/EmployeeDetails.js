import Axios from 'axios';
import React from 'react';

export default class EmployeeDetails extends React.Component {

    constructor() {
        super();
        this.state = {
            userName: "",
            userId: ""
        }
    }

    componentDidMount() {
        Axios.get("http://localhost:4000/employees/" + this.props.match.params.id).then((response) => {
            this.setState({
                userName: response.data.name,
                userId: response.data.id
            })
        })
    }

    render() {
        return (
            <div>
                    <h1>Employee Details for Employee Id: {this.props.match.params.id}</h1>
                    <h2>Employee Name is: {this.state.userName}</h2>
                    <h2>Employee Id is: {this.state.userId}</h2>
                    <input type="button" onClick={this.changePath} value="Change" />
            </div>
        )
    }
}