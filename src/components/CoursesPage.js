import React from "react";
import { getCourses } from "../api/courseApi";

class CoursesPage extends React.Component {
  state = {
    courses: [],
  };

  constructor(props) {
    super(props); // Calling the parent constructor
    this.state = {
      courses: [],
    };
  }

  // Component life-cycle method
  // Proper life cycle method to call API
  componentDidMount() {
    getCourses().then((courses) => this.setState({ courses: courses }));
  }

  render() {
    return (
      <div>
        <h1>Courses Page</h1>
      </div>
    );
  }
}

export default CoursesPage;
