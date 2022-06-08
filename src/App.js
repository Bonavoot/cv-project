import React from "react";
import RenderCV from "./components/RenderCV.js";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    const target = event.target;
    const name = target.name;
    this.setState({
      [name]: target.value,
    });
  }

  handleSubmit(e) {}

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <h2>Personal Info</h2>
          <label>
            <h4>Name:</h4>
            <input
              name="fullName"
              placeholder="Bjarne Stroustrup"
              type="text"
              value={this.state.fullName}
              onChange={this.handleChange}
            ></input>
          </label>
          <br />
          <label>
            <h4>Email:</h4>
            <input
              name="email"
              placeholder="user@mail.com"
              type="mail"
              value={this.state.email}
              onChange={this.handleChange}
            ></input>
          </label>
          <br />
          <label>
            <h4>Phone Number:</h4>
            <input
              name="phone"
              type="text"
              placeholder="(012) 345-6789"
              value={this.state.phone}
              onChange={this.handleChange}
            ></input>
          </label>
          <br />
          <h2>Education</h2>

          <label>
            <h4>College Name:</h4>
            <input
              name="college"
              type="text"
              placeholder="Harvard"
              value={this.state.college}
              onChange={this.handleChange}
            ></input>
          </label>
          <br />
          <label>
            <h4>Major:</h4>
            <input
              name="major"
              type="text"
              placeholder="Computer Science"
              value={this.state.major}
              onChange={this.handleChange}
            ></input>
          </label>
          <br />
          <label>
            <h4>Date of Study:</h4>
            <input
              name="dateOfStudy"
              type="date"
              value={this.state.dateOfStudy}
              onChange={this.handleChange}
            ></input>
          </label>
          <br />
          <h2>Experience</h2>
          <label>
            <h4>Company Name:</h4>
            <input
              name="text"
              type="company"
              placeholder="FaceBook"
              value={this.state.company}
              onChange={this.handleChange}
            ></input>
          </label>
          <br />
          <label>
            <h4>Position Title:</h4>
            <input
              name="text"
              type="position"
              placeholder="Software Engineer"
              value={this.state.position}
              onChange={this.handleChange}
            ></input>
          </label>
          <br />
          <label>
            <h4>Describe Job:</h4>
            <textarea name="mainTasks" value={this.state.mainTasks}></textarea>
          </label>
          <br />
          <label>
            <h4>Time at Company:</h4>
            <input
              name="timeAtJob"
              type="position"
              placeholder="1 year 3 months"
              value={this.state.timeAtJob}
              onChange={this.handleChange}
            ></input>
          </label>
          <br />
          <button type="submit">Submit</button>
        </form>
      </div>
    );
  }
}

export default App;
