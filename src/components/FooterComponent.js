import React, { Component } from 'react';

class Footer extends Component {
    render() {
        return (
            <footer className="py-4">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-12 text-center text-md-left offset-md-1 col-md-8">
                            <div>
                                Muffins, Meatballs & Mules &copy;2020
                            </div>
                            <div>
                                <i className="fa fa-phone" aria-hidden="true"></i><span> 215-555-1212 </span>
                            </div>
                            <div>
                                <i className="fa fa-clock-o" aria-hidden="true"></i><span> M - F 8am - 8pm </span>
                            </div>
                        </div>
                        <div className="col-12 text-center col-md-2 my-auto">
                            <div id="scroll-to-top" className="up-wrap mx-auto float-md-right my-3">
                                <i className="fa fa-arrow-circle-up" aria-hidden="true"></i>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        );
    }
}

export default Footer;