import React from 'react';
import { Link } from "react-router-dom"

export default class HeaderComponent extends React.Component {

    render() {

        var data = {
            "marginRight": "20px",
            color: "red"
        }

        return (
            <div>
                <h1>This is Header Component</h1>

                <nav>
                    <Link style={{"marginRight": "20px",color: "red"}} to="/">Home</Link>
                    <Link style={data} to="/help">Help</Link>
                    <Link style={data} to="/about">About</Link>
                </nav>
            </div>
        )
    }
}