import React from "react";

const Skill = () => {
  return (
    <>
      <div id="skill">
        <div className="skill-main">
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <div className="skill-title text-left wow fadeIn">
                  <h3>My skill</h3>
                  <div className="underline1 no-margin" />
                  <div className="underline2 no-margin" />
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elitsed
                    eiusmod tempor enim minim veniam.
                  </p>
                </div>
                {/* end work-title  */}
              </div>
              {/* end col-md-12  */}
            </div>
            {/* end row  */}
            <div className="row wow fadeIn">
              <div className="col-md-6">
                <div className="skill-details text-left">
                  <p className="wow fadeIn">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                    sed do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo
                    consequat.Lorem ipsum dolor sit amet, consectetur
                    adipisicing elit, sed do eiusmod tempor incididunt ut labore
                    et dolore magna aliqua. Ut enim ad minim veniam, quis
                    nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                    commodo consequat.
                  </p>
                </div>
                {/* end skill-details  */}
              </div>
              {/* end col-md-6  */}
              <div className="col-md-6">
                <div className="skill-details">
                  <div className="content">
                    <div className="col">
                      <ul id="skill-main">
                        <li>
                          <h3>Web Design-85%</h3>
                          <span className="expand Web" />
                        </li>
                        <li>
                          <h3>Graphics Design-90%</h3>
                          <span className="expand Graphics" />
                        </li>
                        <li>
                          <h3>Web Developing-82%</h3>
                          <span className="expand Developing" />
                        </li>
                        <li>
                          <h3>Photoshop-89%</h3>
                          <span className="expand Photoshop" />
                        </li>
                        <li>
                          <h3>Photography-95%</h3>
                          <span className="expand Photography" />
                        </li>
                      </ul>
                    </div>
                    {/* end col  */}
                  </div>
                  {/* end content  */}
                </div>
                {/* end skill-details  */}
              </div>
              {/* end col-md-6  */}
            </div>
            {/* end row  */}
          </div>
          {/* end container  */}
        </div>
        {/* end skill-main  */}
      </div>
    </>
  );
};

export default Skill;
