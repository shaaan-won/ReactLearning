import React from "react";

const Breadcrumb = () => {
  return (
    <div className="breadcrumb-section section-bg overflow-hidden pos-relative">
      <div className="breadcrumb-shape-top-left" />
      <div className="breadcrumb-shape-bottom-right" />
      <div className="breadcrumb-box">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="breadcrumb-content">
                <h2 className="title">About Us</h2>
                <ul className="breadcrumb-link">
                  <li>
                    <a href="index.html">Home</a>
                  </li>
                  <li className="active" aria-current="page">
                    About
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Breadcrumb;
