import { Button } from "../common/index";
import { useState } from "react";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { addBooking } from "../../util/http";
import { useUser } from "../../store/UserContext";
import { toast } from "react-toastify";

const BookingModal = ({
  isOpen,
  setIsOpen,
  handleOpenBooking,
  professionalServices,
}) => {
  const queryClient = useQueryClient();
  const { user } = useUser();

  const { mutate } = useMutation({
    mutationFn: addBooking,
    onSuccess: () => {
      toast.success(
        "Your booking request has been submitted and is now pending approval."
      );
      queryClient.invalidateQueries(["bookings"]);

      setIsOpen(false);
    },
    onError: () => {
      toast.error(
        "Bookings cannot be made for today. Please select a later date."
      );
      setIsOpen(false);
    },
  });

  const initialValue = {
    service: professionalServices[0].professionalServiceId,
    time: "",
    date: "",
  };

  const [inputValues, setInputValues] = useState(initialValue);

  const handleChangeValue = (e) => {
    const { name, value } = e.target;
    setInputValues((prev) => {
      const updatedState = { ...prev, [name]: value };
      return updatedState;
    });
  };

  function handleSubmit(e) {
    e.preventDefault();

    const formattedTime = `${inputValues.time}:00`;

    const data = {
      userId: user.id,
      bookingDate: inputValues.date,
      professionalServiceId: parseInt(inputValues.service, 10),
      bookingTime: formattedTime,
    };
    // console.log(data);
    mutate(data);
  }

  return (
    <>
      {isOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm z-40 flex justify-center items-center">
          <dialog className="fixed z-50 h-[450px] w-[90%] max-w-[500px] bg-richblue rounded-lg grid text-white">
            <form
              action=""
              onSubmit={handleSubmit}
              className="flex justify-center"
            >
              <div className="flex flex-col gap-10 justify-center items-start w-[90%] lg:w-[80%] mx-auto">
                <h1 className="text-3xl font-montserrat font-bold self-center">
                  Book
                </h1>
                <div className="flex gap-2 w-full">
                  <label htmlFor="service" className="basis-28">
                    Select Service:
                  </label>
                  <select
                    id="service"
                    name="service"
                    className="flex-1 text-black font-semi-bold pl-2"
                    value={inputValues.service}
                    onChange={handleChangeValue}
                  >
                    {professionalServices?.map((service) => (
                      <option
                        key={service.professionalServiceId}
                        value={service.professionalServiceId}
                      >
                        {service.serviceName}
                      </option>
                    ))}
                  </select>
                </div>
                <div className="flex gap-2 w-full">
                  <label htmlFor="date" className="basis-28">
                    Choose Date:
                  </label>
                  <input
                    id="date"
                    name="date"
                    type="date"
                    className="flex-1 text-black font-semi-bold pl-2"
                    value={inputValues.date}
                    onChange={handleChangeValue}
                  />
                </div>
                <div className="flex gap-2 w-full">
                  <label htmlFor="time" className="basis-28">
                    Choose Time:
                  </label>
                  <input
                    id="time"
                    name="time"
                    type="time"
                    className="flex-1 text-black font-semi-bold pl-2"
                    value={inputValues.time}
                    onChange={handleChangeValue}
                  />
                </div>
                <div className="flex w-full gap-2">
                  <Button className="flex-1 bg-lightblue rounded-full py-1 px-6">
                    Confirm Booking
                  </Button>
                  <Button
                    className="bg-red-700 rounded-full  px-6"
                    onClick={handleOpenBooking}
                  >
                    Cancel
                  </Button>
                </div>
              </div>
            </form>
          </dialog>
        </div>
      )}
    </>
  );
};

export default BookingModal;
