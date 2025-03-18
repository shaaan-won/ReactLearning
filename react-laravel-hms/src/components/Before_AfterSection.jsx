import React from "react";

const Before_AfterSection = () => {
  return (
    <section className="tm-gray-bg">
      <div className="empty-space col-md-b100 col-xs-b70" />
      <div className="tm-section-heading text-center">
        <h2>Before After Gallery</h2>
        <div className="tm-section-seperator">
          <span />
        </div>
        <div className="empty-space col-md-b60 col-xs-b40" />
      </div>
      <div className="container">
        <div className="before-after-gallery-slider owl-carousel tm-nam-tm-style1">
          <div className="teeth-beforeafter">
            <img src="assets/img/teeth-before-image.jpg" alt="teeth before" />
            <img src="assets/img/teeth-after-image.jpg" alt="teeth after" />
          </div>
          <div className="teeth-beforeafter">
            <img src="assets/img/face-before-image.jpg" alt="teeth before" />
            <img src="assets/img/face-after-image.jpg" alt="teeth after" />
          </div>
          <div className="teeth-beforeafter">
            <img src="assets/img/teeth-before-image.jpg" alt="teeth before" />
            <img src="assets/img/teeth-after-image.jpg" alt="teeth after" />
          </div>
          <div className="teeth-beforeafter">
            <img src="assets/img/face-before-image.jpg" alt="teeth before" />
            <img src="assets/img/face-after-image.jpg" alt="teeth after" />
          </div>
        </div>
      </div>
      <div className="empty-space col-md-b100 col-xs-b70" />
    </section>
  );
};

export default Before_AfterSection;
