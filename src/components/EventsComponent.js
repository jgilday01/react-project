import React from 'react';
//import SpecialEventsSlider from "./CarouselComponent";
import CardDetail from "./CardDetailComponent";

import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { UncontrolledCarousel } from "reactstrap";

const mapStateToProps = state => {
    return {
        items: state.items
    };
};

/*
const SpecialEventsSlider = (props) => (
    <UncontrolledCarousel items={props.items} />
);
*/

function SpecialEvents(props) {

    return (
        <div className="row my-4">
            <div className="col-12 offset-sm-1 col-sm-10 col-lg-5">
                <div className="my-3">                    
                    <UncontrolledCarousel items={props.items} />
                </div>
            </div>
            <div className="col-12 offset-sm-1 col-sm-10 offset-lg-0 col-lg-5">
                <div className="h-100 d-flex align-items-center">
                    <CardDetail />
                </div>
            </div>
        </div>
    );
}

//export default SpecialEvents;
export default withRouter(connect(mapStateToProps)(SpecialEvents));
