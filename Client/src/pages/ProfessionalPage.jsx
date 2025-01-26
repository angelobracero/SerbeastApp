import {
  ServiceProfessional,
  SortableServiceList,
} from "../components/customer/index";
import profileImg from "../assets/images/profile-images/profile-image.webp";

import { fetchProfessionals } from "../util/http";
import { useQuery } from "@tanstack/react-query";
import { Loading, Error } from "../components/common/index";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ProfessionalPage = () => {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  const { data, isLoading, isError, error } = useQuery({
    queryKey: ["professionals"],
    queryFn: fetchProfessionals,
  });

  const professionals = data || [];
  console.log(professionals);

  if (isLoading) {
    return <Loading />;
  }

  if (isError) {
    return <Error error={error} />;
  }

  return (
    <section className="w-[90%] md:w-[80%] mx-auto text-center py-10 min-h-[500px]">
      <h1 className="text-4xl font-montserrat font-bold pb-6">Professionals</h1>
      <SortableServiceList />

      <div className="flex flex-wrap justify-center gap-y-20 gap-x-10 mt-16 xl:gap-x-12 mb-10">
        {professionals
          .filter(
            (pro) =>
              pro.professionalServices && pro.professionalServices.length > 0
          )
          .map((pro) => (
            <ServiceProfessional
              key={`${pro.firstName} ${pro.lastName}`}
              id={pro.id}
              img={profileImg}
              name={`${pro.firstName} ${pro.lastName}`}
              description={pro.description}
              barangay={pro.barangay}
              rating={pro.rating}
              phone={pro.phoneNumber}
            />
          ))}
      </div>
    </section>
  );
};

export default ProfessionalPage;
