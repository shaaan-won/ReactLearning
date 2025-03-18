import React from "react";

const Appointment = () => {
  return (
    <section className="tm-relative" id="appointment">
      <div className="tm-half-section-bg right">
        <img src="assets/img/appointment-bg.jpg" alt="about hafl bg" />
      </div>
      <div className="container">
        <div className="row">
          <div className="col-lg-7 tm-hf-hide">
            <div className="empty-space col-md-b0 col-xs-b70" />
            <div
              className="tm-appointment-heading tm-gray-bg wow fadeInLeft"
              data-wow-duration="1s"
              data-wow-delay="0.1s"
            >
              <div className="tm-section-heading text-center">
                <h2>MAKE AN APPOINTMENT</h2>
                <div className="tm-section-seperator">
                  <span />
                </div>
                <p>
                  If you wont to make an appointment with any specialist just
                  fill up the form with valid data and we will contact you via
                  phone for confirmation.
                </p>
              </div>
            </div>
          </div>
          {/* .col */}
          <div className="col-lg-5">
            <div className="empty-space col-md-b60 col-xs-b40" />
            <form
              method="POST"
              action="https://thememarch.com/demo/html/trustlife/trustlife/assets/php/appointment.php"
              className="tm-appointment-form"
              id="appointment-form"
            >
              <div id="tm-alert1" />
              <div className="tm-form-field">
                <input
                  type="text"
                  id="uname"
                  name="uname"
                  placeholder="Full Name"
                  required
                />
                <span className="bar" />
              </div>
              <div className="tm-form-field">
                <input
                  type="text"
                  id="uemail"
                  name="uemail"
                  placeholder="Email Address"
                  required
                />
                <span className="bar" />
              </div>
              <div className="tm-form-field">
                <input
                  type="text"
                  id="unumber"
                  name="unumber"
                  placeholder="Phone Number"
                  required
                />
                <span className="bar" />
              </div>
              <div className="tm-form-field">
                <input
                  name="udate"
                  type="text"
                  id="udate"
                  placeholder="Booking Date"
                />
                <span className="bar" />
                <div className="date-icon">
                  <i className="fa fa-calendar" />
                </div>
              </div>
              <div className="tm-form-field">
                <div className="tm-custom-select-wrap">
                  <select
                    name="udepartment"
                    className="tm-custom-select"
                    id="udepartment"
                  >
                    <option value="department">Department</option>
                    <option value="dental-care">Dental Care</option>
                    <option value="neurology">Neurology</option>
                    <option value="crutches">Crutches</option>
                    <option value="cardiology">Cardiology</option>
                    <option value="pulmonary">Pulmonary</option>
                    <option value="x-ray">X-Ray</option>
                  </select>
                </div>
              </div>
              <div className="tm-form-field">
                <div className="tm-custom-select-wrap">
                  <select
                    name="udoctor"
                    className="tm-custom-select"
                    id="udoctor"
                  >
                    <option value="doctor">Doctor</option>
                    <option value="jhon-doe">Dr. Jhon Doe</option>
                    <option value="mak-rushi">Dr. Mak Roshi</option>
                    <option value="mohoshin-kabir">Dr. Mohoshin Kabir</option>
                    <option value="nayon-borua">Dr. Nayon Borua</option>
                    <option value="rasel-islam">Dr. Rasel Islam</option>
                    <option value="mahid-islam">Dr. Mahid Islam</option>
                  </select>
                </div>
              </div>
              <div className="tm-form-field">
                <textarea
                  cols={30}
                  rows={10}
                  id="umsg"
                  name="umsg"
                  placeholder="Your Message"
                  defaultValue={""}
                />
                <span className="bar" />
              </div>
              <div className="empty-space col-xs-b10" />
              <div className="tm-form-field">
                <button
                  className="tm-btn1 tm-reverse"
                  type="submit"
                  id="appointment-submit"
                  name="submit"
                >
                  BOOK APPOINTMENT
                </button>
              </div>
            </form>
            <div className="empty-space col-md-b60 col-xs-b70" />
          </div>
          {/* .col */}
        </div>
      </div>
    </section>
  );
};

export default Appointment;
