import React from "react";

const FunFact = () => {
  return (
    <section className="tm-fun-fact-wrap tm-bg">
      <div className="empty-space col-md-b100 col-xs-b70" />
      <div className="container">
        <div className="row">
          <div className="col-lg-3 col-md-6">
            <div className="tm-fun-fact text-center">
              <i
                className="icofont icofont-briefcase-alt-2 wow fadeInDown"
                data-wow-delay="0.2s"
                data-wow-duration="2s"
              />
              <h2 className="tm-counter">25</h2>
              <h3>Years of experience</h3>
            </div>
            <div className="empty-space col-xs-b30" />
          </div>
          {/* .col */}
          <div className="col-lg-3 col-md-6">
            <div className="tm-fun-fact text-center">
              <i
                className="icofont icofont-emo-simple-smile wow fadeInDown"
                data-wow-delay="0.4s"
                data-wow-duration="2s"
              />
              <h2 className="tm-counter">2500</h2>
              <h3>Happy Patients</h3>
            </div>
            <div className="empty-space col-xs-b30" />
          </div>
          {/* .col */}
          <div className="col-lg-3 col-md-6">
            <div className="tm-fun-fact text-center">
              <i
                className="icofont icofont-doctor wow fadeInDown"
                data-wow-delay="0.6s"
                data-wow-duration="2s"
              />
              <h2 className="tm-counter">150</h2>
              <h3>Number of Doctors</h3>
            </div>
            <div className="empty-space col-xs-b30" />
          </div>
          {/* .col */}
          <div className="col-lg-3 col-md-6">
            <div className="tm-fun-fact text-center">
              <i
                className="icofont icofont-users-social wow fadeInDown"
                data-wow-delay="0.8s"
                data-wow-duration="2s"
              />
              <h2 className="tm-counter">250</h2>
              <h3>Number of Staffs</h3>
            </div>
            <div className="empty-space col-xs-b30" />
          </div>
          {/* .col */}
        </div>
      </div>
      <div className="empty-space col-lg-b70 col-xs-b40" />
    </section>
  );
};

export default FunFact;
