import React from "react";
import { Link } from "react-router-dom";

const NotFoundPage = () => {
  return (
    <main className="page-not-found">
      <Link className="btn-primary" to="/">
        Back
      </Link>
      <br />
      <p className="page-not-found__text">
        I'm sorry, that page doesn't exist! Please click the back button to go
        back to the homepage.
      </p>
    </main>
  );
};

export default NotFoundPage;
