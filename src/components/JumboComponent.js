import React, { Component } from 'react';
import { Jumbotron } from 'reactstrap';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

const mapStateToProps = state => {
    return {
        images: state.banners
    };
};

class Jumbo extends Component {
    render() {
        const listItems = this.props.images.map((image) =>
            <li key={image.id}>
                <img src={image.src} alt={image.alt} />
                <div className="d-none d-md-block">
                    <strong>{image.txt}</strong>
                </div>
            </li>
        );

        return (
            <Jumbotron className="p-0">
                <div className="container-fluid p-0">
                    <div className="row">
                        <div className="col-12">
                            <div id="page-top">
                                <ul className="products m-0">{listItems}</ul>
                            </div>
                            <div className="d-block d-md-none text-center text-white my-dark-bg p-3">
                                <h1>Muffins, Meatballs & Mules</h1>
                            </div>
                        </div>
                    </div>
                </div>
            </Jumbotron>
        );
    }
}

export default withRouter(connect(mapStateToProps)(Jumbo));