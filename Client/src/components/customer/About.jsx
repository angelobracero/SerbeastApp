import listeningStudent from "../../assets/images/bg-images/listening-student.webp";

const About = () => {
  return (
    <section className="w-[80%] mx-auto text-center py-10" id="about-section">
      <h1 className="text-3xl font-montserrat font-bold pb-6">About Us</h1>
      <div className="grid md:grid-cols-2 gap-2 md:gap-10 mt-4 font-roboto">
        <div className="border-lightblue border-4 w-4/5 mx-auto max-w-[450px]">
          <img
            src={listeningStudent}
            alt="Listening Student"
            loading="lazy"
          ></img>
        </div>
        <div className="flex items-center">
          <p className="indent-10 text-justify font-medium leading-8 text-xl">
            At Serbisyoso, we connect you with trusted local professionals for
            all your service needs. Our mission is to make finding and booking
            services easy and reliable. Whether you need a{" "}
            <span className="font-bold text-lightgreen italic">
              plumber, electrician, cleaner, or landscaper
            </span>
            , we've got you covered.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
