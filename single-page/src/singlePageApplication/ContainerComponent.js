import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import HeaderComponent from './HeaderComponent';
import FooterComponent from './FooterComponent';
import ContentComponent from './ContentComponent';

export default class ContainerComponent extends React.Component {
    render() {
        return (
            <BrowserRouter>
                <div>
                    <HeaderComponent></HeaderComponent>
                    <ContentComponent></ContentComponent>
                    <FooterComponent></FooterComponent><hr/>
                </div>
            </BrowserRouter>
        )
    }
}