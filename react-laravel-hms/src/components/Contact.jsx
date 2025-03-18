import React from "react";

const Contact = () => {
  return (
    <section id="contact">
      <div className="empty-space col-md-b100 col-xs-b70" />
      <div className="tm-section-heading text-center">
        <h2>Get In Touch</h2>
        <div className="tm-section-seperator">
          <span />
        </div>
        <div className="empty-space col-md-b60 col-xs-b40" />
      </div>
      <div className="container">
        <div className="row">
          <div className="col-lg-8">
            <div id="tm-alert" />
            <form
              action="https://thememarch.com/demo/html/trustlife/trustlife/assets/php/mail.php"
              className="row tm-contact-form"
              method="post"
              id="contact-form"
            >
              <div className="col-lg-6">
                <div className="tm-form-field">
                  <input type="text" id="name" name="name" required />
                  <label>Full Name</label>
                </div>
              </div>
              {/* .col */}
              <div className="col-lg-6">
                <div className="tm-form-field">
                  <input type="text" id="email" name="email" required />
                  <label>Email Address</label>
                </div>
              </div>
              {/* .col */}
              <div className="col-lg-6">
                <div className="tm-form-field">
                  <input type="text" id="subject" name="subject" required />
                  <label>Subject</label>
                </div>
              </div>
              {/* .col */}
              <div className="col-lg-6">
                <div className="tm-form-field">
                  <input type="text" id="phone" name="phone" required />
                  <label>Phone</label>
                </div>
              </div>
              {/* .col */}
              <div className="col-lg-12">
                <div className="tm-form-field">
                  <textarea
                    cols={30}
                    rows={10}
                    id="msg"
                    name="msg"
                    required
                    defaultValue={""}
                  />
                  <label>Your Message</label>
                </div>
              </div>
              {/* .col */}
              <div className="col-lg-12">
                <button
                  className="tm-btn1"
                  type="submit"
                  id="submit"
                  name="submit"
                >
                  <span>SEND MESSAGE</span>
                </button>
                <div className="empty-space col-lg-b30" />
              </div>
              {/* .col */}
            </form>
          </div>
          {/* .col */}
          <div className="col-lg-4">
            <div className="empty-space col-md-b0 col-xs-b40" />
            <div className="tm-contact-info">
              <div className="tm-single-contact">
                <i className="fa fa-map-marker" />
                <h3>Address</h3>
                <p>2855 Speer Blvd, Denver, CO 80211, USA</p>
              </div>
              <div className="empty-space col-xs-b25" />
              <div className="tm-single-contact">
                <i className="fa fa-phone" />
                <h3>Phone</h3>
                <p>
                  1-800-915-6270 <br />
                  1-800-915-6272
                </p>
              </div>
              <div className="empty-space col-xs-b25" />
              <div className="tm-single-contact">
                <i className="fa fa-envelope" />
                <h3>Email</h3>
                <p>
                  info@trustlife.com <br />
                  Skype: example
                </p>
              </div>
              <div className="empty-space col-xs-b25" />
            </div>
          </div>
          {/* .col */}
        </div>
      </div>
      <div className="empty-space col-md-b70 col-xs-b40" />
    </section>
  );
};

export default Contact;
