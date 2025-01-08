import React from 'react'

const Navbar = () => {
  return (
    <>
        <div className="menubar">
        <div className="menubar-content">
          <nav className="navbar navbar-default navbar-fixed-top">
            <div className="container">
              <div className="row">
                <div className="col-md-2 col-sm-2">
                  <div className="site-title">
                    <h3>Shaan's</h3>
                  </div>
                  {/* end site-title */}
                </div>
                {/* end col-md-4 */}
                <div className="navbar-header">
                  <button
                    type="button"
                    className="navbar-toggle collapsed"
                    data-toggle="collapse"
                    data-target="#bs-example-navbar-collapse-1"
                    aria-expanded="false"
                  >
                    <span className="sr-only">Toggle navigation</span>
                    <span className="icon-bar" />
                    <span className="icon-bar" />
                    <span className="icon-bar" />
                  </button>
                  {/* end button */}
                </div>
                {/* end navbar-header */}
                <div className="col-md-10 col-sm-10 navbar-style">
                  <div
                    className="collapse navbar-collapse"
                    id="bs-example-navbar-collapse-1"
                  >
                    <ul className="nav navbar-nav">
                      <li>
                        <a href="#home" className="active">
                          Home
                        </a>
                      </li>
                      <li>
                        <a href="#about">About</a>
                      </li>
                      <li>
                        <a href="#skill">Skill</a>
                      </li>
                      <li>
                        <a href="#work">Work</a>
                      </li>
                      <li>
                        <a href="#service">Service</a>
                      </li>
                      <li>
                        <a href="#contact">Contact</a>
                      </li>
                      <li>
                        <button className="btn btn-success">Resume</button>
                      </li>
                    </ul>
                    {/* end nav */}
                  </div>
                  {/* end collapse navbar-collapse */}
                </div>
                {/* end col-md-8 */}
              </div>
              {/* end row */}
            </div>
            {/* end container-fluid */}
          </nav>
          {/* navbar */}
        </div>
        {/* end menubar-content */}
      </div>
    </>
  )
}

export default Navbar