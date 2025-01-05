import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
{
  /* The following line can be included in your src/index.js or App.js file */
}
import 'bootstrap/dist/css/bootstrap.min.css';
import StudentResults from './StudentResults.jsx'

const person = {
  name: "John",
  email: "Dx7Ss@example.com",
  age: 30,
  city: "New York"
}
const { name, email, age, city } = person

const students = [
  {
    id: 1,
    name: "Alice Johnson",
    age: 21,
    gender: "Female",
    subjects: {
      Mathematics: 85,
      Physics: 90,
      Chemistry: 88,
      Biology: 92,
      English: 80
    },
    totalSubjects: 5
  },
  {
    id: 2,
    name: "Bob Smith",
    age: 22,
    gender: "Male",
    subjects: {
      Physics: 78,
      Mathematics: 88,
      Chemistry: 85,
      Biology: 90,
      English: 85
    },
    totalSubjects: 5
  },
  {
    id: 3,
    name: "Catherine Lee",
    age: 20,
    gender: "Female",
    subjects: {
      Chemistry: 89,
      Mathematics: 87,
      Physics: 91,
      Biology: 88,
      English: 90
    },
    totalSubjects: 5
  },
  {
    id: 4,
    name: "David Brown",
    age: 23,
    gender: "Male",
    subjects: {
      Biology: 92,
      Chemistry: 88,
      Mathematics: 90,
      Physics: 85,
      English: 87
    },
    totalSubjects: 5
  },
  {
    id: 5,
    name: "Emily Davis",
    age: 19,
    gender: "Female",
    subjects: {
      Biology: 96,
      Chemistry: 91,
      Physics: 89,
      Mathematics: 93,
      English: 87
    },
    totalSubjects: 5
  }
];


createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <App person={person} /> */}
    <StudentResults students={students} />
  </StrictMode>,
)
