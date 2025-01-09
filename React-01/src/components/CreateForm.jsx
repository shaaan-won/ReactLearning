import React, { useState, useEffect } from "react";
import axios from "axios";
import { toast } from "react-toastify";

const CreateForm = () => {
  
  const [staff, setStaff] = useState({
    name: "",
    staff_role_id: "",
    email: "",
    phone: "",
    address: "",
    work_schedule_id: "",
    hired_date: "",
    performance_score: "",
    image: "",
  });

  const handleChange = (e) => {
    const { name, value,type, files } = e.target;
    // console.log(name, value, type, files);

    if (type === "file") {
      setStaff({ ...staff, [name]: files[0] });
      
    } else {
      setStaff({ ...staff, [name]: value });
    }

    // setStaff({ ...staff, [name]: value });
    // setStaff((prev) => ({ ...prev, [name]: value }));
    console.log(staff);
  };
  
  // useEffect(() => {
  //   console.log(staff);
  // }, [staff]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const empFormData = new FormData();
    empFormData.append("name", staff.name);
    empFormData.append("staff_role_id", staff.staff_role_id);
    empFormData.append("email", staff.email);
    empFormData.append("phone", staff.phone);         //using the append method to add data to the FormData object to be sent to the server
    empFormData.append("address", staff.address);
    empFormData.append("work_schedule_id", staff.work_schedule_id);
    empFormData.append("hired_date", staff.hired_date);
    empFormData.append("performance_score", staff.performance_score);
    empFormData.append("image", staff.image);


    axios
      .post(
        "http://localhost/Project_PHP/Final_hotel_project/admin/api/Staff/save",
        empFormData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      )
      .then((res) => {
        console.log(res.data);
        toast.success("Staff added successfully");
        setStaff({
          name: "",
          staff_role_id: "",
          email: "",
          phone: "",
          address: "",
          work_schedule_id: "",
          hired_date: "",
          performance_score: "",
          image: "",
        });
        navigation.navigate("/StaffManage");
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
          New Staff Information Form
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
              value={staff.name}
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
              value={staff.staff_role_id}
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
              value={staff.email}
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
              value={staff.phone}
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
            value={staff.address}
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
              type="number"
              className="form-control"
              onChange={handleChange}
              id="work_schedule_id"
              name="work_schedule_id"
              placeholder='Enter work schedule ID'
              value={staff.work_schedule_id}
              
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
              value={staff.hired_date}
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
              value={staff.performance_score}
              required
            />
          </div>
          <div className="col-md-6 mt-3 mb-3 offset-md-3">
              <label htmlFor="image" className="form-label">
                Image <span className="text-danger">*</span> 
              </label>
              <input
                type="file"
                className="form-control"
                onChange={handleChange}
                id="image"
                name="image"
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
