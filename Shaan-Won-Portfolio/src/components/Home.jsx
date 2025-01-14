import React from "react";


const Home = () => {
  return (
    <>
      <div id="home">
        <div id="particles-js" />
        <div className="home-content-main">
          <div className="table-cell">
            <div className="container">
              <div className="row home-row">
                <div className="col-md-12 col-sm-12">
                  <div
                    className="home-text wow fadeInDown text-left"
                    style={{ margin: "auto" }}
                  >
                    <h1 className="cd-headline clip is-full-width">
                      <span
                        className="cd-words-wrapper"
                        style={{ width: 266, overflow: "hidden" }}
                      >
                        <b className="is-hidden">Full Stack</b>
                        <b className="is-hidden">Sleeper</b>
                        <b className="is-visible">Lazy</b>
                      </span>
                    </h1>
                    <h3>Shawon Islam</h3>
                    <div className="about-social-icon text-left">
                      <ul className="about-social">
                        <li className="wow fadeIn" data-wow-delay=".2s">
                          <a href="www.facebook.html" target="newtab">
                            <i className="fa fa-facebook" aria-hidden="true" />
                          </a>
                        </li>
                        <li className="wow fadeIn" data-wow-delay=".4s">
                          <a href="www.twitter.html" target="newtab">
                            <i className="fa fa-twitter" aria-hidden="true" />
                          </a>
                        </li>
                        <li className="wow fadeIn" data-wow-delay=".6s">
                          <a href="www.pinterest.html" target="newtab">
                            <i
                              className="fa fa-pinterest-p"
                              aria-hidden="true"
                            />
                          </a>
                        </li>
                        <li className="wow fadeIn" data-wow-delay=".8s">
                          <a href="www.linkedin.html" target="newtab">
                            <i className="fa fa-linkedin" aria-hidden="true" />
                          </a>
                        </li>
                        <li className="wow fadeIn" data-wow-delay="1s">
                          <a href="www.behance.html" target="newtab">
                            <i className="fa fa-behance" aria-hidden="true" />
                          </a>
                        </li>
                        <li className="wow fadeIn" data-wow-delay="1.2s">
                          <a href="www.instagram.html" target="newtab">
                            <i className="fa fa-instagram" aria-hidden="true" />
                          </a>
                        </li>
                      </ul>
                    </div>
                    {/* end about-social-icon */}
                  </div>
                  {/* end home-text  */}
                </div>
                {/* end col-md-8 */}
              </div>
              {/* end row  */}
            </div>
            {/* end container */}
          </div>
          {/* end table-cell */}
        </div>
      </div>
    </>
  );
};

export default Home;
