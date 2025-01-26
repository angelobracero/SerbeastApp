import profileImage from "../../assets/images/profile-images/profile-image.webp";
import { GoCheckCircleFill, GoXCircleFill } from "react-icons/go";
import {
  updateStatusToComplete,
  updateStatusToCancelled,
} from "../../util/http";
import { useMutation } from "@tanstack/react-query";
import { toast } from "react-toastify";
import { useQueryClient } from "@tanstack/react-query";

const ConfirmedBooking = ({ booking, user }) => {
  const queryClient = useQueryClient();

  const { mutate: updateCompleteMutate } = useMutation({
    mutationFn: updateStatusToComplete,
    onSuccess: () => {
      queryClient.invalidateQueries(["professionalBookings", user.id]);
      toast.success("Update Booking Status Successfully");
    },
    onError: (error) => {
      console.log(error);
      const errorMessage =
        error?.response?.data?.message || "Something went wrong";
      toast.error(errorMessage);
    },
  });

  const { mutate: updateCancelMutate } = useMutation({
    mutationFn: updateStatusToCancelled,
    onSuccess: () => {
      queryClient.invalidateQueries(["professionalBookings", user.id]);
      toast.success("Update Booking Status Successfully");
    },
    onError: (error) => {
      const errorMessage =
        error?.response?.data?.message || "Something went wrong";
      toast.error(errorMessage);
    },
  });

  function handleUpdateToCompleteButton() {
    const completeUpdate = window.confirm(
      "Are you sure you want to complete this booking?"
    );

    if (completeUpdate) {
      updateCompleteMutate(booking.bookingId);
    }
  }

  function handleUpdateToCancelButton() {
    const completeUpdate = window.confirm(
      "Are you sure you want to decline this booking?"
    );

    if (completeUpdate) {
      updateCancelMutate(booking.bookingId);
    }
  }

  const bookingDateTime = new Date(`${booking.date}T${booking.time}`);
  const currentDateTime = new Date();
  const isPastBooking = currentDateTime >= bookingDateTime;

  return (
    <tr className="border-2 border-darkblue">
      <td className="flex justify-center items-center gap-5 text-start">
        <div className="w-[70px]">
          <img src={profileImage} alt="" className="w-12" />
        </div>
        <div className="text-sm text-gray-400 italic">
          <h3 className="font-montserrat text-lg text-white not-italic md:py-5">
            {booking.professional.professionalName}
          </h3>
          <p className="md:hidden">{booking.service}</p>
          <p className="md:hidden">{booking.date}</p>
          <p className="md:hidden">{booking.time}</p>
          <p className="md:hidden">{booking.status}</p>
        </div>
      </td>
      <td className="hidden md:table-cell">{booking.service}</td>
      <td className="hidden md:table-cell">{booking.date}</td>
      <td className="hidden md:table-cell">{booking.time}</td>
      <td className="hidden md:table-cell">{booking.status}</td>
      <td className="hidden md:table-cell">
        <div className="flex justify-center gap-2">
          {isPastBooking ? (
            <>
              <button onClick={handleUpdateToCompleteButton}>
                <GoCheckCircleFill className="h-8 w-8 text-[#4CAF50] hover:scale-110 transition" />
              </button>
              <button onClick={handleUpdateToCancelButton}>
                <GoXCircleFill className="h-8 w-8 text-[#F44336] hover:scale-110 transition" />
              </button>
            </>
          ) : (
            <span className="text-sm text-gray-500">
              Actions available after {booking.date} {booking.time}
            </span>
          )}
        </div>
      </td>
    </tr>
  );
};

export default ConfirmedBooking;
