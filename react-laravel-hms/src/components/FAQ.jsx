import React from "react";

const FAQ = () => {
  return (
    <section className="tm-gray-bg tm-overflow-hide">
      <div className="row">
        <div className="col-lg-6">
          {/* For Vimeo Video */}
          <div className="tm-about-video">
            <img src="assets/img/video-bg.jpg" alt  ="video bg" />
            <div
              className="tm-video-button"
              data-video-id={63636954}
              data-channel="vimeo"
            >
              <i className="icofont icofont-play-alt-3" />
              <span className="tm-video-animaiton">
                <span />
              </span>
            </div>
          </div>
          {/* For Youtube Video */}
          {/* <div class="tm-about-video tm-video-button" data-video-id='nImFZRtGeAQ'>
              <img src="assets/img/tm-about-video-bg.jpg" alt="yuy">
              <i class="video-icon"></i>
          </div> */}
        </div>
        {/* .col */}
        <div className="col-lg-6">
          <div className="empty-space col-md-b60 col-xs-b65" />
          <div className="accordian-wrapper">
            <h2 className="accordian-heading">Frequently Asked Questions</h2>
            <div className="accordian">
              <div className="single-accordian">
                <h3 className="accordian-head">What is dental care?</h3>
                <div className="accordian-body">
                  Tooth valuable resources, dental care should take us regularly
                  to stay healthy. Oral Health Overview. Good dental or oral
                  care is important to maintaining healthy teeth, gums, and
                  tongue. Oral problems, including bad breath, dry mouth, canker
                  or cold sores, TMD, tooth decay, or thrush are all treatable
                  with proper diagnosis and care.
                </div>
              </div>
              {/* .single-accordian */}
              <div className="single-accordian">
                <h3 className="accordian-head">Does offer emergency care?</h3>
                <div className="accordian-body">
                  Urgent care centers are a relatively new addition to the
                  healthcare industry that have helped to benefit both community
                  medical services and patients. As a fast, affordable
                  alternative to emergency room care for patients with
                  non-life-threatening conditions, urgent care medical clinics
                  offer people a convenient treatment option.
                </div>
              </div>
              {/* .single-accordian */}
              <div className="single-accordian">
                <h3 className="accordian-head">Online live support</h3>
                <div className="accordian-body">
                  Neurology is a branch of medical science that is concerned
                  with disorders and diseases of the nervous system. The term
                  neurology comes from a combination of two words - "neuron"
                  meaning nerve and "logia" meaning "the study of".There are
                  around a hundred billion neurons in the brain, capable of
                  generating their own impulses and of receiving and
                  transmitting impulses from neighboring cells.
                </div>
              </div>
              {/* .single-accordian */}
            </div>
          </div>
          <div className="empty-space col-md-b60 col-xs-b70" />
        </div>
        {/* .col */}
      </div>
    </section>
  );
};

export default FAQ;
