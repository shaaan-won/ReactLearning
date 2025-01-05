// import React from "react";

// const StudentResult = ({ students }) => {
//   // Function to determine grade based on marks
//   const getGrade = (marks) => {
//     switch (true) {
//       case marks >= 90:
//         return "A";
//       case marks >= 80:
//         return "B";
//       case marks >= 70:
//         return "C";
//       case marks >= 60:
//         return "D";
//       default:
//         return "F";
//     }
//   };

//   return (
//     <div>
//       <h1>Student Results</h1>
//       <table border="1" style={{ borderCollapse: "collapse", width: "100%" }}>
//         <thead>
//           <tr>
//             <th>ID</th>
//             <th>Name</th>
//             <th>Age</th>
//             <th>Gender</th>
//             <th>Subject</th>
//             <th>Marks</th>
//             <th>Grade</th>
//           </tr>
//         </thead>
//         <tbody>
//           {students.map((student) =>
//             Object.entries(student.subjects).map(([subject, marks]) => (
//               <tr key={`${student.id}-${subject}`}>
//                 <td>{student.id}</td>
//                 <td>{student.name}</td>
//                 <td>{student.age}</td>
//                 <td>{student.gender}</td>
//                 <td>{subject}</td>
//                 <td>{marks}</td>
//                 <td>{getGrade(marks)}</td>
//               </tr>
//             ))
//           )}
//         </tbody>
//       </table>
//     </div>
//   );
// };

// export default StudentResult;


import React from 'react';

const StudentResults = ({ students }) => {
  const getGrade = (marks) => {
    switch (true) {
      case marks >= 90:
        return "A";
      case marks >= 80:
        return "B";
      case marks >= 70:
        return "C";
      case marks >= 60:
        return "D";
      default:
        return "F";
    }
  };

  return (
    <div className="container mt-5" >
      {students.map(({ id, name, age, gender, subjects: { Mathematics, Physics, Chemistry, Biology, English} , totalSubjects}) => (
        <div className="card mb-3 p-3 text-center" key={id}>
          <h2 className="card-title">{name}</h2>
          <p className='card-text'>Age: {age}</p>
          <p className='card-text'>Gender: {gender}</p>
          <p>Subjects:</p>
          <table  className='table table-bordered table-striped table-hover w-40'>
            <thead>
              <tr>
                <th>Subject</th>
                <th>Marks</th>
                <th>Grade</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Mathematics</td>
                <td>{Mathematics}</td>
                <td>{getGrade(Mathematics)}</td>
              </tr>
              <tr>
                <td>Physics</td>
                <td>{Physics}</td>
                <td>{getGrade(Physics)}</td>
              </tr>
              <tr>
                <td>Chemistry</td>
                <td>{Chemistry}</td>
                <td>{getGrade(Chemistry)}</td>
              </tr>
              <tr>
                <td>Biology</td>
                <td>{Biology}</td>
                <td>{getGrade(Biology)}</td>
              </tr>
              <tr>
                <td>English</td>
                <td>{English}</td>
                <td>{getGrade(English)}</td>
              </tr>
              <tr>
                <td>Total Marks</td>
                <td>{Mathematics + Physics + Chemistry + Biology + English}</td>
                <td></td>
              </tr>
            </tbody>
          </table>
          <p>Total Subjects: {totalSubjects}</p> {/* Modify to fit actual totalSubjects if needed */}
        </div>
      ))}
    </div>
  );
};

export default StudentResults;
