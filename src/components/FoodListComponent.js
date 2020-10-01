import React, { Component } from 'react';
import { UncontrolledCollapse, Card, CardHeader, CardBody } from 'reactstrap';

import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

const mapStateToProps = state => {
    return {
        foods: state.foods
    };
};

class FoodList extends Component {
    render() {

        const listItems = this.props.foods.map((food) =>
            <Card key={food.id}>
                <CardHeader id="headingOne" className="menu-head">
                    <h5 className="mb-0">
                        <button id={"toggler" + food.id} className="btn btn-link">
                            <div className="pull-left">{food.section}</div>
                            <i className="pull-right fa fa-caret-up" aria-hidden="true"></i>
                        </button>
                    </h5>
                </CardHeader>
                <UncontrolledCollapse toggler={"#toggler" + food.id} defaultOpen={food.id===1?true:false}>
                    <CardBody className="menu-item">
                        <div className="row">
                            <div className="col-12 order-md-12 col-md-5 text-center my-auto">
                                <img className="menu-image" src={food.src} alt={food.alt} />
                            </div>
                            <div className="col-12 order-md-1 col-md-7 text-center text-md-left my-auto">
                                {food.items.map((item) => 
                                    <div key={item.id}>
                                        <h4>{item.head}</h4>
                                        <p>{item.desc}</p>
                                    </div>
                                )}
                            </div>
                        </div>
                    </CardBody>
                </UncontrolledCollapse>
            </Card>

        );


        return (
            <div className="container-fluid">
                <div className="row mb-5">
                    <div className="col-12 offset-sm-1 col-sm-10 offset-xl-2 col-xl-8">
                        <div>{listItems}</div>
                    </div>
                </div>
            </div>
        );
    }
}

export default withRouter(connect(mapStateToProps)(FoodList));