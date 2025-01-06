import React from "react";

const Resume = () => {
  return (
    <div className="resume-info-display-section  section-gap-tb-165 section-bg">
      <div className="resume-info-display-box">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <ul className="resume-tab nav">
                <li className="nav-item">
                  <button
                    className="nav-link active"
                    data-bs-toggle="tab"
                    data-bs-target="#education-tab"
                  >
                    Education
                  </button>
                </li>
                <li className="nav-item">
                  <button
                    className="nav-link"
                    data-bs-toggle="tab"
                    data-bs-target="#experience-tab"
                  >
                    Experience
                  </button>
                </li>
              </ul>
            </div>
          </div>
          <div className="resume-info-display-wrapper">
            <div className="row">
              <div className="col-12">
                <div className="tab-content" id="myTabContent">
                  <div
                    className="tab-pane fade show active"
                    id="education-tab"
                    role="tabpanel"
                  >
                    <ul className="resume-list">
                      {/* Start Resume Tab List Single Item */}
                      <li className="resume-tab-list-single-item">
                        <div className="content">
                          <div className="left">
                            <span className="year">2009 - 2010</span>
                          </div>
                          <div className="right">
                            <h3 className="title">
                              Bachelor of Business Administration{" "}
                            </h3>
                            <span className="institute-name">
                              University of California, Berkeley
                            </span>
                            <p>
                              Lorem Ipsum is simply dummy text of the printing
                              and typesetting industry. Lorem Ipsum has been
                              indus dard dummy text ever since the 1500 when an
                              uniknown prnter took galley of type and scrambled
                              make specimen book has not only five centuries the
                              into electronic.
                            </p>
                          </div>
                        </div>
                      </li>
                      {/* End Resume Tab List Single Item */}
                      {/* Start Resume Tab List Single Item */}
                      <li className="resume-tab-list-single-item">
                        <div className="content">
                          <div className="left">
                            <span className="year">2012 - 2014</span>
                          </div>
                          <div className="right">
                            <h3 className="title">
                              Masters of Business Administration{" "}
                            </h3>
                            <span className="institute-name">
                              University of California, Berkeley
                            </span>
                            <p>
                              Lorem Ipsum is simply dummy text of the printing
                              and typesetting industry. Lorem Ipsum has been
                              indus dard dummy text ever since the 1500 when an
                              uniknown prnter took galley of type and scrambled
                              make specimen book has not only five centuries the
                              into electronic.
                            </p>
                          </div>
                        </div>
                      </li>
                      {/* End Resume Tab List Single Item */}
                      {/* Start Resume Tab List Single Item */}
                      <li className="resume-tab-list-single-item">
                        <div className="content">
                          <div className="left">
                            <span className="year">2015 - 2018</span>
                          </div>
                          <div className="right">
                            <h3 className="title">Bachelor of Graphic Arts</h3>
                            <span className="institute-name">
                              University of California, Berkeley
                            </span>
                            <p>
                              Lorem Ipsum is simply dummy text of the printing
                              and typesetting industry. Lorem Ipsum has been
                              indus dard dummy text ever since the 1500 when an
                              uniknown prnter took galley of type and scrambled
                              make specimen book has not only five centuries the
                              into electronic.
                            </p>
                          </div>
                        </div>
                      </li>
                      {/* End Resume Tab List Single Item */}
                    </ul>
                  </div>
                  <div
                    className="tab-pane fade"
                    id="experience-tab"
                    role="tabpanel"
                  >
                    <ul className="resume-list">
                      {/* Start Resume Tab List Single Item */}
                      <li className="resume-tab-list-single-item">
                        <div className="content">
                          <div className="left">
                            <span className="year">2016 - 2018</span>
                          </div>
                          <div className="right">
                            <h3 className="title">Web Designer</h3>
                            <span className="institute-name">Graphic Dev</span>
                            <p>
                              Lorem Ipsum is simply dummy text of the printing
                              and typesetting industry. Lorem Ipsum has been
                              indus dard dummy text ever since the 1500 when an
                              uniknown prnter took galley of type and scrambled
                              make specimen book has not only five centuries the
                              into electronic.
                            </p>
                          </div>
                        </div>
                      </li>
                      {/* End Resume Tab List Single Item */}
                      {/* Start Resume Tab List Single Item */}
                      <li className="resume-tab-list-single-item">
                        <div className="content">
                          <div className="left">
                            <span className="year">2018 - 2019</span>
                          </div>
                          <div className="right">
                            <h3 className="title">Junior Web Developer</h3>
                            <span className="institute-name">Acme Lab</span>
                            <p>
                              Lorem Ipsum is simply dummy text of the printing
                              and typesetting industry. Lorem Ipsum has been
                              indus dard dummy text ever since the 1500 when an
                              uniknown prnter took galley of type and scrambled
                              make specimen book has not only five centuries the
                              into electronic.
                            </p>
                          </div>
                        </div>
                      </li>
                      {/* End Resume Tab List Single Item */}
                      {/* Start Resume Tab List Single Item */}
                      <li className="resume-tab-list-single-item">
                        <div className="content">
                          <div className="left">
                            <span className="year">2019 - 2020</span>
                          </div>
                          <div className="right">
                            <h3 className="title">Senior Web Developer</h3>
                            <span className="institute-name">Devtwist</span>
                            <p>
                              Lorem Ipsum is simply dummy text of the printing
                              and typesetting industry. Lorem Ipsum has been
                              indus dard dummy text ever since the 1500 when an
                              uniknown prnter took galley of type and scrambled
                              make specimen book has not only five centuries the
                              into electronic.
                            </p>
                          </div>
                        </div>
                      </li>
                      {/* End Resume Tab List Single Item */}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Resume;
