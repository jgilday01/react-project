import React from 'react';

function CardDetail() {

    return (
        <div className="card w-100">
            <div className="card-header bg-dark text-white">
                <h3 className="text-center">Events and Specials</h3>
            </div>
            <div className="card-body events-bg">
                <div className="text-center home-text-lrg">
                    <p>Tasty Muffins at a reduced price on Tuesday&nbsp;morning.</p>
                    <p>Exciting LIVE acoustic music on Wednesday&nbsp;nights.</p>
                    <p>Refreshing&nbsp;Mules reduced prices on Thursday&nbsp;nights.</p>
                    <p>Game Night on Friday nights.<br />It's fun for the whole family!</p>
                </div>
            </div>
        </div>
    );

}

export default CardDetail;