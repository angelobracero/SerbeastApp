import profileImage from "../../assets/images/profile-images/profile-image.webp";

const CompletedBooking = ({ booking }) => {
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
    </tr>
  );
};

export default CompletedBooking;
