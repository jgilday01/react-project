import React from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { UncontrolledCarousel } from "reactstrap";
import { Fade, Stagger } from 'react-animation-components';

const mapStateToProps = state => {
    return {
        items: state.items
    };
};

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
                    <div className="card w-100">
                        <div className="card-header bg-dark text-white">
                            <h3 className="text-center">Events and Specials</h3>
                        </div>
                        <div className="card-body events-bg">
                            <div className="text-center home-text-lrg">
                                <Stagger in>
                                    <Fade><p>Tasty Muffins at a reduced price on Tuesday&nbsp;morning.</p></Fade>
                                    <Fade><p>Exciting LIVE acoustic music on Wednesday&nbsp;nights.</p></Fade>
                                    <Fade><p>Refreshing&nbsp;Mules reduced prices on Thursday&nbsp;nights.</p></Fade>
                                    <Fade><p>Game Night on Friday nights.<br />It's fun for the whole family!</p></Fade>
                                </Stagger>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

//export default SpecialEvents;
export default withRouter(connect(mapStateToProps)(SpecialEvents));
