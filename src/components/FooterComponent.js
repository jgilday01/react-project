import React, { Component } from 'react';
import ScrollToTop from "./ScrollToTop";

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
                        <ScrollToTop />
                    </div>
                </div>
            </footer>
        );
    }
}

export default Footer;