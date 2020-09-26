
import React, { Component } from 'react';
import { Jumbotron } from 'reactstrap';

const images = [
    { id: 1, src: '/assets/images/muffins.jpg', alt: 'muffins by roberto-martinez', txt: 'Muffins' },
    { id: 2, src: '/assets/images/meatballs.jpg', alt: 'meatball by jason-leung"', txt: 'Meatballs' },
    { id: 3, src: '/assets/images/mules.jpg', alt: 'mule drink by miguel-maldonado', txt: 'Mules' }
];

const listItems = images.map((image) =>
    <li key={image.id}>
        <img src={image.src} alt={image.alt} />
        <div className="d-none d-md-block">
            <strong>{image.txt}</strong>
        </div>
    </li>
);


class Jumbo extends Component {

    render() {
        return (

            <Jumbotron className="p-0">
                <div className="container-fluid p-0">
                    <div className="row">
                        <div className="col-12">
                            <div id="page-top">
                                <ul className="products m-0">{listItems}</ul>
                            </div>
                        </div>
                    </div>
                </div>
            </Jumbotron>

        );
    }
}

export default Jumbo;