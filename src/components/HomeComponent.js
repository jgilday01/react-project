import React, { Component } from 'react';
import Jumbo from "./JumboComponent";

class Home extends Component {

    render() {
        return (
            <React.Fragment>
                <Jumbo />
                <div className="container">
                    <div className="row">
                        <div className="col-12 text-center text-md-left offset-md-1 col-md-8">
                            <h1>HOME</h1>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}

export default Home;