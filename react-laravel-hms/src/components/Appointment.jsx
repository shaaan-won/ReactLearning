// import React from "react";

// const Appointment = () => {
//   return (
//     <section className="tm-relative" id="appointment">
//       <div className="tm-half-section-bg right">
//         <img src="assets/img/appointment-bg.jpg" alt="about hafl bg" />
//       </div>
//       <div className="container">
//         <div className="row">
//           <div className="col-lg-7 tm-hf-hide">
//             <div className="empty-space col-md-b0 col-xs-b70" />
//             <div
//               className="tm-appointment-heading tm-gray-bg wow fadeInLeft"
//               data-wow-duration="1s"
//               data-wow-delay="0.1s"
//             >
//               <div className="tm-section-heading text-center">
//                 <h2>MAKE AN APPOINTMENT</h2>
//                 <div className="tm-section-seperator">
//                   <span />
//                 </div>
//                 <p>
//                   If you wont to make an appointment with any specialist just
//                   fill up the form with valid data and we will contact you via
//                   phone for confirmation.
//                 </p>
//               </div>
//             </div>
//           </div>
//           {/* .col */}
//           <div className="col-lg-5">
//             <div className="empty-space col-md-b60 col-xs-b40" />
//             <form
//               method="POST"
//               action="https://thememarch.com/demo/html/trustlife/trustlife/assets/php/appointment.php"
//               className="tm-appointment-form"
//               id="appointment-form"
//             >
//               <div id="tm-alert1" />
//               <div className="tm-form-field">
//                 <input
//                   type="text"
//                   id="uname"
//                   name="uname"
//                   placeholder="Full Name"
//                   required
//                 />
//                 <span className="bar" />
//               </div>
//               <div className="tm-form-field">
//                 <input
//                   type="text"
//                   id="uemail"
//                   name="uemail"
//                   placeholder="Email Address"
//                   required
//                 />
//                 <span className="bar" />
//               </div>
//               <div className="tm-form-field">
//                 <input
//                   type="text"
//                   id="unumber"
//                   name="unumber"
//                   placeholder="Phone Number"
//                   required
//                 />
//                 <span className="bar" />
//               </div>
//               <div className="tm-form-field">
//                 <input
//                   name="udate"
//                   type="text"
//                   id="udate"
//                   placeholder="Booking Date"
//                 />
//                 <span className="bar" />
//                 <div className="date-icon">
//                   <i className="fa fa-calendar" />
//                 </div>
//               </div>
//               <div className="tm-form-field">
//                 <div className="tm-custom-select-wrap">
//                   <select
//                     name="udepartment"
//                     className="tm-custom-select"
//                     id="udepartment"
//                   >
//                     <option value="department">Department</option>
//                     <option value="dental-care">Dental Care</option>
//                     <option value="neurology">Neurology</option>
//                     <option value="crutches">Crutches</option>
//                     <option value="cardiology">Cardiology</option>
//                     <option value="pulmonary">Pulmonary</option>
//                     <option value="x-ray">X-Ray</option>
//                   </select>
//                 </div>
//               </div>
//               <div className="tm-form-field">
//                 <div className="tm-custom-select-wrap">
//                   <select
//                     name="udoctor"
//                     className="tm-custom-select"
//                     id="udoctor"
//                   >
//                     <option value="doctor">Doctor</option>
//                     <option value="jhon-doe">Dr. Jhon Doe</option>
//                     <option value="mak-rushi">Dr. Mak Roshi</option>
//                     <option value="mohoshin-kabir">Dr. Mohoshin Kabir</option>
//                     <option value="nayon-borua">Dr. Nayon Borua</option>
//                     <option value="rasel-islam">Dr. Rasel Islam</option>
//                     <option value="mahid-islam">Dr. Mahid Islam</option>
//                   </select>
//                 </div>
//               </div>
//               <div className="tm-form-field">
//                 <textarea
//                   cols={30}
//                   rows={10}
//                   id="umsg"
//                   name="umsg"
//                   placeholder="Your Message"
//                   defaultValue={""}
//                 />
//                 <span className="bar" />
//               </div>
//               <div className="empty-space col-xs-b10" />
//               <div className="tm-form-field">
//                 <button
//                   className="tm-btn1 tm-reverse"
//                   type="submit"
//                   id="appointment-submit"
//                   name="submit"
//                 >
//                   BOOK APPOINTMENT
//                 </button>
//               </div>
//             </form>
//             <div className="empty-space col-md-b60 col-xs-b70" />
//           </div>
//           {/* .col */}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Appointment;

// import React, { useState, useEffect } from "react";
// import axios from "axios";

// const Appointment = () => {
//   const [formData, setFormData] = useState({
//     uname: "",
//     uemail: "",
//     unumber: "",
//     udate: "",
//     udepartment: "",
//     udoctor: "",
//     umsg: "",
//   });

//   const [departments, setDepartments] = useState([]);
//   const [doctors, setDoctors] = useState([]);
//   const [loading, setLoading] = useState(false);
//   const [message, setMessage] = useState("");

//   // Fetch Departments and Doctors using Axios
//   useEffect(() => {
//     axios
//       .get(
//         "http://localhost/LARAVEL_BEGINING/PROJECT-HMS-SHAAN/public/api/departments"
//       ) // Replace with actual API
//       .then((res) => setDepartments(res.data))
//       .catch((err) => console.error("Error fetching departments:", err));

//     axios
//       .get(
//         "http://localhost/LARAVEL_BEGINING/PROJECT-HMS-SHAAN/public/api/doctors"
//       ) // Replace with actual API
//       .then((res) => setDoctors(res.data))
//       .catch((err) => console.error("Error fetching doctors:", err));
//   }, []);

//   // Handle Input Change
//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   // Handle Form Submission with Axios
//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setLoading(true);
//     setMessage("");

//     try {
//       const response = await axios.post(
//         "http://localhost/LARAVEL_BEGINING/PROJECT-HMS-SHAAN/public/api/appointments", // Replace with actual API
//         formData
//       );

//       if (response.status === 200) {
//         setMessage("Appointment booked successfully!");
//         setFormData({
//           uname: "",
//           uemail: "",
//           unumber: "",
//           udate: "",
//           udepartment: "",
//           udoctor: "",
//           umsg: "",
//         });
//       } else {
//         setMessage("Failed to book appointment. Try again.");
//       }
//     } catch (error) {
//       setMessage("Error submitting appointment.");
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <section className="tm-relative" id="appointment">
//       <div className="tm-half-section-bg right">
//         <img src="assets/img/appointment-bg.jpg" alt="Appointment Background" />
//       </div>
//       <div className="container">
//         <div className="row">
//           <div className="col-lg-7 tm-hf-hide">
//             <div className="tm-appointment-heading tm-gray-bg">
//               <div className="tm-section-heading text-center">
//                 <h2>MAKE AN APPOINTMENT</h2>
//                 <div className="tm-section-seperator">
//                   <span />
//                 </div>
//                 <p>
//                   Fill up the form with valid data, and we will contact you via
//                   phone for confirmation.
//                 </p>
//               </div>
//             </div>
//           </div>

//           <div className="col-lg-5">
//             <form onSubmit={handleSubmit} className="tm-appointment-form">
//               {message && <p className="alert">{message}</p>}

//               <div className="tm-form-field">
//                 <input
//                   type="text"
//                   name="uname"
//                   placeholder="Full Name"
//                   value={formData.uname}
//                   onChange={handleChange}
//                   required
//                 />
//                 <span className="bar" />
//               </div>

//               <div className="tm-form-field">
//                 <input
//                   type="email"
//                   name="uemail"
//                   placeholder="Email Address"
//                   value={formData.uemail}
//                   onChange={handleChange}
//                   required
//                 />
//                 <span className="bar" />
//               </div>

//               <div className="tm-form-field">
//                 <input
//                   type="text"
//                   name="unumber"
//                   placeholder="Phone Number"
//                   value={formData.unumber}
//                   onChange={handleChange}
//                   required
//                 />
//                 <span className="bar" />
//               </div>

//               <div className="tm-form-field">
//                 <input
//                   type="date"
//                   name="udate"
//                   value={formData.udate}
//                   onChange={handleChange}
//                   required
//                 />
//                 <span className="bar" />
//               </div>

//               <div className="tm-form-field">
//                 <select
//                   name="udepartment" className="tm-custom-select"
//                   value={formData.udepartment}
//                   onChange={handleChange}
//                   required
//                 >
//                   <option value="">Select Department</option>
//                   {departments.map((dept) => (
//                     <option key={dept.id} value={dept.name}>
//                       {dept.name}
//                     </option>
//                   ))}
//                 </select>
//               </div>

//               <div className="tm-form-field ">
//                 <select
//                   name="udoctor" className="tm-custom-select"
//                   value={formData.udoctor}
//                   onChange={handleChange}
//                   required
//                 >
//                   <option value="">Select Doctor</option>
//                   {doctors.map((doc) => (
//                     <option key={doc.id} value={doc.name}>
//                       {doc.name}
//                     </option>
//                   ))}
//                 </select>
//               </div>

//               <div className="tm-form-field">
//                 <textarea
//                   name="umsg"
//                   placeholder="Your Message"
//                   value={formData.umsg}
//                   onChange={handleChange}
//                 />
//                 <span className="bar" />
//               </div>

//               <div className="tm-form-field">
//                 <button
//                   className="tm-btn1 tm-reverse"
//                   type="submit"
//                   disabled={loading}
//                 >
//                   {loading ? "Booking..." : "BOOK APPOINTMENT"}
//                 </button>
//               </div>
//             </form>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Appointment;

import React, { useState, useEffect } from "react";
import axios from "axios";

const API_BASE_URL =
  "http://localhost/LARAVEL_BEGINING/PROJECT-HMS-SHAAN/public/api";

const Appointment = () => {
  const [formData, setFormData] = useState({
    uname: "",
    uemail: "",
    unumber: "",
    udate: "",
    udepartment: "Select Department",
    udoctor: "Select Doctor",
    umsg: "",
  });

  const [departments, setDepartments] = useState([]);
  const [doctors, setDoctors] = useState([]);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  const [error, setError] = useState(null);

  useEffect(() => {
    axios
      .get(`${API_BASE_URL}/departments`)
      .then((res) => setDepartments(res.data))
      .catch((err) => {
        console.error("Error fetching departments:", err);
        setError("Failed to load departments. Please try again later.");
      });

    axios
      .get(`${API_BASE_URL}/doctors`)
      .then((res) => setDoctors(res.data))
      .catch((err) => {
        console.error("Error fetching doctors:", err);
        setError("Failed to load doctors. Please try again later.");
      });
  }, []);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const validateForm = () => {
    if (
      !formData.uname ||
      !formData.uemail ||
      !formData.unumber ||
      !formData.udate ||
      formData.udepartment === "Select Department" ||
      formData.udoctor === "Select Doctor"
    ) {
      setMessage("Please fill out all fields.");
      return false;
    }
    return true;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;
    setLoading(true);
    setMessage("");

    try {
      const formattedDate = new Date(formData.udate)
        .toISOString()
        .split("T")[0];
      const payload = { ...formData, udate: formattedDate };
      const response = await axios.post(
        `${API_BASE_URL}/appointments`,
        payload
      );

      if (response.status === 200) {
        setMessage("Appointment booked successfully!");
        setFormData({
          uname: "",
          uemail: "",
          unumber: "",
          udate: "",
          udepartment: "Select Department",
          udoctor: "Select Doctor",
          umsg: "",
        });
      } else {
        setMessage("Failed to book appointment. Try again.");
      }
    } catch (error) {
      setMessage("Error submitting appointment.");
      console.error("Error:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="tm-relative" id="appointment">
      <div className="tm-half-section-bg right">
        <img src="assets/img/appointment-bg.jpg" alt="Appointment Background" />
      </div>
      <div className="container">
        <div className="row">
          <div className="col-lg-7 tm-hf-hide">
            <div className="tm-appointment-heading tm-gray-bg">
              <div className="tm-section-heading text-center">
                <h2>MAKE AN APPOINTMENT</h2>
                <div className="tm-section-seperator">
                  <span />
                </div>
                <p>
                  Fill up the form with valid data, and we will contact you via
                  phone for confirmation.
                </p>
              </div>
            </div>
          </div>

          <div className="col-lg-5">
            {error && <p className="error">{error}</p>}
            {message && (
              <p
                className={`alert ${
                  message.includes("success") ? "success" : "error"
                }`}
              >
                {message}
              </p>
            )}

            <form onSubmit={handleSubmit} className="tm-appointment-form">
              <div className="tm-form-field">
                <input
                  type="text"
                  name="uname"
                  placeholder="Full Name"
                  value={formData.uname}
                  onChange={handleChange}
                  required
                />
                <span className="bar" />
              </div>

              <div className="tm-form-field">
                <input
                  type="email"
                  name="uemail"
                  placeholder="Email Address"
                  value={formData.uemail}
                  onChange={handleChange}
                  required
                />
                <span className="bar" />
              </div>

              <div className="tm-form-field">
                <input
                  type="text"
                  name="unumber"
                  placeholder="Phone Number"
                  value={formData.unumber}
                  onChange={handleChange}
                  required
                />
                <span className="bar" />
              </div>

              <div className="tm-form-field">
                <input
                  type="date"
                  name="udate"
                  value={formData.udate}
                  onChange={handleChange}
                  required
                />
                <span className="bar" />
              </div>

              <div className="tm-form-field">
                <select
                  name="udepartment"
                  value={formData.udepartment}
                  onChange={handleChange}
                  required
                >
                  <option value="Select Department">Select Department</option>
                  {departments.map((dept) => (
                    <option key={dept.id} value={dept.id}>
                      {dept.name}
                    </option>
                  ))}
                </select>
              </div>

              <div className="tm-form-field">
                <select
                  name="udoctor"
                  value={formData.udoctor}
                  onChange={handleChange}
                  required
                >
                  <option value="Select Doctor">Select Doctor</option>
                  {doctors.map((doc) => (
                    <option key={doc.id} value={doc.id}>
                      Dr. {doc.name}
                    </option>
                  ))}
                </select>
              </div>

              <div className="tm-form-field">
                <textarea
                  name="umsg"
                  placeholder="Your Message"
                  value={formData.umsg}
                  onChange={handleChange}
                />
                <span className="bar" />
              </div>

              <div className="tm-form-field">
                <button
                  className="tm-btn1 tm-reverse"
                  type="submit"
                  disabled={loading}
                >
                  {loading ? "Booking..." : "BOOK APPOINTMENT"}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Appointment;
