import React from "react";

const Gallery = () => {
  return (
    <section id="gallery">
      <div className="empty-space col-md-b100 col-xs-b70" />
      <div className="tm-section-heading text-center">
        <h2>View our Gallery</h2>
        <div className="tm-section-seperator">
          <span />
        </div>
        <div className="empty-space col-md-b60 col-xs-b40" />
      </div>
      <div className="tm-portfolio-filter text-center">
        <ul>
          <li className="active">
            <a href="#" data-filter="*">
              ALL
            </a>
          </li>
          <li>
            <a href="#" data-filter=".cardiology">
              CARDIOLOGY
            </a>
          </li>
          <li>
            <a href="#" data-filter=".neurology">
              NEUROLOGY
            </a>
          </li>
          <li>
            <a href="#" data-filter=".urology">
              UROLOGY
            </a>
          </li>
          <li>
            <a href="#" data-filter=".pulmonary">
              PULMONARY
            </a>
          </li>
          <li>
            <a href="#" data-filter=".traumatology">
              TRAUMATOLOGY
            </a>
          </li>
        </ul>
      </div>
      {/* .tm-portfolio-filter-area */}
      <div className="tm-portfolio zoom-gallery tm-gutter-less">
        <div className="tm-grid-sizer" />
        <div className="tm-portfolio-item neurology">
          <a href="assets/img/portfolio-01-lg.jpg" className="item-inner">
            <img src="assets/img/portfolio-01.jpg" alt="portfolio-01" />
            <div className="tm-zoom-btn" />
            <i className="tm-zoom-icon icofont icofont-drag1" />
          </a>
        </div>
        {/* .tm-portfolio-item */}
        <div className="tm-portfolio-item urology traumatology">
          <a href="assets/img/portfolio-02-lg.jpg" className="item-inner">
            <img src="assets/img/portfolio-02.jpg" alt="portfolio-02" />
            <div className="tm-zoom-btn" />
            <i className="tm-zoom-icon icofont icofont-drag1" />
          </a>
        </div>
        {/* .tm-portfolio-item */}
        <div className="tm-portfolio-item cardiology pulmonary">
          <a href="assets/img/portfolio-03-lg.jpg" className="item-inner">
            <img src="assets/img/portfolio-03.jpg" alt="portfolio-03" />
            <div className="tm-zoom-btn" />
            <i className="tm-zoom-icon icofont icofont-drag1" />
          </a>
        </div>
        {/* .tm-portfolio-item */}
        <div className="tm-portfolio-item neurology traumatology">
          <a href="assets/img/portfolio-04-lg.jpg" className="item-inner">
            <img src="assets/img/portfolio-04.jpg" alt="portfolio-04" />
            <div className="tm-zoom-btn" />
            <i className="tm-zoom-icon icofont icofont-drag1" />
          </a>
        </div>
        {/* .tm-portfolio-item */}
        <div className="tm-portfolio-item urology">
          <a href="assets/img/portfolio-05-lg.jpg" className="item-inner">
            <img src="assets/img/portfolio-05.jpg" alt="portfolio-05" />
            <div className="tm-zoom-btn" />
            <i className="tm-zoom-icon icofont icofont-drag1" />
          </a>
        </div>
        {/* .tm-portfolio-item */}
        <div className="tm-portfolio-item cardiology neurology pulmonary">
          <a href="assets/img/portfolio-06-lg.jpg" className="item-inner">
            <img src="assets/img/portfolio-06.jpg" alt="portfolio-06" />
            <div className="tm-zoom-btn" />
            <i className="tm-zoom-icon icofont icofont-drag1" />
          </a>
        </div>
        {/* .tm-portfolio-item */}
        <div className="tm-portfolio-item urology pulmonary">
          <a href="assets/img/portfolio-07-lg.jpg" className="item-inner">
            <img src="assets/img/portfolio-07.jpg" alt="portfolio-07" />
            <div className="tm-zoom-btn" />
            <i className="tm-zoom-icon icofont icofont-drag1" />
          </a>
        </div>
        {/* .tm-portfolio-item */}
        <div className="tm-portfolio-item cardiology traumatology">
          <a href="assets/img/portfolio-08-lg.jpg" className="item-inner">
            <img src="assets/img/portfolio-08.jpg" alt="portfolio-08" />
            <div className="tm-zoom-btn" />
            <i className="tm-zoom-icon icofont icofont-drag1" />
          </a>
        </div>
        {/* .tm-portfolio-item */}
      </div>
      {/* .portfolio */}
    </section>
  );
};

export default Gallery;
