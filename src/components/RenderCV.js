import React from "react";

const RenderCV = (props) => {
  return (
    <div>
      <div className="container">
        <div className="section1">
          <h2 className="cv-h2">Personal Info</h2>
          <div className="cv-info">Name: {props.fullName}</div>
          <div className="cv-info">Email: {props.email}</div>
          <div className="cv-info">Cell: {props.phone}</div>
        </div>
        <div className="section2">
          <h2 className="cv-h2">Education</h2>
          <div className="cv-info">College: {props.college}</div>
          <div className="cv-info">Major: {props.major}</div>
          <div className="cv-info">Date of study: {props.dateOfStudy}</div>
        </div>
        <div className="section3">
          <h2 className="cv-h2">Job Experience</h2>
          <div className="cv-info">Company: {props.company}</div>
          <div className="cv-info">Title: {props.position}</div>
          <div className="cv-info">Description: {props.mainTasks}</div>
          <div className="cv-info">Time at Company: {props.timeAtJob}</div>
        </div>
      </div>
    </div>
  );
};

export default RenderCV;
