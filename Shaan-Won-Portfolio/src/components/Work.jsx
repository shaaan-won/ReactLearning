import React from "react";

const Work = () => {
  return (
    <>
      <div>
        <div id="work">
          <div className="work-content">
            <div className="work-grid">
              <div className="container">
                <div className="row">
                  <div className="col-md-12">
                    <div className="work-title text-left wow fadeIn">
                      <h3>My work</h3>
                      <div className="underline1 no-margin" />
                      <div className="underline2 no-margin" />
                      <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing
                        elitsed eiusmod tempor enim minim veniam.
                      </p>
                    </div>
                    {/* end work-title  */}
                  </div>
                  {/* end col-md-12  */}
                </div>
                {/* end row  */}
              </div>
              {/* end container  */}
              <div className="work-details">
                <div className="container">
                  <ul id="filters" className="clearfix">
                    <li>
                      <span
                        className="filter active"
                        data-filter=".web, .graphics, .development, .photography"
                      >
                        All
                      </span>
                    </li>
                    <li>
                      <span className="filter" data-filter=".web">
                        Web-design
                      </span>
                    </li>
                    <li>
                      <span className="filter" data-filter=".graphics">
                        Graphics-design
                      </span>
                    </li>
                    <li>
                      <span className="filter" data-filter=".development">
                        Development
                      </span>
                    </li>
                    <li>
                      <span className="filter" data-filter=".photography">
                        Photography
                      </span>
                    </li>
                  </ul>
                  <div id="portfoliolist">
                    <div className="portfolio graphics" data-cat="graphics">
                      <div
                        className="portfolio-wrapper wow fadeIn"
                        data-wow-delay=".2s"
                      >
                        <div className="overlay text-center">
                          <div className="port-over" />
                          <div className="overlay-main">
                            <div className="table-cell">
                              <h3>View Work</h3>
                              <a
                                className="fancybox"
                                href="img/portfolios/graphics/1.jpg"
                                title="little something about the image"
                              >
                                <i
                                  className="fa fa-search work-icon"
                                  aria-hidden="true"
                                />
                              </a>
                            </div>
                            {/* end table-cell  */}
                          </div>
                          {/* end overlay-main  */}
                        </div>
                        {/* end overlay  */}
                        <img src="img/portfolios/graphics/1.jpg" alt />
                      </div>
                      {/* end portfolio-wrapper  */}
                    </div>
                    {/* end portfolio-graphics  */}
                    <div className="portfolio web" data-cat="web">
                      <div
                        className="portfolio-wrapper wow fadeIn"
                        data-wow-delay=".4s"
                      >
                        <div className="overlay text-center">
                          <div className="port-over" />
                          <div className="overlay-main">
                            <div className="table-cell">
                              <h3>View Work</h3>
                              <a
                                className="fancybox"
                                href="img/portfolios/web/1.jpg"
                                title="little something about the image"
                              >
                                <i
                                  className="fa fa-search work-icon"
                                  aria-hidden="true"
                                />
                              </a>
                            </div>
                            {/* end table-cell  */}
                          </div>
                          {/* end overlay-main  */}
                        </div>
                        {/* end overlay  */}
                        <img src="img/portfolios/web/1.jpg" alt />
                      </div>
                      {/* end portfolio-wrapper  */}
                    </div>
                    {/* end portfolio-web  */}
                    <div
                      className="portfolio development"
                      data-cat="development"
                    >
                      <div
                        className="portfolio-wrapper wow fadeIn"
                        data-wow-delay=".6s"
                      >
                        <div className="overlay text-center">
                          <div className="port-over" />
                          <div className="overlay-main">
                            <div className="table-cell">
                              <h3>View Work</h3>
                              <a
                                className="fancybox"
                                href="img/portfolios/development/1.jpg"
                                title="little something about the image"
                              >
                                <i
                                  className="fa fa-search work-icon"
                                  aria-hidden="true"
                                />
                              </a>
                            </div>
                            {/* end table-cell  */}
                          </div>
                          {/* end overlay-main  */}
                        </div>
                        {/* end overlay  */}
                        <img src="img/portfolios/development/1.jpg" alt />
                      </div>
                      {/* end portfolio-wrapper  */}
                    </div>
                    {/* end portfolio-development  */}
                    <div className="portfolio graphics" data-cat="graphics">
                      <div
                        className="portfolio-wrapper wow fadeIn"
                        data-wow-delay=".8s"
                      >
                        <div className="overlay text-center">
                          <div className="port-over" />
                          <div className="overlay-main">
                            <div className="table-cell">
                              <h3>View Work</h3>
                              <a
                                className="fancybox"
                                href="img/portfolios/graphics/2.jpg"
                                title="little something about the image"
                              >
                                <i
                                  className="fa fa-search work-icon"
                                  aria-hidden="true"
                                />
                              </a>
                            </div>
                            {/* end table-cell  */}
                          </div>
                          {/* end overlay-main  */}
                        </div>
                        {/* end overlay  */}
                        <img src="img/portfolios/graphics/2.jpg" alt />
                      </div>
                      {/* end portfolio-wrapper  */}
                    </div>
                    {/* end portfolio-graphics  */}
                    <div
                      className="portfolio development"
                      data-cat="development"
                    >
                      <div
                        className="portfolio-wrapper wow fadeIn"
                        data-wow-delay=".2s"
                      >
                        <div className="overlay text-center">
                          <div className="port-over" />
                          <div className="overlay-main">
                            <div className="table-cell">
                              <h3>View Work</h3>
                              <a
                                className="fancybox"
                                href="img/portfolios/development/2.jpg"
                                title="little something about the image"
                              >
                                <i
                                  className="fa fa-search work-icon"
                                  aria-hidden="true"
                                />
                              </a>
                            </div>
                            {/* end table-cell  */}
                          </div>
                          {/* end overlay-main  */}
                        </div>
                        {/* end overlay  */}
                        <img src="img/portfolios/development/2.jpg" alt />
                      </div>
                      {/* end portfolio-wrapper  */}
                    </div>
                    {/* end portfolio-development  */}
                    <div className="portfolio web" data-cat="web">
                      <div
                        className="portfolio-wrapper wow fadeIn"
                        data-wow-delay=".4s"
                      >
                        <div className="overlay text-center">
                          <div className="port-over" />
                          <div className="overlay-main">
                            <div className="table-cell">
                              <h3>View Work</h3>
                              <a
                                className="fancybox"
                                href="img/portfolios/web/2.jpg"
                                title="little something about the image"
                              >
                                <i
                                  className="fa fa-search work-icon"
                                  aria-hidden="true"
                                />
                              </a>
                            </div>
                            {/* end table-cell  */}
                          </div>
                          {/* end overlay-main  */}
                        </div>
                        {/* end overlay  */}
                        <img src="img/portfolios/web/2.jpg" alt />
                      </div>
                      {/* end portfolio-wrapper  */}
                    </div>
                    {/* end portfolio-web  */}
                    <div className="portfolio graphics" data-cat="graphics">
                      <div
                        className="portfolio-wrapper wow fadeIn"
                        data-wow-delay=".6s"
                      >
                        <div className="overlay text-center">
                          <div className="port-over" />
                          <div className="overlay-main">
                            <div className="table-cell">
                              <h3>View Work</h3>
                              <a
                                className="fancybox"
                                href="img/portfolios/graphics/3.jpg"
                                title="little something about the image"
                              >
                                <i
                                  className="fa fa-search work-icon"
                                  aria-hidden="true"
                                />
                              </a>
                            </div>
                            {/* end table-cell  */}
                          </div>
                          {/* end overlay-main  */}
                        </div>
                        {/* end overlay  */}
                        <img src="img/portfolios/graphics/3.jpg" alt />
                      </div>
                      {/* end portfolio-wrapper  */}
                    </div>
                    {/* end portfolio-graphics  */}
                    <div
                      className="portfolio development"
                      data-cat="development"
                    >
                      <div
                        className="portfolio-wrapper wow fadeIn"
                        data-wow-delay=".8s"
                      >
                        <div className="overlay text-center">
                          <div className="port-over" />
                          <div className="overlay-main">
                            <div className="table-cell">
                              <h3>View Work</h3>
                              <a
                                className="fancybox"
                                href="img/portfolios/development/3.jpg"
                                title="little something about the image"
                              >
                                <i
                                  className="fa fa-search work-icon"
                                  aria-hidden="true"
                                />
                              </a>
                            </div>
                            {/* end table-cell  */}
                          </div>
                          {/* end overlay-main  */}
                        </div>
                        {/* end overlay  */}
                        <img src="img/portfolios/development/3.jpg" alt />
                      </div>
                      {/* end portfolio-wrapper  */}
                    </div>
                    {/* end portfolio-development  */}
                    <div
                      className="portfolio photography"
                      data-cat="photography"
                    >
                      <div
                        className="portfolio-wrapper wow fadeIn"
                        data-wow-delay=".2s"
                      >
                        <div className="overlay text-center">
                          <div className="port-over" />
                          <div className="overlay-main">
                            <div className="table-cell">
                              <h3>View Work</h3>
                              <a
                                className="fancybox"
                                href="img/portfolios/photography/1.jpg"
                                title="little something about the image"
                              >
                                <i
                                  className="fa fa-search work-icon"
                                  aria-hidden="true"
                                />
                              </a>
                            </div>
                            {/* end table-cell  */}
                          </div>
                          {/* end overlay-main  */}
                        </div>
                        {/* end overlay  */}
                        <img src="img/portfolios/photography/1.jpg" alt />
                      </div>
                      {/* end portfolio-wrapper  */}
                    </div>
                    {/* end portfolio-photo  */}
                    <div className="portfolio web" data-cat="web">
                      <div
                        className="portfolio-wrapper wow fadeIn"
                        data-wow-delay=".4s"
                      >
                        <div className="overlay text-center">
                          <div className="port-over" />
                          <div className="overlay-main">
                            <div className="table-cell">
                              <h3>View Work</h3>
                              <a
                                className="fancybox"
                                href="img/portfolios/web/3.jpg"
                                title="little something about the image"
                              >
                                <i
                                  className="fa fa-search work-icon"
                                  aria-hidden="true"
                                />
                              </a>
                            </div>
                            {/* end table-cell  */}
                          </div>
                          {/* end overlay-main  */}
                        </div>
                        {/* end overlay  */}
                        <img src="img/portfolios/web/3.jpg" alt />
                      </div>
                      {/* end portfolio-wrapper  */}
                    </div>
                    {/* end portfolio-web  */}
                    <div
                      className="portfolio photography"
                      data-cat="photography"
                    >
                      <div
                        className="portfolio-wrapper wow fadeIn"
                        data-wow-delay=".6s"
                      >
                        <div className="overlay text-center">
                          <div className="port-over" />
                          <div className="overlay-main">
                            <div className="table-cell">
                              <h3>View Work</h3>
                              <a
                                className="fancybox"
                                href="img/portfolios/photography/2.jpg"
                                title="little something about the image"
                              >
                                <i
                                  className="fa fa-search work-icon"
                                  aria-hidden="true"
                                />
                              </a>
                            </div>
                            {/* end table-cell  */}
                          </div>
                          {/* end overlay-main  */}
                        </div>
                        {/* end overlay  */}
                        <img src="img/portfolios/photography/2.jpg" alt />
                      </div>
                      {/* end portfolio-wrapper  */}
                    </div>
                    {/* end portfolio-photo  */}
                    <div
                      className="portfolio photography"
                      data-cat="photography"
                    >
                      <div
                        className="portfolio-wrapper wow fadeIn"
                        data-wow-delay=".8s"
                      >
                        <div className="overlay text-center">
                          <div className="port-over" />
                          <div className="overlay-main">
                            <div className="table-cell">
                              <h3>View Work</h3>
                              <a
                                className="fancybox"
                                href="img/portfolios/photography/3.jpg"
                                title="little something about the image"
                              >
                                <i
                                  className="fa fa-search work-icon"
                                  aria-hidden="true"
                                />
                              </a>
                            </div>
                            {/* end table-cell  */}
                          </div>
                          {/* end overlay-main  */}
                        </div>
                        {/* end overlay  */}
                        <img src="img/portfolios/photography/3.jpg" alt />
                      </div>
                      {/* end portfolio-wrapper  */}
                    </div>
                    {/* end portfolio-photo  */}
                  </div>
                  {/* end portfoliolist  */}
                </div>
                {/* container */}
              </div>
              {/* end work-details  */}
            </div>
            {/* end work-grid  */}
          </div>
          {/* end work-content  */}
        </div>
      </div>
    </>
  );
};

export default Work;
