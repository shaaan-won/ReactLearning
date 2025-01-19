import React from 'react'
import Header from '../layout/Header'
import Footer from '../layout/Footer'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import MngCustomer from '../component/Customer/MngCustomer'
import CreateCustomer from '../component/Customer/CreateCustomer'
import UpdateCustomer from '../component/Customer/UpdateCustomer'

const CustomerPage = () => {
    return (
        <>
            <BrowserRouter>
                <Header />
                <Routes>
                    <Route path='/' element={<MngCustomer />} />
                    {/* <Route path='/MngCustomer' element={<MngCustomer />} /> */}
                    <Route path='/CreateCustomer' element={<CreateCustomer />} />
                    <Route path='/update/:id' element={<UpdateCustomer />} />

                </Routes>
                <Footer />
            </BrowserRouter>
        </>
    )
}

export default CustomerPage