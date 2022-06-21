import React from "react";
import About from "../About";
import MovieList from "../MovieList";

class LandingPage extends React.Component {
  render() {
    return (
      <main>
        <About />
        <MovieList />
      </main>
    );
  }
}

export default LandingPage;
