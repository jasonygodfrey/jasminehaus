import React from 'react';
import { Link } from 'react-scroll';
import SimpleScene from './SimpleScene';  // Import your SimpleScene component

const titleStyle = {
  overflowWrap: 'break-word',
  fontFamily: '"Ubuntu-Bold", sans-serif',
  color: '#2b2b2b',
};

// Add inline style for Three.js background
const threeJsBackgroundStyle = {
  position: 'absolute',
  top: 0,
  left: 0,
  width: '100%',
  height: '100%',
  zIndex: -1,  // So that the content appears on top
};

const PageTitleHome = () => {
  return (
    <>
      {/* Add CSS to make Three.js canvas fill its container */}
      <style>
        {`
          .threejs-container canvas {
            width: 100% !important;
            height: 100% !important;
          }
        `}
      </style>

      <section id="page-title" className="block" style={{ position: 'relative' }}>
        {/* Add the SimpleScene component here and apply the background style */}
        <div className="threejs-container" style={threeJsBackgroundStyle}>
          <SimpleScene />
        </div>

        <div className="wrapper">
          <div className="row">
            <div className="col col-1 position-relative">
              <div className="title">
                <h1 className="h" style={titleStyle}>
                  Jasmine <br /> Haus<span className="dot">.</span>
                </h1>
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
                  {/* <img src="assets/img/phflag.png" className="img-fluid" alt="Flag" /> */}

                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default PageTitleHome;
