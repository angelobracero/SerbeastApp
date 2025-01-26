import profileImg from "../../assets/images/profile-images/profile-image.webp";

const UserBooking = ({ booking }) => {
  return (
    <tr className="border-2 border-darkblue">
      <td className="flex justify-start items-center gap-5 text-start pl-10">
        <div className="w-[70px]">
          <img src={profileImg} alt="" />
        </div>
        <div className="text-sm text-gray-400 italic">
          <h3 className="font-bold font-montserrat text-lg text-white not-italic">
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
    </tr>
  );
};

export default UserBooking;
