import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";

const MngForm = () => {
    const [staffs, setStaffMembers] = useState([]);

    const fetchStaffMembers =() => {
        axios.get("http://localhost/Project_PHP/Final_hotel_project/admin/api/Staff/")
        .then((res) => {
            // console.log(res.data.staffs);
            setStaffMembers(res.data.staffs);
        })
    }
    useEffect(() => {
      fetchStaffMembers();
    }, []);

    // Delete Staff Member
    const handleDelete = (id) => {
      confirm("Are you sure you want to delete this staff member?");
      axios
        .get("http://localhost/Project_PHP/Final_hotel_project/admin/api/Staff/delete/"+id)
        .then((res) => {
          // console.log(res.data);
          fetchStaffMembers();
        })
        .catch((err) => {
          console.log(err);
        });
    };
  return (

    <>
      <div className="container mt-5">
        <h2 className="text-center mb-4">Staff Members</h2>
        <table className="table table-responsive table-bordered rounded table-hover shadow">
          <thead className="table-primary">
            <tr className="text-center">
              <th>ID</th>
              <th>Name</th>
              <th>Role ID</th>
              <th>Email</th>
              <th>Phone</th>
              <th>Address</th>
              <th>Work Schedule</th>
              <th>Hired Date</th>
              <th>Performance Score</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {/* Sample Data Row */}
            {/* <tr>
              <td>1</td>
              <td>John Doe</td>
              <td>101</td>
              <td>johndoe@example.com</td>
              <td>1234567890</td>
              <td>123 Main St, City, Country</td>
              <td>
                {"{"}"Monday":"9AM-5PM"{"}"}
              </td>
              <td>2023-01-01</td>
              <td>4.50</td>
              <td>2023-01-01 12:00:00</td>
              <td>2023-01-02 14:00:00</td>
            </tr> */}
            {/* Add more rows dynamically */}
            {staffs?.map((data, i) => {
              return (
                <tr key={i}>
                  <td>{data.id}</td>
                  <td>{data.name}</td>
                  <td>{data.staff_role_id}</td>
                  <td>{data.email}</td>
                  <td>{data.phone}</td>
                  <td>{data.address}</td>
                  <td>
                    {data.work_schedule_id}
                    
                  </td>
                  <td>{data.hired_date}</td>
                  <td>{data.performance_score}</td>
                  <td className="btn btn-group btn-group-sm mt-2">
                      <NavLink to={`/Show/${data.id}`} className="btn btn-success" >View</NavLink>
                      <NavLink to={`/update/${data.id}`} className="btn btn-primary">Edit</NavLink>
                      <NavLink onClick={()=> handleDelete(data.id)} className="btn btn-danger">Delete</NavLink>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default MngForm;
