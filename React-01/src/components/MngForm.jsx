import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";

const MngForm = () => {
    const [staffs, setStaffMembers] = useState([]);

    const fetchStaffMembers =() => {
        axios.get("http://localhost/Project_PHP/Final_hotel_project/admin/api/Staff/")
        .then((res) => {
            console.log(res.data.staffs);
            setStaffMembers(res.data.staffs);
        })
    }
    useEffect(() => {
      fetchStaffMembers();
    }, []);
  return (

    <>
      <div className="container mt-5">
        <h2 className="text-center mb-4">Staff Members</h2>
        <table className="table table-bordered table-hover shadow-sm">
          <thead className="table-primary">
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Role ID</th>
              <th>Email</th>
              <th>Phone</th>
              <th>Address</th>
              <th>Work Schedule</th>
              <th>Hired Date</th>
              <th>Performance Score</th>
              <th>Created At</th>
              <th>Updated At</th>
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
                    {data.work_schedule}
                    
                  </td>
                  <td>{data.hired_date}</td>
                  <td>{data.performance_score}</td>
                  <td>{data.created_at}</td>
                  <td>{data.updated_at}</td>
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
