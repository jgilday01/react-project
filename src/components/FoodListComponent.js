import React, { Component } from 'react';
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
            <div key={food.id}>
                <img src={food.src} alt={food.alt} />
                <div className="d-none d-md-block">
                    <h1>{food.section}</h1>
                    {food.items.map((item) => {
                        return (
                            <div key={item.id}>
                                <h4>{item.head}</h4>
                                <p>{item.desc}</p>
                            </div>
                        );
                    })}
                </div>
            </div>
        );

        return (
            <h1>{listItems}</h1>
        );
    }
}

export default withRouter(connect(mapStateToProps)(FoodList));