import profileImage from "../../assets/images/profile-images/profile-image.webp";

import { IoMdStar } from "react-icons/io";
import { FaLocationDot } from "react-icons/fa6";
import { BookingModal } from "./index";
import { useState } from "react";
import { useParams } from "react-router-dom";
import { fetchProfessional } from "../../util/http";
import { useQuery } from "@tanstack/react-query";
import { toast } from "react-toastify";
import { useUser } from "../../store/UserContext";
import { Button, Loading, Error } from "../common/index";
import { ProfessionalInfoServices } from "./index";

const ProfessionalInfo = () => {
  const { user } = useUser();
  const [isOpen, setIsOpen] = useState(false);

  function handleOpenBooking() {
    if (!user) {
      toast.error("Please log in to make a booking!");
    } else {
      setIsOpen((prev) => !prev);
    }
  }

  const params = useParams();

  const { data, isLoading, isError, error } = useQuery({
    queryKey: ["professionals", params.id],
    queryFn: ({ signal }) => fetchProfessional({ id: params.id, signal }),
  });

  if (isLoading) {
    return (
      <section className="w-[90%] md:w-[80%] mx-auto py-20 mb-10 text-white grid place-content-center font-roboto min-h-[500px] flex justify-center items-center">
        <Loading />
      </section>
    );
  }

  if (isError) {
    return <Error error={error} />;
  }

  if (!data) {
    return (
      <section className="w-[90%] md:w-[80%] mx-auto py-20 mb-10 text-white font-roboto min-h-[500px]">
        <p className="text-center text-gray-300">No data available</p>
      </section>
    );
  }

  console.log(data);

  return (
    <>
      <BookingModal
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        handleOpenBooking={handleOpenBooking}
        professionalServices={data.professionalServices}
      />
      <section className="w-[90%] md:w-[80%] mx-auto py-20 mb-10 text-white font-roboto">
        <div className="grid gap-6 md:grid-cols-2 md:mt-10">
          <div className="flex justify-center items-center">
            <img
              src={profileImage}
              alt="Profile"
              className="h-44 w-44 md:h-[250px] md:w-[250px]"
            />
          </div>
          <div className="grid gap-6">
            <h1 className="text-3xl font-bold font-montserrat text-center md:text-start">
              {data.firstName} {data.lastName}
            </h1>
            <div className="flex justify-center md:justify-start gap-4">
              {/* <div className="flex gap-2">
                <IoMdStar className="h-6 w-6" />
                <p>
                  {data.rating} rating{" "}
                  <span className="text-gray-400 italic text-sm">(25)</span>
                </p>
              </div> */}
              <div className="flex gap-2">
                <FaLocationDot className="h-5 w-5" />
                <p>Location: {data.barangay}</p>
              </div>
            </div>
            <div className="flex gap-2">
              <p>Phone Number: {data.phoneNumber}</p>
            </div>
            <div className="flex gap-2">
              <p>Email: {data.email}</p>
            </div>
            <p>{data.description}</p>
            <Button
              className="bg-lightblue rounded-full py-1"
              onClick={handleOpenBooking}
            >
              Book Now
            </Button>
          </div>
        </div>
      </section>

      <div className="grid gap-5 w-[90%] md:w-[80%] mx-auto mb-10">
        <hr />
        <h1 className="font-montserrat font-bold text-xl md:text-3xl ml-4">
          Service Offered
        </h1>
        <section className="flex flex-wrap gap-10 ">
          {data.professionalServices.map((service) => (
            <ProfessionalInfoServices
              key={service.professionalServiceId}
              service={service}
            />
          ))}
        </section>
      </div>
    </>
  );
};

export default ProfessionalInfo;
