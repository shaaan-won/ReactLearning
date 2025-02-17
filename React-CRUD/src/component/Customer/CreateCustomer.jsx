import React, { useEffect } from 'react'
import ApiClient from '../../assets/services/ApiClient';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';

const CreateCustomer = () => {
    const [form, setForm] = React.useState({});
    const navigator = useNavigate();

    const handleChange = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        // console.log(form);
        ApiClient
            .post("Customer/save", form)
            .then((res) => {
                // console.log(res);
                setForm({
                    name: "",
                    first_name: "",
                    last_name: "",
                    email: "",
                    phone: "",
                    address: "",
                    id_card_type_id: "",
                    id_card_number: ""
                });
                toast.success("Customer added successfully");
                navigator("/");
                
            })
            .catch((err) => {
                console.log(err);
            });
    }
    // useEffect(() => {
    //     console.log(form);
    // }, [form])

    return (
        <>
            <div className="container mt-5">
                <h2 className="text-center mb-4">User Information Form</h2>
                <form onSubmit={handleSubmit} className="row g-3">
                    <div className="col-md-6">
                        <label htmlFor="name" className="form-label">Name</label>
                        <input type="text" onChange={handleChange} name="name" className="form-control" id="name" placeholder="Enter Name" required />
                    </div>
                    <div className="col-md-6">
                        <label htmlFor="firstName" className="form-label">First Name</label>
                        <input type="text" onChange={handleChange} name="first_name" className="form-control" id="firstName" placeholder="Enter First Name" required />
                    </div>
                    <div className="col-md-6">
                        <label htmlFor="lastName"  className="form-label">Last Name</label>
                        <input type="text"  onChange={handleChange} name="last_name" className="form-control" id="lastName" placeholder="Enter Last Name" required />
                    </div>
                    <div className="col-md-6">
                        <label htmlFor="email" className="form-label">Email</label>
                        <input type="email"  onChange={handleChange} name="email" className="form-control" id="email" placeholder="Enter Email" required />
                    </div>
                    <div className="col-md-6">
                        <label htmlFor="phone" className="form-label">Phone</label>
                        <input type="tel"  onChange={handleChange} name="phone" className="form-control" id="phone" placeholder="Enter Phone Number" required />
                    </div>
                    <div className="col-md-6">
                        <label htmlFor="idCardType" className="form-label">ID Card Type</label>
                        <select  className="form-select" onChange={handleChange} name="id_card_type_id" id="idCardType" required>
                            <option selected disabled >Choose...</option>
                            <option value="1" >Passport</option>
                            <option value="2">Driver's License</option>
                            <option value="3">National ID</option>
                        </select>
                    </div>
                    <div className="col-md-6">
                        <label htmlFor="idCardNumber" className="form-label">ID Card Number</label>
                        <input type="text" onChange={handleChange} name="id_card_number" className="form-control" id="idCardNumber" placeholder="Enter ID Card Number" required />
                    </div>
                    <div className="col-12">
                        <label htmlFor="address"  className="form-label">Address</label>
                        <textarea className="form-control" onChange={handleChange} name="address" id="address" rows={3} placeholder="Enter Address" required defaultValue={""} />
                    </div>
                    <div className="col-12 text-center mt-4 mb-4">
                        <button type="submit" className="btn btn-primary">Submit</button>
                    </div>
                </form>
            </div>

        </>
    )
}

export default CreateCustomer