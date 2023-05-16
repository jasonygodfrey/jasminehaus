import React from 'react';
import { Link } from 'react-scroll';

const PageTitleHome = () => {
    return (
        <section id="page-title" className="block">
            <div className="wrapper">
                <div className="row">
                    <div className="col col-1 position-relative">
                        <div className="title">
                            <h1 className="h">Jasmine Haus<span className="dot">.</span></h1>

                            <div className="title-clone">Jasmine Haus</div>
                        </div>

                        <div className="spacer p-top-lg">
                            <p className="p-large w-75">Phillipino Non-Profit</p>
                        </div>
                    </div>

                    <div className="col col-2 d-none d-sm-block">
                        <div className="d-flex">
                            <div className="align-self-start w-100">
                                <div className="img object-fit">
                                    <div className="object-fit-cover">
                                        <img src="assets/img/phflag.png" className="img-fluid" alt="Luca Reynolds" />
                                    </div>
                                </div>
                            </div>

                            
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default PageTitleHome;
