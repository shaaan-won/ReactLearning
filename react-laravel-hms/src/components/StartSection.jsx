import React from "react";

const StartSection = () => {
  return (
    <section>
      <div className="empty-space col-md-b100 col-xs-b40" />
      <div className="container">
        <div className="row">
          <div className="col-lg-4">
            <div className="empty-space col-md-b0 col-xs-b30" />
            <div className="tm-icon-box">
              <div className="tm-icon">
                <i className="fa fa-user-md" />
              </div>
              <h2 className="tm-icon-box-title">Qualified Doctors</h2>
              <p className="tm-icon-box-text">
                Our doctors have a wide range of clinical experience ranging
                from newly qualified junior doctors to senior consultants.
              </p>
            </div>
          </div>
          {/* .col */}
          <div className="col-lg-4">
            <div className="empty-space col-md-b0 col-xs-b30" />
            <div className="tm-icon-box">
              <div className="tm-icon">
                <i className="fa fa-ambulance" />
              </div>
              <h2 className="tm-icon-box-title">Emergency Care</h2>
              <p className="tm-icon-box-text">
                Our centers provide convenient and high-quality care for a
                variety of common illnesses and injuries.
              </p>
            </div>
          </div>
          {/* .col */}
          <div className="col-lg-4">
            <div className="empty-space col-md-b0 col-xs-b30" />
            <div className="tm-icon-box">
              <div className="tm-icon">
                <i className="fa fa-hospital-o" />
              </div>
              <h2 className="tm-icon-box-title">24 Hours Service</h2>
              <p className="tm-icon-box-text">
                Our technical team is available for 24/7, We always prepared any
                emergency situation with 10 ambulances.
              </p>
            </div>
          </div>
          {/* .col */}
        </div>
        {/* .row */}
      </div>
    </section>
  );
};

export default StartSection;
