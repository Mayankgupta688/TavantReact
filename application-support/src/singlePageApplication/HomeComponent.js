import React from 'react';
import EmployeeComponent from "../components/EmployeeComponent";
import Axios from "axios";

export default class HomeComponent extends React.Component {

    constructor() {
        super();
        this.state = {
            employeeList: []
        }
    }

    componentDidMount() {
        Axios.get("https://5a530e1477e1d20012fa066a.mockapi.io/login").then((response) => {
            debugger;
            this.setState({
                employeeList: response.data
            })
        });
    }

    render() {
        debugger;
        return (
            <div>
                {this.state.employeeList.map((employee) => {
                    return <EmployeeComponent {...employee}></EmployeeComponent>
                })}
            </div>
        )
    }
}