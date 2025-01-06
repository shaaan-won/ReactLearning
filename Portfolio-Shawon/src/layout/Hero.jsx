import React from "react";

const Hero = () => {
  return (
    <>
      <div className="hero-section section-dark-blue-bg">
        <div className="hero-wrapper">
          <div className="container">
            <div className="row">
              <div className="col-xxl-7">
                <div className="hero-content">
                  <h3 className="title-big">Hello! I’m</h3>
                  <h2 className="title-large">
                    Mirta <span className="shape-mark">Akins</span>
                  </h2>
                  <p>UI/UX Designer specializing in Shopify &amp; Webflow.</p>
                  <a
                    href="#"
                    className="btn btn-xl btn-outline-one icon-space-left"
                  >
                    Get Resume <i className="icofont-download" />
                  </a>
                  <div className="video-link">
                    <a
                      className="wave-btn"
                      href="https://youtu.be/MKjhBO2xQzg"
                      data-autoplay="true"
                      data-vbtype="video"
                    >
                      <div className="ripple">
                        <i className="icofont-ui-play" />
                      </div>
                    </a>
                    <span className="video-text"> Watch Video</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="hero-shape hero-top-shape">
            <span />
            <span />
            <span />
          </div>
          <div className="hero-shape hero-bottom-shape">
            <span />
            <span />
            <span />
          </div>
          <div className="hero-portrait">
            <div className="image">
              <img
                className="img-fluid"
                src="assets/images/portrait/portrait-hero.png"
                alt
              />
              <div className="image-half-round-shape" />
              <div className="social-link">
                <a href="https://www.example.com" target="_blank">
                  <i className="icofont-facebook" />
                </a>
                <a href="https://www.example.com" target="_blank">
                  <i className="icofont-dribbble" />
                </a>
                <a href="https://www.example.com" target="_blank">
                  <i className="icofont-behance" />
                </a>
                <a href="https://www.example.com" target="_blank">
                  <i className="icofont-linkedin" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="service-display-section section-gap-tb-165 pos-relative">
        <div className="container">
          <div className="row">
            <div className="col-12">
              {/* Start Section Content */}
              <div className="section-content">
                <span className="section-tag">My Services</span>
                <h2 className="section-title">
                  Service Provide For My Clients.
                </h2>
              </div>
              {/* End Section Content */}
            </div>
          </div>
        </div>
        {/* Start Service Section Wrapper */}
        <div className="service-display-wrapper">
          <div className="container">
            <div className="row">
              <div className="col-12">
                <div className="service-display-slider">
                  {/* Slider main container */}
                  <div className="swiper-container">
                    {/* Additional required wrapper */}
                    <div className="swiper-wrapper">
                      {/* Slides */}
                      {/* Start Service Box Single Item */}
                      <div className="service-box-single-item swiper-slide">
                        <div className="inner-shape inner-shape-top-right" />
                        <div className="icon">
                          <img
                            src="assets/images/icon/service-icon-1.png"
                            alt
                          />
                        </div>
                        <h4 className="title">
                          <a href="service-details.html">UI/UX Design</a>
                        </h4>
                        <ul className="list-item">
                          <li>Landing Pages</li>
                          <li>User Flow</li>
                          <li>Wireframing</li>
                          <li>Prototyping</li>
                          <li>Mobile App Design</li>
                        </ul>
                        <div className="inner-shape inner-shape-bottom-right" />
                      </div>
                      {/* End Service Box Single Item */}
                      {/* Start Service Box Single Item */}
                      <div className="service-box-single-item swiper-slide">
                        <div className="inner-shape inner-shape-top-right" />
                        <div className="icon">
                          <img
                            src="assets/images/icon/service-icon-2.png"
                            alt
                          />
                        </div>
                        <h4 className="title">
                          <a href="service-details.html">Development</a>
                        </h4>
                        <ul className="list-item">
                          <li>HTML/CSS</li>
                          <li>JavaScript</li>
                          <li>Animation</li>
                          <li>WordPress</li>
                          <li>React</li>
                        </ul>
                        <div className="inner-shape inner-shape-bottom-right" />
                      </div>
                      {/* End Service Box Single Item */}
                      {/* Start Service Box Single Item */}
                      <div className="service-box-single-item swiper-slide">
                        <div className="inner-shape inner-shape-top-right" />
                        <div className="icon">
                          <img
                            src="assets/images/icon/service-icon-3.png"
                            alt
                          />
                        </div>
                        <h4 className="title">
                          <a href="service-details.html">Illustration</a>
                        </h4>
                        <ul className="list-item">
                          <li>Character Design</li>
                          <li>Icon Set</li>
                          <li> Illustration Guide</li>
                          <li>Illustration Set</li>
                          <li>Motion Graphic</li>
                        </ul>
                        <div className="inner-shape inner-shape-bottom-right" />
                      </div>
                      {/* End Service Box Single Item */}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* If we need pagination */}
          <div className="service-display-dots">
            <div className="swiper-pagination" />
          </div>
        </div>
        {/* End Service Section Wrapper */}
      </div>

      <div className="skill-display-section section-gap-tb-165 section-bg pos-relative">
        <div className="skill-display-section-box">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-xl-6 col-xxl-5">
                {/* Start Section Content */}
                <div className="section-content">
                  <span className="section-tag">Special Skills</span>
                  <h2 className="section-title">
                    My Special Skill Field Here.
                  </h2>
                  <a
                    href="#"
                    className="btn btn-xl btn-outline-one icon-space-left"
                  >
                    Get Resume <i className="icofont-download" />
                  </a>
                </div>
                {/* End Section Content */}
              </div>
              <div className="col-xl-6 col-xxl-6 offset-xxl-1">
                {/* Start Skill Display Wrapper */}
                <div className="skill-display-wrapper">
                  {/* Start Skill Progress Single Item */}
                  <div className="skill-progress-single-item">
                    <span className="tag">Communication</span>
                    <div className="skill-box">
                      <div className="progress-line" data-width={75}>
                        <span className="skill-percentage">75%</span>
                      </div>
                    </div>
                  </div>
                  {/* ENd Skill Progress Single Item */}
                  {/* Start Skill Progress Single Item */}
                  <div className="skill-progress-single-item">
                    <span className="tag">Leadership</span>
                    <div className="skill-box">
                      <div className="progress-line" data-width={70}>
                        <span className="skill-percentage">70%</span>
                      </div>
                    </div>
                  </div>
                  {/* ENd Skill Progress Single Item */}
                  {/* Start Skill Progress Single Item */}
                  <div className="skill-progress-single-item">
                    <span className="tag">Teamwork</span>
                    <div className="skill-box">
                      <div className="progress-line" data-width={90}>
                        <span className="skill-percentage">90%</span>
                      </div>
                    </div>
                  </div>
                  {/* ENd Skill Progress Single Item */}
                  {/* Start Skill Progress Single Item */}
                  <div className="skill-progress-single-item">
                    <span className="tag">Flexibility</span>
                    <div className="skill-box">
                      <div className="progress-line" data-width={80}>
                        <span className="skill-percentage">80%</span>
                      </div>
                    </div>
                  </div>
                  {/* ENd Skill Progress Single Item */}
                </div>
                {/* End Skill Display Wrapper */}
              </div>
            </div>
          </div>
        </div>
        <div className="skill-display-shape" />
      </div>

      <div className="counter-display-section section-gap-tb-165 section-bg-2">
        <div className="counter-display-wrapper">
          <div className="container">
            <div className="row justify-content-center justify-content-sm-start">
              <div className="d-block d-md-flex justify-content-md-start col-12 col-sm-4 col-md-4">
                {/* Start Counterup Single Item */}
                <div className="counterup-single-item">
                  <div className="icon">
                    <img src="assets/images/icon/counterup-icon-1.png" alt />
                  </div>
                  <div className="content">
                    <h2 className="number">
                      <span className="counter">2,58</span>+
                    </h2>
                    <span className="text">Happy Clients</span>
                  </div>
                </div>
                {/* End Counterup Single Item */}
              </div>
              <div className="d-block d-md-flex justify-content-md-center col-12 col-sm-4 col-md-4">
                {/* Start Counterup Single Item */}
                <div className="counterup-single-item">
                  <div className="icon">
                    <img src="assets/images/icon/counterup-icon-2.png" alt />
                  </div>
                  <div className="content">
                    <h2 className="number">
                      <span className="counter">590</span>K
                    </h2>
                    <span className="text">Project Complete</span>
                  </div>
                </div>
                {/* End Counterup Single Item */}
              </div>
              <div className="d-block d-md-flex justify-content-md-end col-12 col-sm-4 col-md-4">
                {/* Start Counterup Single Item */}
                <div className="counterup-single-item">
                  <div className="icon">
                    <img src="assets/images/icon/counterup-icon-3.png" alt />
                  </div>
                  <div className="content">
                    <h2 className="number">
                      <span className="counter">28</span>+
                    </h2>
                    <span className="text">Years of Experience</span>
                  </div>
                </div>
                {/* End Counterup Single Item */}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="project-display-section section-gap-tb-165">
        <div className="project-display-box">
          <div className="container">
            <div className="row">
              <div className="col-12 col-xl-12 d-block d-md-flex justify-content-between">
                {/* Start Section Content */}
                <div className="section-content pos-relative">
                  <span className="section-tag">Awesome Portfolio</span>
                  <h2 className="section-title">My Complete Projects</h2>
                </div>
                {/* End Section Content */}
                <div className="default-nav-style mt-6 mb-6 mb-md-0 ">
                  {/* If we need navigation buttons */}
                  <div className="slider-button button-prev">
                    <i className="icofont-double-left" />
                  </div>
                  <div className="slider-button button-next">
                    <i className="icofont-double-right" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="project-display-wrapper">
            <div className="project-display-slider">
              {/* Swiper */}
              <div className="swiper-container">
                <div className="swiper-wrapper">
                  {/* Slides */}
                  {/* Start Project Box Single Item */}
                  <div className="project-box-single-item swiper-slide">
                    <div className="img-box">
                      <div className="bg-overlay" />
                      <div className="bg-image">
                        <img
                          src="assets/images/project/project-slider-img-1.jpg"
                          alt
                        />
                      </div>
                      <div className="image">
                        <img
                          src="assets/images/project/project-slider-img-1.jpg"
                          alt
                        />
                      </div>
                    </div>
                    <div className="content">
                      <h4 className="title">
                        <a href="project-details.html">
                          Givest - Non Profit PSD Template
                        </a>
                      </h4>
                      <ul className="catagory-nav-item">
                        <li>
                          <a href>Chairty</a>
                        </li>
                        <li>
                          <a href>Fund Rising</a>
                        </li>
                        <li>
                          <a href>Non Profit</a>
                        </li>
                      </ul>
                    </div>
                  </div>
                  {/* End Project Box Single Item */}
                  {/* Start Project Box Single Item */}
                  <div className="project-box-single-item swiper-slide">
                    <div className="img-box">
                      <div className="bg-overlay" />
                      <div className="bg-image">
                        <img
                          src="assets/images/project/project-slider-img-2.jpg"
                          alt
                        />
                      </div>
                      <div className="image">
                        <img
                          src="assets/images/project/project-slider-img-2.jpg"
                          alt
                        />
                      </div>
                    </div>
                    <div className="content">
                      <h4 className="title">
                        <a href="project-details.html">
                          Musion - Gardening Website Template
                        </a>
                      </h4>
                      <ul className="catagory-nav-item">
                        <li>
                          <a href>Gardeining</a>
                        </li>
                        <li>
                          <a href>Landscaping</a>
                        </li>
                        <li>
                          <a href>Greem</a>
                        </li>
                      </ul>
                    </div>
                  </div>
                  {/* End Project Box Single Item */}
                  {/* Start Project Box Single Item */}
                  <div className="project-box-single-item swiper-slide">
                    <div className="img-box">
                      <div className="bg-overlay" />
                      <div className="bg-image">
                        <img
                          src="assets/images/project/project-slider-img-3.jpg"
                          alt
                        />
                      </div>
                      <div className="image">
                        <img
                          src="assets/images/project/project-slider-img-3.jpg"
                          alt
                        />
                      </div>
                    </div>
                    <div className="content">
                      <h4 className="title">
                        <a href="project-details.html">
                          SEOLLY - SEO Marketing &amp; Digital Agency
                        </a>
                      </h4>
                      <ul className="catagory-nav-item">
                        <li>
                          <a href>Chairty</a>
                        </li>
                        <li>
                          <a href>Fund Rising</a>
                        </li>
                        <li>
                          <a href>Non Profit</a>
                        </li>
                      </ul>
                    </div>
                  </div>
                  {/* End Project Box Single Item */}
                  {/* Start Project Box Single Item */}
                  <div className="project-box-single-item swiper-slide">
                    <div className="img-box">
                      <div className="bg-overlay" />
                      <div className="bg-image">
                        <img
                          src="assets/images/project/project-slider-img-4.jpg"
                          alt
                        />
                      </div>
                      <div className="image">
                        <img
                          src="assets/images/project/project-slider-img-4.jpg"
                          alt
                        />
                      </div>
                    </div>
                    <div className="content">
                      <h4 className="title">
                        <a href="project-details.html">
                          Virtuf - Creative Agency Bootstrap 5 Template
                        </a>
                      </h4>
                      <ul className="catagory-nav-item">
                        <li>
                          <a href>Gardeining</a>
                        </li>
                        <li>
                          <a href>Landscaping</a>
                        </li>
                        <li>
                          <a href>Greem</a>
                        </li>
                      </ul>
                    </div>
                  </div>
                  {/* End Project Box Single Item */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      
    </>
  );
};

export default Hero;
