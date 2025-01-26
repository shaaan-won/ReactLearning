// import { Helmet } from 'react-helmet'
// import Footer from './Footer'
// import { Outlet } from 'react-router-dom'
// import Sidebar from '../components/Sidebar/Sidebar'
// import Loader from '../components/Loader/Loader'
import React from 'react'
import Header from '../components/Header/Header'
import MainMenu from '../components/MainMenu/MainMenu'
import { Outlet } from 'react-router-dom'
import Footer from '../components/Footer/Footer'


const MainLayout = () => {
    return (
        <>
            <div>
                {/* BEGIN: Header*/}
                <Header />
                {/* END: Header*/}
                {/* BEGIN: Main Menu*/}
                <MainMenu />
                {/* END: Main Menu*/}
                {/* BEGIN: Content*/}
                <Outlet />
                {/* END: Content*/}
                <div className="sidenav-overlay" />
                <div className="drag-target" />
                {/* BEGIN: Footer*/}
                <Footer />
                <button className="btn btn-primary btn-icon scroll-top" type="button">
                    <i data-feather="arrow-up" />
                </button>
            </div>
        </>
    )
}

export default MainLayout