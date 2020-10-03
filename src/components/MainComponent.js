import React, { Component } from 'react';
import { Switch, Route, Redirect, withRouter } from 'react-router-dom';
import Header from "./HeaderComponent";
import Footer from "./FooterComponent";
import Home from './HomeComponent';
import Menu from "./MenuComponent";
import Contact from "./ContactComponent";
import { connect } from 'react-redux';
import { actions } from 'react-redux-form';

const mapDispatchToProps = {
    resetFeedbackForm: () => (actions.reset('feedbackForm')),
};

class Main extends Component {
    render() {
        return (
            <div>
                <Header />
                <Switch>
                    <Route path="/home" component={Home} />
                    <Route path="/menu" component={Menu} />
                    <Route path="/contact" render={() => <Contact resetFeedbackForm={this.props.resetFeedbackForm} />} />
                    <Redirect to='/home' />
                </Switch>
                <Footer />
            </div>
        );
    }
}

export default withRouter(connect(null, mapDispatchToProps)(Main));
//export default withRouter(Main);
