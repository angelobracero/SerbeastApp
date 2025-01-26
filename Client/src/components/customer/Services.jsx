import { Service, displayServices } from "./index";
import Button from "../common/Button";

const Services = () => {
  return (
    <section className="w-[90%] md:w-[80%] mx-auto text-center py-10">
      <h1 className="text-3xl font-montserrat font-bold pb-6">Our Services</h1>
      <div className="grid gap-4 md:grid-cols-2 pb-4">
        {displayServices.map((service) => (
          <Service
            key={service.title}
            title={service.title}
            img={service.img}
            description={service.description}
          />
        ))}
      </div>
      <Button>Explore More Services</Button>
    </section>
  );
};

export default Services;
