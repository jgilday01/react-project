import React, { Component } from 'react';
import Jumbo from "./JumboComponent";
import GeneralInfo from "./GeneralInfoComponent";
import Events from './EventsComponent';

class Home extends Component {

    render() {
        return (
            <React.Fragment>
                <Jumbo />
                <div className="container-fluid">
                    <div className="row my-3">
                        <div className="col-12 offset-sm-1 col-sm-10">
                            <div className="highlight">
                                <h2 className="text-center">Sweet, Savory and Satisfying</h2>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="container-fluid">
                    <div className="row">
                        <div className="col-12 offset-sm-1 col-sm-10">
                            <div className="home-text-lrg my-3">
                                <h4 className="text-justify">
                                    Our cooks use fresh ingredients and cook with a passion for creating flavorful food.
                                    We have delicious options available for breakfast, lunch and dinner.
                                    Bring a healthy appetite and be delighted!
                                </h4>
                            </div>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-12 offset-sm-1 col-sm-10">
                            <hr className="line" />
                        </div>
                    </div>

                    <GeneralInfo />
                    <Events />
                </div>
            </React.Fragment>
        );
    }
}

export default Home;