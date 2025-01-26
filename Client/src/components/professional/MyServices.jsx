import { FaPlus } from "react-icons/fa6";
import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { fetchProfessionalServices } from "../../util/http";
import { useUser } from "../../store/UserContext";
import { MyService, AddService, DeleteService, EditService } from "./index";
import { Loading } from "../common";

const MyServices = () => {
  const { user } = useUser();
  const { data, isLoading, isError, error } = useQuery({
    queryKey: ["professionalServices", user.id],
    queryFn: () => fetchProfessionalServices(user.id),
  });

  const [isAddServiceOpen, setIsAddServiceOpen] = useState(false);
  const [isEditServiceOpen, setIsEditServiceOpen] = useState(false);
  const [isDeleteServiceOpen, setIsDeleteServiceOpen] = useState(false);
  const [selectedService, setSelectedService] = useState(null);

  const handleEditClick = (service) => {
    setSelectedService(service);
    setIsEditServiceOpen(true);
  };

  const handleDeleteClick = (service) => {
    setSelectedService(service);
    setIsDeleteServiceOpen(true);
  };

  if (isLoading) {
    return <Loading />;
  }

  if (isError) {
    return <p>Error: {error.message}</p>;
  }

  return (
    <>
      {isAddServiceOpen && (
        <AddService
          isAddServiceOpen={isAddServiceOpen}
          setIsAddServiceOpen={setIsAddServiceOpen}
          user={user}
        />
      )}

      {isEditServiceOpen && (
        <EditService
          isEditServiceOpen={isEditServiceOpen}
          setIsEditServiceOpen={setIsEditServiceOpen}
          user={user}
          service={selectedService}
        />
      )}

      {isDeleteServiceOpen && (
        <DeleteService
          serviceId={selectedService.professionalServiceId}
          isDeleteServiceOpen={isDeleteServiceOpen}
          setIsDeleteServiceOpen={setIsDeleteServiceOpen}
          user={user}
        />
      )}

      <div className="grid gap-5">
        <h1 className="font-montserrat font-bold text-xl md:text-4xl text-center">
          My Services
        </h1>
        <div className="flex">
          <button
            className="flex items-center gap-2 ml-auto hover:bg-slate-100 transition hover:text-black cursor-pointer py-1 px-2 rounded-lg"
            onClick={() => setIsAddServiceOpen(true)}
          >
            <FaPlus />
            <p className="text-xs md:text-base">Add New Service</p>
          </button>
        </div>
        <section className="flex flex-wrap gap-10 justify-center">
          {data.length === 0 ? (
            <p className="text-center text-xl text-gray-400 pt-36">
              No services available yet.
            </p>
          ) : (
            data.map((service) => (
              <MyService
                key={service.professionalServiceId}
                setIsEditServiceOpen={() => handleEditClick(service)}
                setIsDeleteServiceOpen={() => handleDeleteClick(service)}
                service={service}
              />
            ))
          )}
        </section>
      </div>
    </>
  );
};

export default MyServices;
