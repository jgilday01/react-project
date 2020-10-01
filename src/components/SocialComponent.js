import React from 'react';

function SocialSharing() {
    return (
        <div className="row my-4">
            <div className="col-12 offset-sm-1 col-sm-10">
                <div className="card mx-auto" style={{ width: 280 }}>
                    <div className="card-body bg-lightr">
                        <div className="social-share text-center">
                            <h3>Share our Menu</h3>
                            <a href="https://www.facebook.com/sharer/sharer.php?u=http://w3eatery.com/menu.html"
                                className="btn btn-lg btn-social-icon btn-facebook"
                                target="_blank" rel="noopener noreferrer">
                                <i className="fa fa-facebook" />
                            </a>

                            <a href="https://twitter.com/intent/tweet?url=http://w3eatery.com/menu.html"
                                className="btn btn-lg btn-social-icon btn-twitter"
                                target="_blank" rel="noopener noreferrer">
                                <i className="fa fa-twitter" />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default SocialSharing;