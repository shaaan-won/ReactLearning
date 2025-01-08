import React from "react";

const Contact = () => {
  return (
    <>
      <div id="contact">
        <div className="contact-content">
          <div className="contact-grid">
            <div className="contact-form-details wow fadeIn">
              <div className="container">
                <div className="row">
                  <div className="col-md-12">
                    <div className="contact-title text-left wow fadeIn">
                      <h3>Contact</h3>
                      <div className="underline1 no-margin" />
                      <div className="underline2 no-margin" />
                      <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing
                        elitsed eiusmod tempor enim minim veniam.
                      </p>
                    </div>
                    {/* end testimonial-title  */}
                  </div>
                  {/* end col-md-12  */}
                </div>
                {/* end row  */}
                <div className="row contact-row">
                  <div className="col-md-8 col-sm-6 contact-col wow fadeIn">
                    <div className="contact-form">
                      <form
                        id="contactForm"
                        className="contact-form shake"
                        data-toggle="validator"
                      >
                        <div className="form-group">
                          <div className="controls">
                            <input
                              type="text"
                              id="name"
                              className="form-control"
                              placeholder="Name"
                              required
                              data-error="Please enter your name"
                            />
                            <div className="help-block with-errors" />
                          </div>
                          {/* end controls */}
                        </div>
                        {/* end form-group */}
                        <div className="form-group">
                          <div className="controls">
                            <input
                              type="email"
                              className="email form-control"
                              id="email"
                              placeholder="Email"
                              required
                              data-error="Please enter your email"
                            />
                            <div className="help-block with-errors" />
                          </div>
                          {/* end controls */}
                        </div>
                        {/* end form-group */}
                        <div className="form-group">
                          <div className="controls">
                            <input
                              type="text"
                              id="msg_subject"
                              className="form-control"
                              placeholder="Subject"
                              required
                              data-error="Please enter your message subject"
                            />
                            <div className="help-block with-errors" />
                          </div>
                          {/* end controls */}
                        </div>
                        {/* end form-group */}
                        <div className="form-group">
                          <div className="controls">
                            <textarea
                              id="message"
                              rows={7}
                              placeholder="Massage"
                              className="form-control"
                              required
                              data-error="Write your message"
                              defaultValue={""}
                            />
                            <div className="help-block with-errors" />
                          </div>
                          {/* end controls */}
                        </div>
                        {/* end form-group */}
                        <button
                          type="submit"
                          id="submit"
                          className="btn btn-success text-center"
                        >
                          Send Message
                        </button>
                        <div id="msgSubmit" className="h3 text-center hidden" />
                        <div className="clearfix" />
                      </form>
                    </div>
                    {/* end contact-form */}
                  </div>
                  {/* end col-md-6 */}
                  <div className="col-md-4 col-sm-6">
                    <div className="info-details">
                      <i
                        className="fa fa-envelope contact-icon"
                        aria-hidden="true"
                      />
                      <h3>Email</h3>
                      <p>Yatri@gmail.com</p>
                    </div>
                    <div className="info-details">
                      <i
                        className="fa fa-phone contact-icon"
                        aria-hidden="true"
                      />
                      <h3>Phone</h3>
                      <p>+8748347934</p>
                    </div>
                    <div className="info-details">
                      <i
                        className="fa fa-map-marker contact-icon"
                        aria-hidden="true"
                      />
                      <h3>Address</h3>
                      <p>Noakhali,Chittagong</p>
                    </div>
                  </div>
                </div>
                {/* end row */}
              </div>
              {/* end container */}
              <div className="container-fluid map-con">
                <div className="row map-row">
                  <div className="col-md-12 col-sm-12 map-col">
                    <div className="google-maps">
                      <div className="map-wrap">
                        <div
                          className="overlay-map"
                          onclick="style.pointerEvents = 'none'"
                        />
                        {/* wrap map iframe to turn off mouse scroll and turn it back on on click */}
                        <div id="map" style={{ width: "100%", height: 600 }} />
                      </div>
                      {/* end map wrap  */}
                    </div>
                    {/* end google map  */}
                  </div>
                  {/* end col-md-6  */}
                </div>
              </div>
            </div>
            {/* end contact-form-details */}
            <div className="copyright-details">
              <div className="copyright">
                <h3>copyright and design: tamzid hossain</h3>
              </div>
              {/* end copyright */}
            </div>
            {/* end copyright-details */}
          </div>
          {/* end contact-grid */}
        </div>
        {/* end contact-content */}
      </div>
    </>
  );
};

export default Contact;
