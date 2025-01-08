import React from "react";

const About = () => {
  return (
    <>
      <div id="about">
        <div className="about-content">
          <div className="love-grid text-left">
            <div className="container">
              <div className="row love-row">
                <div className="col-md-3 col-sm-6">
                  <div className="love-details wow fadeIn" data-wow-delay=".1s">
                    <i
                      className="fa fa-pencil-square-o love-icon"
                      aria-hidden="true"
                    />
                    <h3>Working Hard</h3>
                    <p>Lorem Ipsum is simply dummy text of the printing.</p>
                  </div>
                  {/* end service-details  */}
                </div>
                {/* end col-md-4  */}
                <div className="col-md-3 col-sm-6">
                  <div className="love-details wow fadeIn" data-wow-delay=".2s">
                    <i className="fa fa-cogs love-icon" aria-hidden="true" />
                    <h3>Web Design</h3>
                    <p>Lorem Ipsum is simply dummy text of the printing.</p>
                  </div>
                  {/* end service-details  */}
                </div>
                {/* end col-md-4  */}
                <div className="col-md-3 col-sm-6">
                  <div className="love-details wow fadeIn" data-wow-delay=".3s">
                    <i
                      className="fa fa-file-image-o love-icon"
                      aria-hidden="true"
                    />
                    <h3>Graphics Design</h3>
                    <p>Lorem Ipsum is simply dummy text of the printing.</p>
                  </div>
                  {/* end service-details  */}
                </div>
                {/* end col-md-4  */}
                <div className="col-md-3 col-sm-6">
                  <div className="love-details wow fadeIn" data-wow-delay=".4s">
                    <i className="fa fa-heart-o love-icon" aria-hidden="true" />
                    <h3>Photography</h3>
                    <p>Lorem Ipsum is simply dummy text of the printing.</p>
                  </div>
                  {/* end service-details  */}
                </div>
                {/* end col-md-4  */}
              </div>
              {/* end row  */}
            </div>
            {/* end container  */}
          </div>
          {/* end service-grid  */}
          <div className="me-grid">
            <div className="container">
              <div className="row">
                <div className="col-md-4 col-sm-6 col-xs-12 about-col">
                  <div className="about-image">
                    <div className="image-over" />
                    <img
                      src="img/about-image.jpg"
                      alt
                      className="about-img wow fadeIn"
                    />
                  </div>
                  {/* end about-image  */}
                </div>
                {/* end col-md-4  */}
                <div className="col-md-8 col-sm-6 col-xs-12 about-col">
                  <div className="about-details wow fadeIn">
                    <h3 className="wow fadeIn">I Am Creative Human</h3>
                    <div className="underline1 no-margin" />
                    <div className="underline2 no-margin" />
                    <p className="wow fadeIn">
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                      ullamco laboris nisi ut aliquip ex ea commodo
                      consequat.Lorem ipsum dolor sit amet, consectetur
                      adipisicing elit,
                    </p>
                    <p className="text-2 wow fadeIn">
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                      ullamco laboris nisi ut aliquip ex ea commodo
                      consequat.Lorem ipsum dolor sit amet, consectetur
                      adipisicing elit, sed do eiusmod tempor incididunt ut
                      labore et dolore magna aliqua. Ut enim ad minim veniam,
                      quis nostrud exercitation ullamco laboris nisi ut aliquip
                      ex ea commodo consequat.Lorem ipsum dolor sit amet,
                      consectetur adipisicing elit, sed do eiusmod tempor
                      incididunt ut labore et dolore magna aliqua. Ut enim ad
                      minim veniam, quis nostrud exercitation ullamco laboris
                      nisi ut aliquip ex ea commodo consequat.
                    </p>
                    <a className="about-link-1" href="#home">
                      Download Resume
                    </a>
                    <a className="about-link-2" href="#home">
                      Hire Me
                    </a>
                  </div>
                  {/* end about-details  */}
                </div>
                {/* end col-md-8  */}
              </div>
              {/* end row  */}
            </div>
            {/* end container  */}
          </div>
          {/* end me-grid  */}
          <div className="work-counter text-left">
            <div id="counter">
              <div className="container">
                <div className="row">
                  <div className="col-md-6 col-sm-12">
                    <div className="work-statistics-write">
                      <h3 className="wow fadeIn">Working Statistics</h3>
                      <div className="underline1 no-margin" />
                      <div className="underline2 no-margin" />
                      <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing
                        elitsed eiusmod tempor enim minim veniam.Lorem ipsum
                        dolor sit amet consectetur adipisicing elitsed eiusmod
                        tempor enim minim veniam.Lorem ipsum dolor sit amet
                        consectetur adipisicing elitsed eiusmod tempor enim
                        minim veniam.
                      </p>
                    </div>
                    {/* end work-statistics  */}
                  </div>
                  {/* end col-md-3  */}
                  <div className="col-md-2 col-sm-4">
                    <div className="work-statistics text-center">
                      <i className="fa fa-crop stat-icon" aria-hidden="true" />
                      <h3 className="Count">2727</h3>
                      <p>Graphics Design</p>
                    </div>
                    {/* end work-statistics  */}
                  </div>
                  {/* end col-md-3  */}
                  <div className="col-md-2 col-sm-4">
                    <div className="work-statistics text-center">
                      <i className="fa fa-bolt stat-icon" aria-hidden="true" />
                      <h3 className="Count">3635</h3>
                      <p>Website Created</p>
                    </div>
                    {/* end work-statistics  */}
                  </div>
                  {/* end col-md-3  */}
                  <div className="col-md-2 col-sm-4">
                    <div className="work-statistics text-center">
                      <i
                        className="fa fa-coffee stat-icon"
                        aria-hidden="true"
                      />
                      <h3 className="Count">2120</h3>
                      <p>Coffee Taken</p>
                    </div>
                    {/* end work-statistics  */}
                  </div>
                  {/* end col-md-3  */}
                </div>
                {/* end row  */}
              </div>
              {/* end container-fluid  */}
            </div>
            {/* end counter  */}
          </div>
          {/* end work-counter  */}
        </div>
        {/* end about-content  */}
      </div>
    </>
  );
};

export default About;
