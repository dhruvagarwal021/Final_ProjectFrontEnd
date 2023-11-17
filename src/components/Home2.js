import React from "react";
import { useNavigate } from "react-router-dom";
import "./hstyle.css";
import bg1 from "./Images/Satisfied-Customers.jpeg";
import pt1 from "./Images/blog.jpeg";
import pt3 from "./Images/fdback.jpg";

function Home2({ userData }) {

  const navigate = useNavigate();

  const handleAdoptPet=()=>{
    navigate('/adopt-pet');
  };

  const handleVaccinate=()=>{
    navigate('/vaccinate');
  };
  
  return (
    <div>
      <h1>Welcome,</h1>
      <h3>{userData ? `${userData.fname}`:"Guest"}</h3>
      <div className="div1">
        <div
          style={{
            backgroundImage: `url(${pt1})`,
            backgroundSize: "contain",
            backgroundRepeat: "no-repeat",
            width: "700px",
            height: "50vh",
          }}
        />
        <div className="div2">
          <h1>Adoption</h1>
          <p>
            Whether you're just starting to consider <br />
            adopting a new pet or you have already adopted, we're <br />
            here to help.
          </p>
        </div>
      </div>

      <div className="div3">
        <div className="row mt-4">
          <div className="col-md-4">
            <button className="button1" onClick={handleAdoptPet}>Adopt a Pet</button>
          </div>
          <div className="col-md-4">
            <button className="button" onClick={handleVaccinate}>Get vaccination</button>
          </div>
        </div>
      </div>

      <form
        className="from"
        style={{
          backgroundImage: `url(${bg1})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          height: "100vh",
        }}
      >
        <div className="cont1">
          <h1 className="text-xl-center">Happy Clients and feedbacks</h1>
          <div className="cont2">
            <div className="card">
              <div className="card-body">
                <p className="card-text">
                  "I couldn't be happier with this platform. They made the pet
                  adoption process so easy and convenient. The support and
                  resources they provide for pet care are outstanding. My furry
                  friend is now part of the family, thanks to them!"
                </p>
                <h3 className="text-sm-end">- Carl Alan</h3>
              </div>
            </div>

            <div className="card">
              <div className="card-body">
                <p className="card-text">
                  "I've adopted two pets through this platform, and I'm
                  constantly impressed by the level of care and dedication they
                  have for the animals. The post-adoption support is fantastic,
                  and the resources they offer have been a lifeline for a
                  first-time pet owner like me."
                </p>
                <h3 className="text-sm-end">- Rebecca Jones</h3>
              </div>
            </div>

            <div className="card">
              <div className="card-body">
                <p className="card-text">
                  "The team behind this platform truly cares about the
                  well-being of the pets. They go above and beyond to ensure
                  that the animals are placed in loving homes. The user-friendly
                  interface and detailed profiles of adoptable pets made our
                  adoption experience smooth and delightful."
                </p>
                <h3 className="text-sm-end">- Jackson Reeves</h3>
              </div>
            </div>
          </div>
        </div>
      </form>
      <h1 className="text-center">Have questions/ feedbacks ?</h1>
      <div className="div4">
        <div
          style={{
            backgroundImage: `url(${pt3})`,
            backgroundSize: "contain",
            backgroundRepeat: "no-repeat",
            width: "700px",
            paddingTop: "500px",
            height: "50vh",
          }}
        />
        <form>
          <div className="row g-3">
            <div className="col-md-6">
              <label htmlFor="your-name" className="form-label">
                Your Name
              </label>
              <input
                type="text"
                className="form-control"
                id="your-name"
                name="your-name"
                required
              />
            </div>
            <div className="col-md-6">
              <label htmlFor="your-surname" className="form-label">
                Your Surname
              </label>
              <input
                type="text"
                className="form-control"
                id="your-surname"
                name="your-surname"
                required
              />
            </div>
            <div className="col-md-6">
              <label htmlFor="your-email" className="form-label">
                Your Email
              </label>
              <input
                type="email"
                className="form-control"
                id="your-email"
                name="your-email"
                required
              />
            </div>
            <div className="col-md-6">
              <label htmlFor="your-subject" className="form-label">
                Your Subject
              </label>
              <input
                type="text"
                className="form-control"
                id="your-subject"
                name="your-subject"
              />
            </div>
            <div className="col-12">
              <label htmlFor="your-message" className="form-label">
                Your Message
              </label>
              <textarea
                className="form-control"
                id="your-message"
                name="your-message"
                rows="5"
                required
              />
            </div>
            <div className="col-12">
              <div className="row">
                <div className="col-md-6">
                  <button
                    type="submit"
                    className="btn btn-dark w-100 fw-bold"
                  >
                    Send
                  </button>
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Home2;
