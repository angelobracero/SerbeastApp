import Booking from "./PendingBooking";
import { fetchBookingsPro } from "../../util/http";
import { useQuery } from "@tanstack/react-query";
import { useUser } from "../../store/UserContext";

const PendingBookings = () => {
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

  // Ensure data is an array before calling filter
  const pendingBookings = Array.isArray(data)
    ? data.filter((booking) => booking.status === "Pending")
    : [];

  return (
    <>
      <h1 className="text-center font-bold font-montserrat text-3xl mb-5">
        Pending Bookings
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
              <th className="p-3 hidden md:table-cell">Action</th>
            </tr>
          </thead>
          <tbody>
            {pendingBookings.length === 0 ? (
              <tr>
                <td colSpan="6" className="p-3 text-center h-[400px]">
                  No bookings available.
                </td>
              </tr>
            ) : (
              pendingBookings.map((booking) => (
                <Booking
                  key={booking.bookingId}
                  booking={booking}
                  user={user}
                />
              ))
            )}
          </tbody>
        </table>
      </div>
      {/* <div className="flex justify-between text-gray-300 p-3">
        <div className="italic">Showing 1 to 10 of {data.length} entries</div>
        <div></div>
      </div> */}
    </>
  );
};

export default PendingBookings;
