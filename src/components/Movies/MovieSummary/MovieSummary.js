import React, { useState, useEffect } from "react";
import { useParams } from "react-router";
const MovieSummary = () => {
  const [movieDetails, setMovieDetails] = useState({});
  const { id } = useParams();

  useEffect(() => {
    fetch(`https://api.tvmaze.com/shows/${id}`)
      .then((res) => res.json())
      .then((data) => setMovieDetails(data));
  }, []);
  //form
  const { name, language } = movieDetails;

  const initialInfo = {
    language: language,
    name: name,
    email: "",
  };

  const [bookingInfo, setBookingInfo] = useState(initialInfo);

  const handleOnBlur = (e) => {
    const field = e.target.name;
    const value = e.target.value;
    const newInfo = { ...bookingInfo };
    newInfo[field] = value;
    setBookingInfo(newInfo);
  };

  const handleBookingSubmit = (e) => {
    e.preventDefault();
    // collect data
    const appointment = {
      ...bookingInfo,
      name,
      language,
    };
    console.log(appointment);
    // localstorage data save
    let user_records = new Array();
    user_records = JSON.parse(localStorage.getItem("users"))
      ? JSON.parse(localStorage.getItem("users"))
      : [];
    user_records.push({
      language: language,
      name: name,
      email: "",
    });
    localStorage.setItem("users", JSON.stringify(user_records));
    alert("Data Stored");
  };
  return (
    <div>
      <div className="card container mt-5" style={{ width: "50rem" }}>
        <div className="card-body">
          <h3
            className="card-title text-success"
            style={{ textShadow: " 0 1px 3px rgba(0, 0, 0, 0.2)" }}
          >
            {movieDetails.name}
          </h3>
          <h6 className="card-text mt-2 mb-2 text-secondary">
            {movieDetails.status}
          </h6>
          <h6 className="card-text mt-2 mb-4">{movieDetails.summary}</h6>
          <button
            type="button"
            className="btn btn-success"
            data-bs-toggle="modal"
            data-bs-target="#exampleModal"
          >
            Book Ticket
          </button>
        </div>
      </div>
      {/* modal start */}
      <div>
        <div
          className="modal fade"
          id="exampleModal"
          tabindex="-1"
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h3>Booking Form</h3>
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                ></button>
              </div>
              <div className="modal-body">
                {/* form */}
                <form onSubmit={handleBookingSubmit}>
                  <h5>User Email:</h5>
                  <input
                    className="w-100 mb-3"
                    name="email"
                    onBlur={handleOnBlur}
                    defaultValue="email"
                  />
                  <br />
                  <h5>Movie Name:</h5>
                  <input
                    disabled
                    className="w-100 "
                    name="name"
                    onBlur={handleOnBlur}
                    defaultValue={name}
                  />
                  <br />
                  <br />
                  <h5>Movie Language:</h5>
                  <input
                    disabled
                    className="w-100 mb-3"
                    name="language"
                    onBlur={handleOnBlur}
                    defaultValue={language}
                  />

                  <button
                    type="submit"
                    style={{
                      backgroundColor: "#157347",
                      color: "white",
                      marginTop: "8px",
                    }}
                  >
                    Submit
                  </button>
                </form>
              </div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-secondary"
                  data-bs-dismiss="modal"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieSummary;
