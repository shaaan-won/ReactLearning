import React, { useEffect, useState } from 'react'
import ApiClient from '../../assets/services/ApiClient';
// import { toast } from 'react-toastify';


import { Link } from 'react-router-dom';
import UpdateModal from '../UpdateModal';



const MngCustomer = () => {
    // Modal sectio For Update
    const [show, setShow] = useState(false);
    const [id, setId] = useState(null);

    // handle Clode
    const handleClose = () => setShow(!show);

    const handleShow = (id) => {
        setShow(!show);
        setId(id);
    }

    // const handleClose = () => setShow(false);
    // const handleShow = () => setShow(true);

    //mng section
    const [customers, setCustomers] = useState([]);

    const fetchCustomers = () => {
        ApiClient
            .get("/Customer/")
            .then((response) => {
                setCustomers(response.data.customers);
            })
            .catch((error) => {
                console.log(error);
            })

    }
    useEffect(() => {
        fetchCustomers();
    }, []);

    // Delete section

    const handleDelete = (id) => {
        ApiClient
            .get("/Customer/delete/" + id)
            .then((response) => {
                console.log(response);
                fetchCustomers();
            })
            .catch((error) => {
                console.log(error);
            })
    }

    console.log(show)
    return (
        <>
            <div className="container mt-5">
                <h2 className="text-center mb-4">Customer List</h2>
                <table className="table table-striped table-bordered table-hover">
                    <thead className="table-dark">
                        <tr>
                            <th>Id</th>
                            <th>Name</th>
                            <th>First Name</th>
                            <th>Last Name</th>
                            <th>Email</th>
                            <th>Phone</th>
                            <th>Id Card Type</th>
                            <th>Id Card Number</th>
                            <th>Address</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {customers.map((data, i) => (
                            <tr key={i}>
                                <td>{data.id}</td>
                                <td>{data.name}</td>
                                <td>{data.first_name}</td>
                                <td>{data.last_name}</td>
                                <td>{data.email}</td>
                                <td>{data.phone}</td>
                                <td>{data.id_card_type_id}</td>
                                <td>{data.id_card_number}</td>
                                <td>{data.address}</td>
                                <td className="text-center d-flex">
                                    <Link to={`/update/${data.id}`} className="btn btn-success me-2">Edit</Link>
                                    <button className="btn btn-primary me-2" onClick={() => handleShow(data.id)} >Modal</button>
                                    <button className="btn btn-danger" onClick={() => handleDelete(data.id)}>Delete</button>
                                </td>
                            </tr>
                        ))}



                        {/* <tr>
                            <td>1</td>
                            <td>John Doe</td>
                            <td>John</td>
                            <td>Doe</td>
                            <td>john.doe@example.com</td>
                            <td>(123) 456-7890</td>
                            <td>Passport</td>
                            <td>A12345678</td>
                            <td>123 Main St, Springfield</td>
                        </tr> */}
                    </tbody>
                </table>
            </div>

            {
                show && <UpdateModal show={show} handleClose={handleClose} id={id} />
            }
        </>
    )
}

export default MngCustomer