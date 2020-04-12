import React from "react";

function HomePage() {
  return (
    <div className="jumbotron">
      <h1>Course Administration</h1>
      <p>React, Flux and React Router for ultra-responsivce web apps.</p>
      <a href="/about" className="btn btn-primary">
        About
      </a>
    </div>
  );
}

export default HomePage;
