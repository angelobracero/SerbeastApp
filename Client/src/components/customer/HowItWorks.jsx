import { IoIosSearch } from "react-icons/io";
import { IoCalendarNumberOutline } from "react-icons/io5";
import { FaCheck, FaArrowDown } from "react-icons/fa";
import { ImArrowRight2 } from "react-icons/im";

const HowItWorks = () => {
  return (
    <section className="bg-[#121212]">
      <div className="w-[90%] md:w-[80%] mx-auto text-center py-10 text-xl lg:text-xl font-semibold font-montserrat">
        <h1 className="text-3xl font-montserrat font-bold pb-6">
          How it Works
        </h1>
        <div className="grid lg:grid-cols-custom">
          <div className="grid">
            <h5>Step 1</h5>
            <h6>Search</h6>
            <IoIosSearch className="mx-auto h-12 w-12 my-4 place-self-center" />
            <p className="font-roboto text-base font-normal">
              Search for local professionals by entering your service needs and
              location.
            </p>
          </div>
          <div className="grid place-content-center py-4">
            <FaArrowDown className="lg:hidden h-5 w-5" />
            <ImArrowRight2 className="hidden lg:block" />
          </div>
          <div className="grid">
            <h5>Step 2</h5>
            <h6>Book</h6>
            <IoCalendarNumberOutline className="mx-auto h-12 w-12 my-4" />
            <p className="font-roboto text-base font-normal">
              Book your preferred service provider directly through our
              platform, choosing a time that works for you.
            </p>
          </div>
          <div className="grid place-content-center py-4">
            <FaArrowDown className="lg:hidden h-5 w-5" />
            <ImArrowRight2 className="hidden lg:block" />
          </div>
          <div className="grid">
            <h5>Step 3</h5>
            <h6>Get the Job done </h6>
            <FaCheck className="mx-auto h-12 w-12 my-4" />
            <p className="font-roboto text-base font-normal">
              Sit back and relax while our trusted professionals complete the
              job to your satisfaction.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
