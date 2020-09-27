import React from 'react';
import SpecialEventsSlider from "./CarouselComponent";
import CardDetail from "./CardDetailComponent";

function SpecialEvents() {
    return (
        <div className="row my-4">
            <div className="col-12 offset-sm-1 col-sm-10 col-lg-5">
                <div className="my-3">
                    <SpecialEventsSlider />
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

export default SpecialEvents;