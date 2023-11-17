import bg from "./Images/bg.jpeg";
import bg1 from "./Images/Satisfied-Customers.jpeg";
import "./styling.css";
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import sr1 from "./Images/service_icon1.png";
import sr2 from "./Images/service_icon2.png";
import sr3 from "./Images/service_icon3.png";

function Home() {
  return (
    <div>
      <form
        className="form"
        style={{
          backgroundImage: `url(${bg})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          height: "70vh",
        }}
      >
        <div>
          <p
            style={{
              fontSize: "35px",
              color: "white",
              fontFamily: "cursive",
              fontWeight: "bolder",
            }}
          >
            Caring for Paws and Smiles !
          </p>
          <p
            style={{
              fontSize: "15px",
              color: "white",
              fontFamily: "unset",
              borderColor: "yellow",
            }}
          >
            Welcome to Love And Tender Pet Care, where we are dedicated to
            providing top-notch care for your beloved furry family members.
            <br />
            Our experienced and passionate team understands that pets are more
            than just animals; they are cherished members of your family. <br />
            We offer a wide range of services to ensure the health, happiness,
            and well-being of your pets. From regular check-ups and <br />
            vaccinations to grooming, boarding, and specialized care, we are
            committed to meeting all of your pet's needs. Your pet's comfort{" "}
            <br />
            and safety are our utmost priorities, and we strive to create a warm
            and welcoming environment for them.
            <br />
            <br />
            At Love And Tender Pet Care, we believe in nurturing the incredible
            bond you share with your pets, and we are here to support you every
            step of the way. <br />
            Your pet's joy and well-being are at the heart of everything we do.
            Discover the difference of pet care that goes above and beyond –
            choose Love And Tender Pet Care for a tail-wagging, purrfect
            experience
          </p>
        </div>
      </form>

      <div class="services">
        <div class="container">
          <div class="row">
            <div class="col-md-12">
              <div class="titlepage text_align_center pt-4">
                <h2 className="text-center">Services we offer</h2>
              </div>
            </div>
          </div>
          <div class="row ml-10">
            <div class="col-md-4">
              <div class="service_text">
                <i>
                  <img src={sr1} alt="#" />
                </i>
                <h3>PET ADOPTION</h3>
                <p>
                  Discover your new best friend! Our rescued pets are eager to
                  share their love and happiness with you. Every adoption opens
                  the door to a lifetime of companionship and joy. Choose
                  adoption, and change a life forever.
                </p>
              </div>
            </div>
            <div class="col-md-4">
              <div class="service_text">
                <i>
                  <img src={sr2} alt="#" />
                </i>
                <h3>VACCINATION</h3>
                <p>
                  Ensure a healthy and happy life for your furry companion with
                  our expert pet vaccination services. We prioritize your pet's
                  well-being, providing essential vaccines that protect against
                  diseases and ensure a long and joyful life together. Trust us
                  to keep your pet safe and sound."
                </p>
              </div>
            </div>
            <div class="col-md-4">
              <div class="service_text">
                <i>
                  <img src={sr3} alt="#" />
                </i>
                <h3>PET GROMMING</h3>
                <p>
                  Pamper your beloved pet with our top-notch pet grooming
                  services. Our experienced groomers are dedicated to keeping
                  your furry friend looking and feeling their best. From stylish
                  haircuts to soothing baths, we offer a range of grooming
                  treatments that cater to your pet's specific needs. Let your
                  pet enjoy a spa day with us and watch them strut their stuff
                  with confidence!
                </p>
              </div>
            </div>
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
            <div class="card">
              <div class="card-body">
                <p class="card-text">
                  "I couldn't be happier with this platform. They made the pet
                  adoption process so easy and convenient. The support and
                  resources they provide for pet care are outstanding. My furry
                  friend is now part of the family, thanks to them!"
                </p>
                <h3 className="text-sm-end">- Carl Alan</h3>
              </div>
            </div>

            <div class="card">
              <div class="card-body">
                <p class="card-text">
                  "I've adopted two pets through this platform, and I'm
                  constantly impressed by the level of care and dedication they
                  have for the animals. The post-adoption support is fantastic,
                  and the resources they offer have been a lifeline for a
                  first-time pet owner like me."
                </p>
                <h3 className="text-sm-end">- Rebecca Jones</h3>
              </div>
            </div>

            <div class="card">
              <div class="card-body">
                <p class="card-text">
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
    </div>
  );
}

export default Home;
