import { Button } from "../common/index";
import heroBg from "../../assets/images/bg-images/heroBg.webp";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section
      className="2xl:bg-no-repeat 2xl:bg-cover 2xl:bg-fixed bg-center"
      style={{ backgroundImage: `url(${heroBg})` }}
    >
      <div className="grid place-content-center w-[90%] md:w-[80%] mx-auto text-center h-[462px] ">
        <h1 className="text-4xl sm:text-5xl font-bold leading-tight">
          Connecting You to Trusted Professionals
        </h1>
        <h3 className="text-xl sm:text-2xl font-medium my-3 sm:my-5">
          Plumbers, electricians, cleaners, and more at your fingertips.
        </h3>
        <div className="flex flex-col justify-center sm:flex-row gap-6">
          <Link
            to="/professionals"
            className="bg-lightblue py-2 px-6 rounded-full"
          >
            Browse Professionals
          </Link>
          <Button className="border-2 border-lightblue px-6 rounded-full hover:bg-lightblue">
            Learn More
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
