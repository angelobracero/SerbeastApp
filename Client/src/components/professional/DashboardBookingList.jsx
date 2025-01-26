import profileImage from "../../assets/images/profile-images/profile-image.webp";

const DashboardBookingList = ({ upcomingBooking }) => {
  return (
    <tr>
      <td>
        <div className="flex">
          <div>
            <img src={profileImage} alt="" className="w-20" />
          </div>
          <div className="text-gray-300 text-sm italic flex-1 grid sm:place-content-center">
            <h5 className="text-white font-semibold text-base not-italic">
              {upcomingBooking.professional}
            </h5>
            <p>{upcomingBooking.service}</p>
            <p className="lg:hidden">{upcomingBooking.date}</p>
            <p className="lg:hidden">{upcomingBooking.time}</p>
          </div>
        </div>
      </td>
      <td className="hidden lg:table-cell">
        <p className="font-semibold">{upcomingBooking.date}</p>
        <p className="text-gray-300 text-sm italic">{upcomingBooking.time}</p>
      </td>
    </tr>
  );
};

export default DashboardBookingList;
