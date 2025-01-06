import React from 'react'
import Header from '../layout/Header'
import Footer from '../layout/Footer'

const Home = () => {
    return (
        <>
            <Header />
            <main className="main">

           
                <section id="hero" className="hero section">

                    <img src="assets/img/hero-bg.jpg" alt="" data-aos="fade-in"/>

                        <div className="container text-center" data-aos="zoom-out" data-aos-delay="100">
                            <div className="row justify-content-center">
                                <div className="col-lg-8">
                                    <h2>Kelly Adams</h2>
                                    <p>I'm a professional illustrator from San Francisco</p>
                                    <a href="about.html" className="btn-get-started">About Me</a>
                                </div>
                            </div>
                        </div>

                </section>

            </main>

            <Footer />

        </>
    )
}

export default Home