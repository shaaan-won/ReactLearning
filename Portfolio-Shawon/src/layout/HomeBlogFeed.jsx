import React from "react";

const HomeBlogFeed = () => {
  return (
    <div className="blog-feed-display-section section-gap-tb-165">
      <div className="blog-feed-display-box">
        <div className="container">
          <div className="row">
            <div className="col">
              {/* Start Section Content */}
              <div className="section-content pos-relative text-center">
                <span className="section-tag">Blog Post</span>
                <h2 className="section-title">Latest Tips &amp; Tricks</h2>
              </div>
              {/* End Section Content */}
            </div>
          </div>
          <div className="blog-feed-display-wrapper">
            <div className="row mb-n5">
              <div className="col-12 mb-5">
                {/* Start Blog Feed Single Item */}
                <div className="blog-feed-single-item">
                  <div className="inner-shape inner-shape-top-right" />
                  <a href="blog-details-sidebar-left.html" className="image">
                    <img src="assets/images/blog/blog-feed-img-1.jpg" alt />
                  </a>
                  <div className="content-box">
                    <div className="content">
                      <div className="post-meta">
                        <a href="#" className="catagory">
                          Business
                        </a>
                        <a href="#" className="date">
                          07 February, 2021
                        </a>
                      </div>
                      <h4 className="title">
                        <a href="blog-details-sidebar-left.html">
                          Don't wait until you officially started business to
                          line these up.
                        </a>
                      </h4>
                    </div>
                    <a
                      href="blog-details-sidebar-left.html"
                      className="btn btn-md btn-outline-one icon-space-left"
                    >
                      Read More
                      <i className="icofont-double-right" />
                    </a>
                  </div>
                </div>
                {/* End Blog Feed Single Item */}
              </div>
              <div className="col-12 mb-5">
                {/* Start Blog Feed Single Item */}
                <div className="blog-feed-single-item">
                  <div className="inner-shape inner-shape-top-right" />
                  <a href="blog-details-sidebar-left.html" className="image">
                    <img src="assets/images/blog/blog-feed-img-2.jpg" alt />
                  </a>
                  <div className="content-box">
                    <div className="content">
                      <div className="post-meta">
                        <a href="#" className="catagory">
                          Business
                        </a>
                        <a href="#" className="date">
                          07 February, 2021
                        </a>
                      </div>
                      <h4 className="title">
                        <a href="blog-details-sidebar-left.html">
                          Don't wait until you officially started business to
                          line these up.
                        </a>
                      </h4>
                    </div>
                    <a
                      href="blog-details-sidebar-left.html"
                      className="btn btn-md btn-outline-one icon-space-left"
                    >
                      Read More
                      <i className="icofont-double-right" />
                    </a>
                  </div>
                </div>
                {/* End Blog Feed Single Item */}
              </div>
              <div className="col-12 mb-5">
                {/* Start Blog Feed Single Item */}
                <div className="blog-feed-single-item">
                  <div className="inner-shape inner-shape-top-right" />
                  <a href="blog-details-sidebar-left.html" className="image">
                    <img src="assets/images/blog/blog-feed-img-3.jpg" alt />
                  </a>
                  <div className="content-box">
                    <div className="content">
                      <div className="post-meta">
                        <a href="#" className="catagory">
                          Business
                        </a>
                        <a href="#" className="date">
                          07 February, 2021
                        </a>
                      </div>
                      <h4 className="title">
                        <a href="blog-details-sidebar-left.html">
                          Don't wait until you officially started business to
                          line these up.
                        </a>
                      </h4>
                    </div>
                    <a
                      href="blog-details-sidebar-left.html"
                      className="btn btn-md btn-outline-one icon-space-left"
                    >
                      Read More
                      <i className="icofont-double-right" />
                    </a>
                  </div>
                </div>
                {/* End Blog Feed Single Item */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeBlogFeed;
