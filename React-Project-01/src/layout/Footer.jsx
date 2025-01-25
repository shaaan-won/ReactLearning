import React from 'react'

const Footer = () => {
    return (
        <>
            <footer className="footer">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-md-12 footer-copyright d-flex flex-wrap align-items-center justify-content-between">
                            <p className="mb-0 f-w-600">Copyright 2023 © Mofi theme by pixelstrap</p>
                            <p className="mb-0 f-w-600">Hand crafted &amp; made with
                                <svg className="footer-icon">
                                    <use href="../assets/svg/icon-sprite.svg#footer-heart"> </use>
                                </svg>
                            </p>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    )
}

export default Footer