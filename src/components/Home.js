import bg from './Images/bg.jpeg';

function Home() {
    return (
        <div>
            <form className='form' style={{ backgroundImage: `url(${bg})`, backgroundSize: "cover", backgroundRepeat: "no-repeat", height: "100vh" }}>
                <div>
                    <p style={{ fontSize: "35px", color: "white" }}>Caring for Paws and Smiles !</p>
                    <p style={{ fontSize: "15px", color: "white" }}>Welcome to Love And Tender Pet Care, where we are dedicated to providing top-notch care for your beloved furry family members.<br />
                        Our experienced and passionate team understands that pets are more than just animals; they are cherished members of your family. <br />
                        We offer a wide range of services to ensure the health, happiness, and well-being of your pets. From regular check-ups and <br />
                        vaccinations to grooming, boarding, and specialized care, we are committed to meeting all of your pet's needs. Your pet's comfort <br />
                        and safety are our utmost priorities, and we strive to create a warm and welcoming environment for them.<br /><br />
                        At Love And Tender Pet Care, we believe in nurturing the incredible bond you share with your pets, and we are here to support you every step of the way. <br />
                        Your pet's joy and well-being are at the heart of everything we do. Discover the difference of pet care that goes above and beyond – choose Love And Tender Pet Care for a tail-wagging, purrfect experience</p>
                </div>
            </form>
        </div>

    )
}

export default Home;