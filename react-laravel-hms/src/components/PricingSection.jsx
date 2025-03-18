import React from "react";

const PricingSection = () => {
  return (
    <section id="price">
      <div className="empty-space col-md-b100 col-xs-b70" />
      <div className="tm-section-heading text-center">
        <h2>PRICING PLANS</h2>
        <div className="tm-section-seperator">
          <span />
        </div>
        <div className="empty-space col-md-b60 col-xs-b40" />
      </div>
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="tm-pricing-carousel owl-carousel tm-nam-tm-style1 tm-dots1">
              <div className="tm-price-list tm-gray-bg">
                <div className="tm-price">
                  <h3>$25</h3>
                </div>
                <h2 className="tm-pricing-heading">Blood Test</h2>
                <ul className="tm-test-list">
                  <li>First Description</li>
                  <li>Second Description</li>
                  <li>Third Description</li>
                  <li>Fourth Description</li>
                  <li>Fifth Description</li>
                </ul>
                <a href="#" className="tm-btn1">
                  CONTACT NOW
                </a>
              </div>
              {/* .tm-price-list */}
              <div className="tm-price-list tm-gray-bg">
                <div className="tm-price">
                  <h3>$30</h3>
                </div>
                <h2 className="tm-pricing-heading">Hemoglobin Test</h2>
                <ul className="tm-test-list">
                  <li>First Description</li>
                  <li>Second Description</li>
                  <li>Third Description</li>
                  <li>Fourth Description</li>
                  <li>Fifth Description</li>
                </ul>
                <a href="#" className="tm-btn1">
                  CONTACT NOW
                </a>
              </div>
              {/* .tm-price-list */}
              <div className="tm-price-list tm-gray-bg">
                <div className="tm-price">
                  <h3>$70</h3>
                </div>
                <h2 className="tm-pricing-heading">Homocysteine</h2>
                <ul className="tm-test-list">
                  <li>First Description</li>
                  <li>Second Description</li>
                  <li>Third Description</li>
                  <li>Fourth Description</li>
                  <li>Fifth Description</li>
                </ul>
                <a href="#" className="tm-btn1">
                  CONTACT NOW
                </a>
              </div>
              {/* .tm-price-list */}
              <div className="tm-price-list tm-gray-bg">
                <div className="tm-price">
                  <h3>$24</h3>
                </div>
                <div className="pricing-shap" />
                <h2 className="tm-pricing-heading">X-Ray</h2>
                <ul className="tm-test-list">
                  <li>First Description</li>
                  <li>Second Description</li>
                  <li>Third Description</li>
                  <li>Fourth Description</li>
                  <li>Fifth Description</li>
                </ul>
                <a href="#" className="tm-btn1">
                  CONTACT NOW
                </a>
              </div>
              {/* .tm-price-list */}
            </div>
          </div>
          {/* .col */}
        </div>
        {/* .row */}
      </div>
      <div className="empty-space col-md-b100 col-xs-b70" />
    </section>
  );
};

export default PricingSection;
