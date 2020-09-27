import React, { Component } from 'react';
import { Switch, Route, Redirect, withRouter } from 'react-router-dom';
import Header from "./HeaderComponent";
import Footer from "./FooterComponent";
import Home from './HomeComponent';
import Menu from "./MenuComponent";

class Main extends Component {
    render() {
        return (
            <div>
                <Header />
                <Switch>
                    <Route path="/home" component={Home} />
                    <Route path="/menu" component={Menu} />
                    <Redirect to='/home' />
                </Switch>
                <Footer />
            </div>
        );
    }
}

export default withRouter(Main);