import React, { Component } from "react";

class ScrollToTop extends Component {
    scrollToTop() {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    }

    render() {
        return (
            <div className="col-12 text-center col-md-2 my-auto">
                <div className=" scroll-to-top up-wrap mx-auto float-md-right my-3">
                    <div onClick={() => this.scrollToTop()}>
                        <i className="fa fa-arrow-circle-up" aria-hidden="true" />
                    </div>
                </div>
            </div>
        );
    }
}

export default ScrollToTop;