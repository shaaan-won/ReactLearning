import React from 'react'
import Header from '../layout/Header'
import Footer from '../layout/Footer'

const About = () => {
    return (
        <>
            <Header />
            
<main className="main">
  {/* About Section */}
  <section id="about" className="about section">
    {/* Section Title */}
    <div className="container section-title" data-aos="fade-up">
      <h2>About</h2>
      <p>
        Necessitatibus eius consequatur ex aliquid fuga eum quidem sint
        consectetur velit
      </p>
    </div>
    {/* End Section Title */}
    <div className="container" data-aos="fade-up" data-aos-delay={100}>
      <div className="row gy-4 justify-content-center">
        <div className="col-lg-4">
          <img src="assets/img/profile-img.jpg" className="img-fluid" alt="" />
        </div>
        <div className="col-lg-8 content">
          <h2>UI/UX Designer &amp; Web Developer.</h2>
          <p className="fst-italic py-3">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
          <div className="row">
            <div className="col-lg-6">
              <ul>
                <li>
                  <i className="bi bi-chevron-right" />{" "}
                  <strong>Birthday:</strong> <span>1 May 1995</span>
                </li>
                <li>
                  <i className="bi bi-chevron-right" />{" "}
                  <strong>Website:</strong> <span>www.example.com</span>
                </li>
                <li>
                  <i className="bi bi-chevron-right" /> <strong>Phone:</strong>{" "}
                  <span>+123 456 7890</span>
                </li>
                <li>
                  <i className="bi bi-chevron-right" /> <strong>City:</strong>{" "}
                  <span>New York, USA</span>
                </li>
              </ul>
            </div>
            <div className="col-lg-6">
              <ul>
                <li>
                  <i className="bi bi-chevron-right" /> <strong>Age:</strong>{" "}
                  <span>30</span>
                </li>
                <li>
                  <i className="bi bi-chevron-right" /> <strong>Degree:</strong>{" "}
                  <span>Master</span>
                </li>
                <li>
                  <i className="bi bi-chevron-right" /> <strong>Email:</strong>{" "}
                  <span>email@example.com</span>
                </li>
                <li>
                  <i className="bi bi-chevron-right" />{" "}
                  <strong>Freelance:</strong> <span>Available</span>
                </li>
              </ul>
            </div>
          </div>
          <p className="py-3">
            Officiis eligendi itaque labore et dolorum mollitia officiis optio
            vero. Quisquam sunt adipisci omnis et ut. Nulla accusantium dolor
            incidunt officia tempore. Et eius omnis. Cupiditate ut dicta maxime
            officiis quidem quia. Sed et consectetur qui quia repellendus itaque
            neque.
          </p>
        </div>
      </div>
    </div>
  </section>
  {/* /About Section */}
  {/* Skills Section */}
  <section id="skills" className="skills section">
    {/* Section Title */}
    <div className="container section-title" data-aos="fade-up">
      <h2>Skills</h2>
      <p>
        Necessitatibus eius consequatur ex aliquid fuga eum quidem sint
        consectetur velit
      </p>
    </div>
    {/* End Section Title */}
    <div className="container" data-aos="fade-up" data-aos-delay={100}>
      <div className="row skills-content skills-animation">
        <div className="col-lg-6">
          <div className="progress">
            <span className="skill">
              <span>HTML</span> <i className="val">100%</i>
            </span>
            <div className="progress-bar-wrap">
              <div
                className="progress-bar"
                role="progressbar"
                aria-valuenow={100}
                aria-valuemin={0}
                aria-valuemax={100}
              />
            </div>
          </div>
          {/* End Skills Item */}
          <div className="progress">
            <span className="skill">
              <span>CSS</span> <i className="val">90%</i>
            </span>
            <div className="progress-bar-wrap">
              <div
                className="progress-bar"
                role="progressbar"
                aria-valuenow={90}
                aria-valuemin={0}
                aria-valuemax={100}
              />
            </div>
          </div>
          {/* End Skills Item */}
          <div className="progress">
            <span className="skill">
              <span>JavaScript</span> <i className="val">75%</i>
            </span>
            <div className="progress-bar-wrap">
              <div
                className="progress-bar"
                role="progressbar"
                aria-valuenow={75}
                aria-valuemin={0}
                aria-valuemax={100}
              />
            </div>
          </div>
          {/* End Skills Item */}
        </div>
        <div className="col-lg-6">
          <div className="progress">
            <span className="skill">
              <span>PHP</span> <i className="val">80%</i>
            </span>
            <div className="progress-bar-wrap">
              <div
                className="progress-bar"
                role="progressbar"
                aria-valuenow={80}
                aria-valuemin={0}
                aria-valuemax={100}
              />
            </div>
          </div>
          {/* End Skills Item */}
          <div className="progress">
            <span className="skill">
              <span>WordPress/CMS</span> <i className="val">90%</i>
            </span>
            <div className="progress-bar-wrap">
              <div
                className="progress-bar"
                role="progressbar"
                aria-valuenow={90}
                aria-valuemin={0}
                aria-valuemax={100}
              />
            </div>
          </div>
          {/* End Skills Item */}
          <div className="progress">
            <span className="skill">
              <span>Photoshop</span> <i className="val">55%</i>
            </span>
            <div className="progress-bar-wrap">
              <div
                className="progress-bar"
                role="progressbar"
                aria-valuenow={55}
                aria-valuemin={0}
                aria-valuemax={100}
              />
            </div>
          </div>
          {/* End Skills Item */}
        </div>
      </div>
    </div>
  </section>
  {/* /Skills Section */}
  {/* Stats Section */}
  <section id="stats" className="stats section">
    {/* Section Title */}
    <div className="container section-title" data-aos="fade-up">
      <h2>Facts</h2>
      <p>
        Necessitatibus eius consequatur ex aliquid fuga eum quidem sint
        consectetur velit
      </p>
    </div>
    {/* End Section Title */}
    <div className="container" data-aos="fade-up" data-aos-delay={100}>
      <div className="row gy-4">
        <div className="col-lg-3 col-md-6">
          <div className="stats-item text-center w-100 h-100">
            <span
              data-purecounter-start={0}
              data-purecounter-end={232}
              data-purecounter-duration={1}
              className="purecounter"
            />
            <p>Clients</p>
          </div>
        </div>
        {/* End Stats Item */}
        <div className="col-lg-3 col-md-6">
          <div className="stats-item text-center w-100 h-100">
            <span
              data-purecounter-start={0}
              data-purecounter-end={521}
              data-purecounter-duration={1}
              className="purecounter"
            />
            <p>Projects</p>
          </div>
        </div>
        {/* End Stats Item */}
        <div className="col-lg-3 col-md-6">
          <div className="stats-item text-center w-100 h-100">
            <span
              data-purecounter-start={0}
              data-purecounter-end={1453}
              data-purecounter-duration={1}
              className="purecounter"
            />
            <p>Hours Of Support</p>
          </div>
        </div>
        {/* End Stats Item */}
        <div className="col-lg-3 col-md-6">
          <div className="stats-item text-center w-100 h-100">
            <span
              data-purecounter-start={0}
              data-purecounter-end={32}
              data-purecounter-duration={1}
              className="purecounter"
            />
            <p>Workers</p>
          </div>
        </div>
        {/* End Stats Item */}
      </div>
    </div>
  </section>
  {/* /Stats Section */}
  {/* Testimonials Section */}
  <section id="testimonials" className="testimonials section">
    {/* Section Title */}
    <div className="container section-title" data-aos="fade-up">
      <h2>Testimonials</h2>
      <p>
        Necessitatibus eius consequatur ex aliquid fuga eum quidem sint
        consectetur velit
      </p>
    </div>
    {/* End Section Title */}
    <div className="container" data-aos="fade-up" data-aos-delay={100}>
      <div className="swiper init-swiper">
        <div className="swiper-wrapper">
          <div className="swiper-slide">
            <div className="testimonial-item">
              <img
                src="assets/img/testimonials/testimonials-1.jpg"
                className="testimonial-img"
                alt=""
              />
              <h3>Saul Goodman</h3>
              <h4>Ceo &amp; Founder</h4>
              <div className="stars">
                <i className="bi bi-star-fill" />
                <i className="bi bi-star-fill" />
                <i className="bi bi-star-fill" />
                <i className="bi bi-star-fill" />
                <i className="bi bi-star-fill" />
              </div>
              <p>
                <i className="bi bi-quote quote-icon-left" />
                <span>
                  Proin iaculis purus consequat sem cure digni ssim donec
                  porttitora entum suscipit rhoncus. Accusantium quam, ultricies
                  eget id, aliquam eget nibh et. Maecen aliquam, risus at
                  semper.
                </span>
                <i className="bi bi-quote quote-icon-right" />
              </p>
            </div>
          </div>
          {/* End testimonial item */}
          <div className="swiper-slide">
            <div className="testimonial-item">
              <img
                src="assets/img/testimonials/testimonials-2.jpg"
                className="testimonial-img"
                alt=""
              />
              <h3>Sara Wilsson</h3>
              <h4>Designer</h4>
              <div className="stars">
                <i className="bi bi-star-fill" />
                <i className="bi bi-star-fill" />
                <i className="bi bi-star-fill" />
                <i className="bi bi-star-fill" />
                <i className="bi bi-star-fill" />
              </div>
              <p>
                <i className="bi bi-quote quote-icon-left" />
                <span>
                  Export tempor illum tamen malis malis eram quae irure esse
                  labore quem cillum quid cillum eram malis quorum velit fore
                  eram velit sunt aliqua noster fugiat irure amet legam anim
                  culpa.
                </span>
                <i className="bi bi-quote quote-icon-right" />
              </p>
            </div>
          </div>
          {/* End testimonial item */}
          <div className="swiper-slide">
            <div className="testimonial-item">
              <img
                src="assets/img/testimonials/testimonials-3.jpg"
                className="testimonial-img"
                alt=""
              />
              <h3>Jena Karlis</h3>
              <h4>Store Owner</h4>
              <div className="stars">
                <i className="bi bi-star-fill" />
                <i className="bi bi-star-fill" />
                <i className="bi bi-star-fill" />
                <i className="bi bi-star-fill" />
                <i className="bi bi-star-fill" />
              </div>
              <p>
                <i className="bi bi-quote quote-icon-left" />
                <span>
                  Enim nisi quem export duis labore cillum quae magna enim sint
                  quorum nulla quem veniam duis minim tempor labore quem eram
                  duis noster aute amet eram fore quis sint minim.
                </span>
                <i className="bi bi-quote quote-icon-right" />
              </p>
            </div>
          </div>
          {/* End testimonial item */}
          <div className="swiper-slide">
            <div className="testimonial-item">
              <img
                src="assets/img/testimonials/testimonials-4.jpg"
                className="testimonial-img"
                alt=""
              />
              <h3>Matt Brandon</h3>
              <h4>Freelancer</h4>
              <div className="stars">
                <i className="bi bi-star-fill" />
                <i className="bi bi-star-fill" />
                <i className="bi bi-star-fill" />
                <i className="bi bi-star-fill" />
                <i className="bi bi-star-fill" />
              </div>
              <p>
                <i className="bi bi-quote quote-icon-left" />
                <span>
                  Fugiat enim eram quae cillum dolore dolor amet nulla culpa
                  multos export minim fugiat minim velit minim dolor enim duis
                  veniam ipsum anim magna sunt elit fore quem dolore labore
                  illum veniam.
                </span>
                <i className="bi bi-quote quote-icon-right" />
              </p>
            </div>
          </div>
          {/* End testimonial item */}
          <div className="swiper-slide">
            <div className="testimonial-item">
              <img
                src="assets/img/testimonials/testimonials-5.jpg"
                className="testimonial-img"
                alt=""
              />
              <h3>John Larson</h3>
              <h4>Entrepreneur</h4>
              <div className="stars">
                <i className="bi bi-star-fill" />
                <i className="bi bi-star-fill" />
                <i className="bi bi-star-fill" />
                <i className="bi bi-star-fill" />
                <i className="bi bi-star-fill" />
              </div>
              <p>
                <i className="bi bi-quote quote-icon-left" />
                <span>
                  Quis quorum aliqua sint quem legam fore sunt eram irure aliqua
                  veniam tempor noster veniam enim culpa labore duis sunt culpa
                  nulla illum cillum fugiat legam esse veniam culpa fore nisi
                  cillum quid.
                </span>
                <i className="bi bi-quote quote-icon-right" />
              </p>
            </div>
          </div>
          {/* End testimonial item */}
        </div>
        <div className="swiper-pagination" />
      </div>
    </div>
  </section>
  {/* /Testimonials Section */}
</main>

            <Footer />
        </>
    )
}

export default About