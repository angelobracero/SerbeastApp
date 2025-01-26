import { ServiceProfessional, SortableServiceList } from "./index";
import profilePic from "../../assets/images/profile-images/profile-image.webp";

const ServiceProfessionals = ({ professionals = [] }) => {
  return (
    <section
      className={`w-[90%] md:w-[80%] mx-auto text-center py-10 ${professionals.length === 0 && "h-[400px]"}`}
    >
      <h1 className="text-4xl font-montserrat font-bold pb-6">Professionals</h1>
      <SortableServiceList />
      <div className="flex flex-wrap justify-center  gap-y-20 gap-x-10 mt-16 xl:gap-x-12 mb-10">
        {professionals.length === 0 ? (
          <p className="text-xl font-bold pt-10">
            No professionals available for this service.
          </p>
        ) : (
          professionals.map((pro) => (
            <ServiceProfessional
              key={pro.professionalName}
              img={profilePic}
              name={pro.professionalName}
              barangay={pro.barangay}
              rating={pro.rating}
              description={pro.description}
              id={pro.professionalId}
              phone={pro.phoneNumber}
            />
          ))
        )}
      </div>
      {/* <Button className="bg-lightblue font-normal rounded-full px-10 py-2">
        View More
      </Button> */}
    </section>
  );
};

export default ServiceProfessionals;
