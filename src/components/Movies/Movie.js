import React from "react";
import { Link } from "react-router-dom";
import "./Movie.css";
const Movie = ({ movie }) => {
  const { image, name, premiered, language, type, schedule, id, summary } =
    movie.show;
  return (
    <div className="mt-5 text-center col-lg-4 col-sm-6 gx-5">
      <div
        className="p-3 mb-5 border-0 rounded shadow card w-100 cardHover "
        style={{ background: "#e6f4ed" }}
      >
        <img src={image.medium} className="card-img-top img-fluid" alt="..." />
        <div className="card-body">
          <h3 className=" card-title fw-bold" style={{ color: "#157347" }}>
            {name}
          </h3>
          <h5 className=" card-title text-secondary">
            <q>{type}</q>
          </h5>
          <h6 className=" card-title mt-3 ">
            <i className="fas fa-language"></i> {language}
          </h6>
          <h6 className=" card-title mb-3 ">
            <i className="fas fa-calendar-day me-2"></i>
            {premiered}
          </h6>

          <Link to={`/movie/${id}`}>
            <button className="container btn btn-success">View Details</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Movie;
