import React from 'react'
import { Helmet } from 'react-helmet'
import Header from '../components/Header/Header'
import Footer from './Footer'
import { Outlet } from 'react-router-dom'
import Sidebar from '../components/Sidebar/Sidebar'
import Loader from '../components/Loader/Loader'


const MainLayout = () => {
    return (
        <>

            {/* <div className="loader-wrapper">
                    <div className="loader loader-1">
                        <div className="loader-outter" />
                        <div className="loader-inner" />
                        <div className="loader-inner-1" />
                    </div>
                </div> */}
            <Loader />
            {/* loader ends*/}
            {/* tap on top starts*/}
            <div className="tap-top"><i data-feather="chevrons-up" /></div>
            {/* tap on tap ends*/}
            {/* page-wrapper Start*/}
            <div className="page-wrapper compact-wrapper" id="pageWrapper">
                <Header />
                {/* Page Body Start*/}
                <div className="page-body-wrapper">
                    {/* Page Sidebar Start*/}
                    <Sidebar />
                    {/* Page Sidebar Ends*/}
                    <div className="page-body">
                        {/* Container-fluid starts*/}
                        <Outlet />
                        {/* Container-fluid Ends*/}
                    </div>
                    {/* footer start*/}
                    <Footer />
                </div>
            </div>


            <Helmet>
                <script src="../assets/js/jquery.min.js"></script>

                <script src="../assets/js/bootstrap/bootstrap.bundle.min.js"></script>

                <script src="../assets/js/icons/feather-icon/feather.min.js"></script>
                <script src="../assets/js/icons/feather-icon/feather-icon.js"></script>

                <script src="../assets/js/scrollbar/simplebar.js"></script>
                <script src="../assets/js/scrollbar/custom.js"></script>

                <script src="../assets/js/config.js"></script>

                <script src="../assets/js/sidebar-menu.js"></script>
                <script src="../assets/js/sidebar-pin.js"></script>
                <script src="../assets/js/slick/slick.min.js"></script>
                <script src="../assets/js/slick/slick.js"></script>
                <script src="../assets/js/header-slick.js"></script>
                <script src="../assets/js/chart/apex-chart/apex-chart.js"></script>
                <script src="../assets/js/chart/apex-chart/stock-prices.js"></script>
                <script src="../assets/js/chart/apex-chart/moment.min.js"></script>
                {/* <script src="../assets/js/notify/bootstrap-notify.min.js"></script> */}

                <script src="../assets/js/dashboard/default.js"></script>
                <script src="../assets/js/notify/index.js"></script>
                <script src="../assets/js/datatable/datatables/jquery.dataTables.min.js"></script>
                <script src="../assets/js/datatable/datatables/datatable.custom.js"></script>
                <script src="../assets/js/datatable/datatables/datatable.custom1.js"></script>
                <script src="../assets/js/datepicker/date-range-picker/moment.min.js"></script>
                <script src="../assets/js/datepicker/date-range-picker/datepicker-range-custom.js"></script>
                <script src="../assets/js/typeahead/handlebars.js"></script>
                <script src="../assets/js/typeahead/typeahead.bundle.js"></script>
                <script src="../assets/js/typeahead/typeahead.custom.js"></script>
                <script src="../assets/js/typeahead-search/handlebars.js"></script>
                <script src="../assets/js/typeahead-search/typeahead-custom.js"></script>
                <script src="../assets/js/height-equal.js"></script>
                <script src="../assets/js/animation/wow/wow.min.js"></script>

                <script src="../assets/js/script.js"></script>
                <script src="../assets/js/theme-customizer/customizer.js"></script>

                <script>new WOW().init();</script>
            </Helmet>

        </>
    )
}

export default MainLayout