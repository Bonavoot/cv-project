import React, { useState } from "react";
import RenderCV from "./components/RenderCV.js";

const App = () => {
  const [item, setItem] = useState({
    fullName: "",
    email: "",
    phone: "",
    college: "",
    major: "",
    dateOfStudy: "",
    company: "",
    position: "",
    mainTasks: "",
    timeAtJob: "",
  });

  const [submitted, setSubmitted] = useState(false);

  // Form input change handlers
  const handleFullNameChange = (event) => {
    setItem({ ...item, fullName: event.target.value });
  };

  const handleEmailChange = (event) => {
    setItem({ ...item, email: event.target.value });
  };
  const handlePhoneChange = (event) => {
    setItem({ ...item, phone: event.target.value });
  };

  const handleCollegeChange = (event) => {
    setItem({ ...item, college: event.target.value });
  };
  const handleMajorChange = (event) => {
    setItem({ ...item, major: event.target.value });
  };

  const handleDateOfStudyChange = (event) => {
    setItem({ ...item, dateOfStudy: event.target.value });
  };
  const handleCompanyChange = (event) => {
    setItem({ ...item, company: event.target.value });
  };

  const handlePositionChange = (event) => {
    setItem({ ...item, position: event.target.value });
  };
  const handleMainTasksChange = (event) => {
    setItem({ ...item, mainTasks: event.target.value });
  };

  const handleTimeAtJobChange = (event) => {
    setItem({ ...item, timeAtJob: event.target.value });
  };

  // submit button, sets submitted state to true
  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="data-form">
      <form onSubmit={handleSubmit}>
        <h1 className="info-title">INFO CONTENT</h1>
        <h2>Personal Info</h2>
        <label>
          <h4>Name</h4>
          <input
            name="fullName"
            placeholder="Bjarne Stroustrup"
            type="text"
            value={item.fullName}
            onChange={handleFullNameChange}
          ></input>
        </label>
        <br />
        <label>
          <h4>Email</h4>
          <input
            name="email"
            placeholder="user@mail.com"
            type="mail"
            value={item.email}
            onChange={handleEmailChange}
          ></input>
        </label>
        <br />
        <label>
          <h4>Phone Number</h4>
          <input
            name="phone"
            type="text"
            placeholder="(012) 345-6789"
            value={item.phone}
            onChange={handlePhoneChange}
          ></input>
        </label>
        <br />
        <h2>Education</h2>
        <label>
          <h4>College Name</h4>
          <input
            name="college"
            type="text"
            placeholder="Harvard"
            value={item.college}
            onChange={handleCollegeChange}
          ></input>
        </label>
        <br />
        <label>
          <h4>Major</h4>
          <input
            name="major"
            type="text"
            placeholder="Computer Science"
            value={item.major}
            onChange={handleMajorChange}
          ></input>
        </label>
        <br />
        <label>
          <h4>Date of Study</h4>
          <input
            name="dateOfStudy"
            type="date"
            value={item.dateOfStudy}
            onChange={handleDateOfStudyChange}
          ></input>
        </label>
        <br />
        <h2>Experience</h2>
        <label>
          <h4>Company Name</h4>
          <input
            name="company"
            type="text"
            placeholder="FaceBook"
            value={item.company}
            onChange={handleCompanyChange}
          ></input>
        </label>
        <br />
        <label>
          <h4>Position Title</h4>
          <input
            name="position"
            type="text"
            placeholder="Software Engineer"
            value={item.position}
            onChange={handlePositionChange}
          ></input>
        </label>
        <br />
        <label>
          <h4>Describe Job</h4>
          <textarea
            name="mainTasks"
            rows={6}
            cols={34}
            value={item.mainTasks}
            onChange={handleMainTasksChange}
          ></textarea>
        </label>
        <br />
        <label>
          <h4>Time at Company</h4>
          <input
            name="timeAtJob"
            type="position"
            placeholder="1 year"
            value={item.timeAtJob}
            onChange={handleTimeAtJobChange}
          ></input>
        </label>
        <br />
        <input type="submit" value="Submit" />
      </form>
      <div className="cv-resume-render">
        <h1 className="title">CV RESUME</h1>
        {submitted && (
          <RenderCV
            fullName={item.fullName}
            email={item.email}
            phone={item.phone}
            college={item.college}
            major={item.major}
            dateOfStudy={item.dateOfStudy}
            company={item.company}
            position={item.position}
            mainTasks={item.mainTasks}
            timeAtJob={item.timeAtJob}
          />
        )}
      </div>
    </div>
  );
};

export default App;
