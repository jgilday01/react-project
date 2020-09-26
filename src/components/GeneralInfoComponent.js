import React from 'react';

function GeneralInfo() {
    return (

        <div className="row my-4">
            <div className="col-12 offset-sm-1 col-sm-10 col-md-5 py-3">
                <div className="card h-100">
                    <div className="card-body d-flex flex-column bg-light">
                        <h4>CARRY OUT:</h4>
                        <div className="home-text-lrg">
                            You are welcome to place a carry-out order at any time.
                            Please feel free to call in or order at the counter.
                            When you come inside a mask is required and social distancing must be observered.
                        </div>
                        <div className="mt-auto">
                            <a href="menu.html" className="btn btn-orange btn-large mt-4">View our Menu</a>
                        </div>
                    </div>
                </div>
            </div>
            <div className="col-12 offset-sm-1 col-sm-10 offset-md-0 col-md-5 py-3">
                <div className="card h-100">
                    <div className="card-body d-flex flex-column covid-box">
                        <h4>BEFORE YOU DINE IN:</h4>
                        <div className="home-text-lrg">
                            Due to social distancing, we require reservations for dining in.
                            We are limiting the guest count to 4 per table.
                            Masks can be removed at the table, but should be worn all other times.
                        </div>
                        <div className="mt-auto">
                            <a href="#reserveModal" className="btn btn-orange btn-large mt-4" data-toggle="modal">Reserve a Table</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );

}

export default GeneralInfo;