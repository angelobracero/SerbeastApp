import FeaturedProfessional from "./FeaturedProfessional";
import { professionalData } from "./index";
import { Link } from "react-router-dom";

const FeaturedProfessionals = () => {
  return (
    <section className="w-[90%] md:w-[80%] mx-auto text-center py-10 text-xl font-semibold font-montserrat">
      <h1 className="text-3xl font-montserrat font-bold pb-6">
        Featured Professionals
      </h1>
      <div className="flex flex-wrap justify-center gap-y-20 gap-x-10 mt-16 xl:gap-x-20 mb-10">
        {professionalData.map((professional) => (
          <FeaturedProfessional
            key={professional.name}
            img={professional.img}
            name={professional.name}
            description={professional.description}
          />
        ))}
      </div>
      <Link
        to="/professionals"
        className="bg-lightblue font-normal px-20 py-2 rounded-full"
      >
        View More
      </Link>
    </section>
  );
};

export default FeaturedProfessionals;
