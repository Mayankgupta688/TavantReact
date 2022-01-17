import React from 'react';
import Axios from "axios";
import EmployeeComponent from "../components/EmployeeComponent"

export default class EmployeeListingComponent extends React.Component {
    constructor() {
        super();
        this.state = {
            employeeList: [],
            isError: false
        }

        Axios.interceptors.request.use(function (config) {
            return config;
        }, function (error) {
              debugger;
            return Promise.reject(error);
        });
    }

    render() {
        return (
            <div>
                <h1>Employee for TechnoFunnel are:</h1><hr/>
                { this.state.isError === false && (
                    <div>
                        {this.state.employeeList.map((employee) => {
                            return <EmployeeComponent {...employee}></EmployeeComponent>
                        })}
                    </div>
                )}

                { this.state.isError === true && (
                    <div>
                        <h1>Error While retrieving Data</h1>
                    </div>
                )}
                
            </div>
        )
    }

    componentDidMount() {
        if(window.location.href.indexOf("localhost")) {
            import("../common/config").then((configData) => {

                fetch(configData.config.employeeListUrl).then(response => {
                    debugger;
                    return response.json()
                }).then((processedResponse) => {
                    console.log(processedResponse);
                })

                Axios.get(configData.config.employeeListUrl).then((response) => {
                    this.setState({
                        employeeList: response.data,
                        isError: false
                    })
                }, (err) => {
                    this.setState({
                        ...this.state,
                        isError: true
                    })
                })
            })
            
        }
    }
}