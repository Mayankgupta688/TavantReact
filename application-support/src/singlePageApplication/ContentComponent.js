import React from 'react';
import { Routes, Route} from "react-router-dom";
import AboutComponent from './AboutComponent';
import HelpComponent from './HelpComponent';
import HomeComponent from './HomeComponent';
import Axios from "axios";

export default class ContentComponent extends React.Component {

    constructor() {
        super();
        this.state = {
            employeeList: []
        }
    }

    render() {
        debugger;
        return (
            <div style={{"border": "1px solid red", "height": "1000px", "padding": "10px", overflow: "auto"}}>
                <h1>This is Content Component</h1>
                    <Routes>
                        <Route path="/" element={<HomeComponent employeeList={this.state.employeeList} />} />
                        <Route path="/about" element={<AboutComponent />} />
                        <Route path="/help" element={<HelpComponent />} />
                    </Routes>
            </div>
        )
    }

    componentDidMount() {
        debugger;
        Axios.get("https://5a530e1477e1d20012fa066a.mockapi.io/login").then((response) => {
            debugger;
            this.setState({
                employeeList: response.data
            })
        });
    }
}