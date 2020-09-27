import React from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { UncontrolledCarousel } from "reactstrap";

const mapStateToProps = state => {
    return {
        items: state.items
    };
};

const SpecialEventsSlider = (props) => (
    <UncontrolledCarousel items={props.items} />
);

export default withRouter(connect(mapStateToProps)(SpecialEventsSlider));
