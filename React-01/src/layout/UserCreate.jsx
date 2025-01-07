import React from "react";

const CreateForm = () => {
  return (
    <>
      <div className="container mt-5">
      <h2 className="text-center mb-4">User Information Form</h2>
      <form>
        {/* Row for Name and Email */}
        <div className="row mb-4">
          <div className="col-md-6">
            <div className="form-group">
              <label htmlFor="name" className="form-label">
                Name
              </label>
              <input
                type="text"
                className="form-control shadow-sm"
                id="name"
                placeholder="Enter your name"
              />
            </div>
          </div>
          <div className="col-md-6">
            <div className="form-group">
              <label htmlFor="email" className="form-label">
                Email
              </label>
              <input
                type="email"
                className="form-control shadow-sm"
                id="email"
                placeholder="Enter your email"
              />
            </div>
          </div>
        </div>

        {/* Row for Contact and Role */}
        <div className="row mb-4">
          <div className="col-md-6">
            <div className="form-group">
              <label htmlFor="contact" className="form-label">
                Contact
              </label>
              <input
                type="text"
                className="form-control shadow-sm"
                id="contact"
                placeholder="Enter your contact number"
              />
            </div>
          </div>

          <div className="col-md-6">
            <div className="form-group">
              <label htmlFor="role" className="form-label">
                Role
              </label>
              <input
                type="text"
                className="form-control shadow-sm"
                id="role"
                placeholder="Enter your role"
              />
            </div>
          </div>
        </div>

        {/* Submit Button */}
        <div className="text-center">
          <button type="submit" className="btn btn-primary px-4 py-2 shadow-sm">
            Submit
          </button>
        </div>
      </form>
    </div>
    </>
  );
};

export default CreateForm;

