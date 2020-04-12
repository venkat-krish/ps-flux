import React from "react";
import { getCourses } from "../api/courseApi";

class CoursesPage extends React.Component {
  constructor(props) {
    super(props); // Calling the parent constructor
    this.state = {
      courses: [],
    };
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
