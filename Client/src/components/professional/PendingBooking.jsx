import { useEffect } from "react";
import profileImage from "../../assets/images/profile-images/profile-image.webp";
import { GoCheckCircleFill, GoXCircleFill } from "react-icons/go";
import {
  updateStatusToConfirm,
  updateStatusToCancelled,
} from "../../util/http";
import { useMutation } from "@tanstack/react-query";
import { toast } from "react-toastify";
import { useQueryClient } from "@tanstack/react-query";

const PendingBooking = ({ booking, user }) => {
  const queryClient = useQueryClient();

  const { mutate: updateConfirmMutate } = useMutation({
    mutationFn: updateStatusToConfirm,
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

  // Automatically cancel past bookings
  useEffect(() => {
    const bookingDateTime = new Date(`${booking.date}T${booking.time}`);
    const currentDateTime = new Date();

    if (currentDateTime > bookingDateTime && booking.status === "Pending") {
      updateCancelMutate(booking.bookingId);
    }
  }, [booking, updateCancelMutate]);

  function handleUpdateToConfirmButton() {
    const confirmUpdate = window.confirm(
      "Are you sure you want to accept this booking?"
    );

    if (confirmUpdate) {
      updateConfirmMutate(booking.bookingId);
    }
  }

  function handleUpdateToCancelButton() {
    const confirmUpdate = window.confirm(
      "Are you sure you want to decline this booking?"
    );

    if (confirmUpdate) {
      updateCancelMutate(booking.bookingId);
    }
  }

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
          <button onClick={handleUpdateToConfirmButton}>
            <GoCheckCircleFill className="h-8 w-8 text-[#4CAF50] hover:scale-110 transition" />
          </button>
          <button onClick={handleUpdateToCancelButton}>
            <GoXCircleFill className="h-8 w-8 text-[#F44336] hover:scale-110 transition" />
          </button>
        </div>
      </td>
    </tr>
  );
};

export default PendingBooking;
