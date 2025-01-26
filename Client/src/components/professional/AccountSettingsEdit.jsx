import { useState, useEffect } from "react";
import { Button } from "../common";
import { Link } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { fetchProfessionalInfo } from "../../util/http";
import { useUser } from "../../store/UserContext";
import { Loading, Error } from "../common/index";
import { barangay } from "../../util/barangay";

const AccountSettings = () => {
  const { user } = useUser();

  // State for form fields
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    phoneNumber: "",
    email: "",
    houseLotBlockNumber: "",
    street: "",
    barangay: "",
    birthday: "",
    description: "",
  });

  // Fetch data from API
  const { data, isLoading, isError, error } = useQuery({
    queryKey: ["professional", user.id],
    queryFn: ({ signal }) => fetchProfessionalInfo({ id: user.id, signal }),
  });

  useEffect(() => {
    if (data) {
      setFormData({
        firstName: data.firstName || "", // Use empty string as fallback
        lastName: data.lastName || "",
        phoneNumber: data.phoneNumber || "",
        email: data.email || "",
        houseLotBlockNumber: data.houseLotBlockNumber || "",
        street: data.street || "",
        barangay: data.barangay || "",
        birthday: data.birthday || "",
        description: data.description || "",
      });
    }
  }, [data]);

  if (isLoading) {
    return <Loading />;
  }

  if (isError) {
    return <Error error={error} />;
  }

  // Update state on form field change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <>
      <h1 className="text-center font-montserrat text-4xl font-bold mb-9">
        Account Settings
      </h1>
      <form className="grid grid-cols-2 gap-x-4 gap-y-3 w-[85%] mx-auto">
        <div className="flex flex-col">
          <label>First Name</label>
          <input
            className="bg-darkblue rounded-sm py-1 px-2"
            type="text"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
          />
        </div>
        <div className="flex flex-col">
          <label>Last Name</label>
          <input
            className="bg-darkblue rounded-sm py-1 px-2"
            type="text"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
          />
        </div>
        <div className="flex flex-col">
          <label>Phone Number</label>
          <input
            className="bg-darkblue rounded-sm py-1 px-2"
            type="tel"
            name="phoneNumber"
            value={formData.phoneNumber}
            onChange={handleChange}
          />
        </div>
        <div className="flex flex-col">
          <label>Email</label>
          <input
            className="bg-darkblue rounded-sm py-1 px-2"
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
        </div>
        <div className="flex flex-col">
          <label>House/Block/Lot/No.</label>
          <input
            className="bg-darkblue rounded-sm py-1 px-2"
            type="text"
            name="houseLotBlockNumber"
            value={formData.houseLotBlockNumber}
            onChange={handleChange}
          />
        </div>
        <div className="flex flex-col">
          <label>Street</label>
          <input
            className="bg-darkblue rounded-sm py-1 px-2"
            type="text"
            name="street"
            value={formData.street}
            onChange={handleChange}
          />
        </div>
        <div className="flex flex-col">
          <label>Barangay</label>
          <select
            className="bg-darkblue rounded-sm py-1 px-2"
            name="barangay"
            value={formData.barangay}
            onChange={handleChange}
          >
            {barangay.map((brgy, index) => (
              <option key={index} value={brgy}>
                {brgy}
              </option>
            ))}
          </select>
        </div>
        <div className="flex flex-col">
          <label>Birthday &#40;optional&#41;</label>
          <input
            className="bg-darkblue rounded-sm py-1 px-2"
            type="date"
            name="birthday"
            value={formData.birthday}
            onChange={handleChange}
          />
        </div>
        <div className="flex flex-col col-span-full">
          <label>Description</label>
          <textarea
            className="bg-darkblue rounded-sm py-1 px-2 resize-none h-36"
            name="description"
            value={formData.description}
            onChange={handleChange}
          />
        </div>
        <div className="flex justify-center col-span-full">
          <Button className="px-24 py-1 bg-lightblue rounded-full">
            Save Changes
          </Button>
        </div>
      </form>
    </>
  );
};

export default AccountSettings;
