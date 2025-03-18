import React from "react";

const NewsLetter = () => {
  return (
    <div className="tm-newsletter tm-bg">
      <div className="tm-nl-overlay" />
      <div className="empty-space col-md-b100 col-xs-b70" />
      <div className="container">
        <form
          className="mailchimp"
          action="https://storerepublic.us12.list-manage.com/subscribe/post?u=d227d8d335060b093084903d0&id=9ba078ceb0"
        >
          <div className="tm-form-field">
            <input
              type="email"
              name="subscribe"
              id="subscriber-email"
              placeholder="Enter your Email Address"
            />
            <span className="bar" />
          </div>
          <button
            type="submit"
            id="subscribe-button"
            className="tm-btn1 tm-reverse"
          >
            <span>
              <i className="icofont icofont-location-arrow" />
              SUBSCRIBE NOW
            </span>
          </button>
          {/* SUBSCRIPTION SUCCESSFUL OR ERROR MESSAGES */}
          <h5 className="subscription-success">.</h5>
          <h5 className="subscription-error">.</h5>
          <label className="subscription-label" htmlFor="subscriber-email" />
        </form>
      </div>
      <div className="empty-space col-md-b100 col-xs-b70" />
    </div>
  );
};

export default NewsLetter;
