import React from "react"
import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { toast } from "react-toastify";
import ApiClient, { ApiClientPhoto } from "../services/ApiClient";

const MngForm = () => {
  const [staffs, setStaffMembers] = useState([]);
  // const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCIsImlwIjoiOjoxIiwiaXNzIjoiand0LnNlcnZlciIsImF1ZCI6ImludGVscy5jbyJ9.eyJpZCI6IjEyNyIsIm5hbWUiOiJhZG1pbiIsInJvbGVfaWQiOiIxIiwiZW1haWwiOiJ0b3doaWQxQG91dGxvb2suY29tIiwiaXAiOiI6OjEiLCJpc3MiOiJqd3Quc2VydmVyIiwiYXVkIjoiaW50ZWxzLmNvIiwiZXhwIjoxNzM3MDIyMjU4fQ.SdSbl7dg7UTLGzDiy6AJqF6tB-OC-6u_iat05UhBvkI"
  // const token = localStorage.getItem("token");

  // Fetch Staff Members uging ApiClient Rule
  const fetchStaffMembers = () => {
    const loadingToast = toast.loading("Loading Staff Members...");
    ApiClient
      .get("/Staff/")
      .then((res) => {
        // console.log(res.data.staffs);
        setStaffMembers(res.data.staffs);
        toast.update(loadingToast, {
          render: "Staff Members Loaded",
          type: "success",
          isLoading: false,
          autoClose: 1000,
        });
      })
      .catch((err) => {
        console.log(err);
      })
  };

  // // Fetch Staff Members uging Basic Rule
  // const fetchStaffMembers = () => {
  //   const loadingToast = toast.loading("Loading Staff Members...");
  //   axios
  //     .get("http://localhost/Project_PHP/Final_hotel_project/admin/api/Staff/", {
  //       headers: {
  //         Authorization: `Bearer ${token}`,
  //       },
  //     })
  //     .then((res) => {
  //       // console.log(res.data.staffs);
  //       setStaffMembers(res.data.staffs);
  //       toast.update(loadingToast, {
  //         render: "Staff Members Loaded",
  //         type: "success",
  //         isLoading: false,
  //         autoClose: 1000,
  //       });
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //     })
  // };


  // Fetch Staff Members uging JWT Rule
  // const fetchStaffMembers = () => {
  //   const loadingToast = toast.loading("Loading Staff Members...");
  //   axios
  //     .get("http://localhost/Project_PHP/Final_hotel_project/admin/api/Staff/", {
  //       headers: {
  //         Authorization: `Bearer ${token}`,
  //       },
  //     })
  //     .then((res) => {
  //       // console.log(res.data.staffs);
  //       setStaffMembers(res.data.staffs);
  //       toast.update(loadingToast, {
  //         render: "Staff Members Loaded",
  //         type: "success",
  //         isLoading: false,
  //         autoClose: 1000,
  //       });
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //     });
  // };

  useEffect(() => {
    fetchStaffMembers();
  }, []);

  // Delete Staff Member
  const handleDelete = (id) => {
    confirm("Are you sure you want to delete this staff member?");
    ApiClient
      .get(
        "/Staff/delete/" +
        id
      )
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
              <th>Image</th>
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
                  <td>{data.work_schedule_id}</td>
                  <td>{data.hired_date}</td>
                  <td>{data.performance_score}</td>
                  <td>
                    {/* <img src={`${ApiClientPhoto}+/staff/${data.image}`} alt={data.name || "image"} */}
                    <img src={`${ApiClientPhoto}/staff/${data.image}`} alt={data.name || "image"}
                      onError={(e) => {
                        e.target.onerror = null;
                        e.target.src =`${ApiClientPhoto}/staff/shawon-islam.jpg`;
                      }}
                      style={{ width: "50px", height: "50px" }}
                    />
                  </td>
                  <td className="btn btn-group btn-group-sm mt-2">
                    <NavLink
                      to={`/Show/${data.id}`}
                      className="btn btn-success"
                    >
                      View
                    </NavLink>
                    <NavLink
                      to={`/update/${data.id}`}
                      className="btn btn-primary"
                    >
                      Edit
                    </NavLink>
                    <NavLink
                      onClick={() => handleDelete(data.id)}
                      className="btn btn-danger"
                    >
                      Delete
                    </NavLink>
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
