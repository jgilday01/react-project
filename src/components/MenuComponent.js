import React, { Component } from 'react';
import FoodList from './FoodListComponent'
import SocialSharing from './SocialComponent';

class Menu extends Component {
    render() {
        return (
            <React.Fragment>
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-12 offset-sm-1 col-sm-10 offset-xl-2 col-xl-8">
                            <div className="home-text-lrg my-5">
                                <h4 className="text-justify">
                                    We offer Muffins, Meatballs and Mules as well as a house special soup, salad and chili.
                                    We have turkey and veggie options as part of our meatball selections.
                                </h4>
                            </div>
                        </div>
                    </div>
                </div>

                <FoodList />

                <SocialSharing />

                <div className="row d-none d-sm-block">
                    <div className="col-12 offset-sm-1 col-sm-10 offset-xl-2 col-xl-8">
                        <div className="my-5">
                            <figure className="figure">
                                <img src={"assets/images/fresh.jpg"} className="figure-img img-fluid rounded"
                                    alt={"chop fresh veggie by alyson-mcphee"} />
                                <div className="overlay-text">
                                    <h5>Our dishes are prepared to order with only the freshest ingredients.</h5>
                                </div>
                            </figure>
                        </div>
                    </div>
                </div>

            </React.Fragment>
        );
    }
}

export default Menu;
