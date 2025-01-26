import Booking from "./CompletedBooking";
import { fetchBookingsPro } from "../../util/http";
import { useQuery } from "@tanstack/react-query";
import { useUser } from "../../store/UserContext";

const CompletedBookings = () => {
  const { user } = useUser();

  const { data, isLoading, isError, error } = useQuery({
    queryKey: ["professionalBookings", user.id],
    queryFn: () => fetchBookingsPro(user.id),
  });

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (isError) {
    return <p>Error: {error.message}</p>;
  }

  // Filter the data to only include bookings with status "Completed"
  const completedBookings = Array.isArray(data)
    ? data.filter((booking) => booking.status === "Completed")
    : [];

  return (
    <>
      <h1 className="text-center font-bold font-montserrat text-3xl mb-5">
        Completed Bookings
      </h1>
      <div className="">
        <table className="w-full text-center">
          <thead>
            <tr className="bg-darkblue border-2 border-darkblue">
              <th className="p-3 hidden md:table-cell">Name</th>
              <th className="p-3 hidden md:table-cell">Service</th>
              <th className="p-3 hidden md:table-cell">Date</th>
              <th className="p-3 hidden md:table-cell">Time</th>
              <th className="p-3 hidden md:table-cell">Status</th>
            </tr>
          </thead>
          <tbody>
            {completedBookings.length === 0 ? (
              <tr>
                <td colSpan="5" className="p-3 text-center h-[400px]">
                  No completed bookings available.
                </td>
              </tr>
            ) : (
              completedBookings.map((booking) => (
                <Booking key={booking.bookingId} booking={booking} />
              ))
            )}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default CompletedBookings;
