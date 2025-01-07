import React, { useState , useEffect } from "react";
import axios from "axios";

const CreateForm = () => {
  const CreateStaff = () => {
    const [staff, setStaff] = useState({
      name: "",
      staff_role_id: "",
      email: "",
      phone: "",
      address: "",
      work_schedule: "",
      hired_date: "",
      performance_score: "",
      salary: "",
    });
  };

  const handleChange = (e) => {
    setStaff({ ...staff, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post(
        "http://localhost/Project_PHP/Final_hotel_project/admin/api/Staff/save",
        staff
      )
      .then((res) => {
        console.log(res.data);
        setStaff({
          name: "",
          staff_role_id: "",
          email: "",
          phone: "",
          address: "",
          work_schedule: "",
          hired_date: "",
          performance_score: "",
          salary: "",
        });
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="container mt-5">
      <form
        onSubmit={handleSubmit}
        className="shadow-lg p-3 mb-5 bg-body rounded"
      >
        <legend className="text-center mb-4 shadow-sm p-2 rounded bg-warning large">
          Staff Information Form
        </legend>
        {/* Name and Role */}
        <div className="row mb-4">
          <div className="col-md-6">
            <label htmlFor="name" className="form-label">
              Name <span className="text-danger">*</span>
            </label>
            <input
              type="text"
              className="form-control"
              onChange={handleChange}
              id="name"
              name="name"
              placeholder="Enter full name"
              required
            />
          </div>
          <div className="col-md-6">
            <label htmlFor="staff_role_id" className="form-label">
              Role ID <span className="text-danger">*</span>
            </label>
            <input
              type="number"
              className="form-control"
              onChange={handleChange}
              id="staff_role_id"
              name="staff_role_id"
              placeholder="Enter role ID"
              required
            />
          </div>
        </div>

        {/* Email and Phone */}
        <div className="row mb-4">
          <div className="col-md-6">
            <label htmlFor="email" className="form-label">
              Email <span className="text-danger">*</span>
            </label>
            <input
              type="email"
              className="form-control"
              onChange={handleChange}
              id="email"
              name="email"
              placeholder="Enter email address"
              required
            />
          </div>
          <div className="col-md-6">
            <label htmlFor="phone" className="form-label">
              Phone <span className="text-danger">*</span>
            </label>
            <input
              type="tel"
              className="form-control"
              onChange={handleChange}
              id="phone"
              name="phone"
              placeholder="Enter phone number"
              required
            />
          </div>
        </div>

        {/* Address */}
        <div className="mb-4">
          <label htmlFor="address" className="form-label">
            Address <span className="text-danger">*</span>
          </label>
          <textarea
            className="form-control"
            onChange={handleChange}
            id="address"
            name="address"
            rows="3"
            placeholder="Enter address"
            required
          ></textarea>
        </div>

        {/* Work Schedule, Hired Date, and Performance */}
        <div className="row mb-4">
          <div className="col-md-4">
            <label htmlFor="work_schedule_id" className="form-label">
              Work Schedule ID <span className="text-danger">*</span>
            </label>
            <input
              type="text"
              className="form-control"
              onChange={handleChange}
              id="work_schedule_id"
              name="work_schedule_id"
              placeholder='e.g., {"Monday":"9AM-5PM"}'
              required
            />
          </div>
          <div className="col-md-4">
            <label htmlFor="hired_date" className="form-label">
              Hired Date <span className="text-danger">*</span>
            </label>
            <input
              type="date"
              className="form-control"
              onChange={handleChange}
              id="hired_date"
              name="hired_date"
              required
            />
          </div>
          <div className="col-md-4">
            <label htmlFor="performance_score" className="form-label">
              Performance Score <span className="text-danger">*</span>
            </label>
            <input
              type="number"
              step="0.01"
              className="form-control"
              onChange={handleChange}
              id="performance_score"
              name="performance_score"
              placeholder="e.g., 4.5"
              required
            />
          </div>
        </div>

        {/* Submit Button */}
        <div className="text-center">
          <button type="submit" className="btn btn-primary px-5 py-2 shadow-sm">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default CreateForm;
