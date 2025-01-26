import { UserBooking } from "./index";
import { Loading, Error } from "../common/index";
import { fetchBookingsUser } from "../../util/http";
import { useQuery } from "@tanstack/react-query";
import { useUser } from "../../store/UserContext";

const UserBookings = () => {
  const { user } = useUser();

  const { data, isLoading, isError, error } = useQuery({
    queryKey: ["bookings"],
    queryFn: () => fetchBookingsUser(user.id),
  });

  if (isLoading) {
    return <Loading />;
  }

  if (isError) {
    return <Error error={error} />;
  }

  return (
    <section className="w-[90%] md:w-[80%] mx-auto py-10 text-white font-roboto">
      <h1
        className={`text-center font-montserrat font-bold text-3xl md:text-4xl ${data.length > 0 && "pb-10"}`}
      >
        My Bookings
      </h1>

      <div className="min-h-[80vh]">
        {data.length === 0 ? (
          <div className="flex justify-center items-center text-2xl pt-60">
            You have no bookings.
          </div>
        ) : (
          <table className="w-full text-center">
            <thead>
              <tr className="bg-darkblue border-2 border-darkblue">
                <th className="p-3 hidden md:table-cell">Name</th>
                <th className="p-3 hidden md:table-cell">Service</th>
                <th className="p-3 hidden md:table-cell">Time</th>
                <th className="p-3 hidden md:table-cell">Date</th>
                <th className="p-3 hidden md:table-cell">Status</th>
              </tr>
            </thead>
            <tbody>
              {data.map((booking) => (
                <UserBooking key={booking.Id} booking={booking} />
              ))}
            </tbody>
          </table>
        )}
      </div>
    </section>
  );
};

export default UserBookings;
