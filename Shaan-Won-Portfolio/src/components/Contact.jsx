import React, { useState } from "react";
import GoogleMaps from "./GoogleMaps";
import axios from "axios";
import { toast } from "react-toastify";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    address : "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };
  // useEffect(() => {
  //   console.log(formData);
  // }, [formData]);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    axios 
      .post("https://hotel.shawon.site/admin/api/Staff/savereact", formData)
      .then((res) => {
        console.log(res);
        toast.success("Staff added successfully");
        setFormData({
          name: "",
          email: "",
          phone: "",
          address : "",
        })
      })
      .catch((err) => {
        console.log(err);
      });
  };
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
                        onSubmit={handleSubmit}
                        id="contactForm"
                        className="contact-form shake"
                      >
                        <div className="form-group">
                          <div className="controls">
                            <input
                              type="text"
                              onChange={handleChange}
                              id="name"
                              name = "name"
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
                              onChange={handleChange}
                              name = "email"
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
                              onChange={handleChange}
                              name = "phone"
                              id="msg_subject"
                              className="form-control"
                              placeholder="Phone"
                              required
                              data-error="Please enter your phone"
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
                              name = "address"
                              onChange={handleChange}
                              rows={7}
                              placeholder="Address"
                              className="form-control"
                              required
                              data-error="Write your Address"
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
                      <p>shawon.idb61@gmail.com</p>
                    </div>
                    <div className="info-details">
                      <i
                        className="fa fa-phone contact-icon"
                        aria-hidden="true"
                      />
                      <h3>Phone</h3>
                      <p>+8801941424166</p>
                    </div>
                    <div className="info-details">
                      <i
                        className="fa fa-map-marker contact-icon"
                        aria-hidden="true"
                      />
                      <h3>Address</h3>
                      <p>Sonargaon, Narayanganj</p>
                    </div>
                  </div>
                </div>
                {/* end row */}
              </div>
              {/* end container */}

              <>
                <GoogleMaps />
              </>
            </div>
            {/* end contact-form-details */}
            <div className="copyright-details text-center py-3 bg-light">
              <div className="copyright">
                <h3 className="mb-2">
                  © {new Date().getFullYear()} | Designed and developed by
                  <a
                    href="https://shawon.site/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-decoration-none ms-1"
                  >
                    Shawon Islam
                  </a>
                </h3>
              </div>
              <div className="privacy-policy">
                <p className="mb-0">
                  All rights reserved by Shawon Islam. Please read our
                  <a
                    href="/privacy-policy"
                    className="text-decoration-none ms-1"
                  >
                    Privacy Policy
                  </a>
                  or
                  <a
                    href="/terms-and-conditions"
                    className="text-decoration-none ms-1"
                  >
                    Terms & Conditions
                  </a>
                  .
                </p>
              </div>
            </div>
          </div>
          {/* end contact-grid */}
        </div>
        {/* end contact-content */}
      </div>
    </>
  );
};

export default Contact;
