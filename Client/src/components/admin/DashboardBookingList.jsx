import profileImage from "../../assets/images/profile-images/profile-image.webp";

const DashboardBookingList = () => {
  return (
    <tr>
      <td>
        <div className="flex">
          <div>
            <img src={profileImage} alt="" className="w-20" />
          </div>
          <div className="text-gray-300 text-sm italic flex-1 grid sm:place-content-center">
            <h5 className="text-white font-semibold text-base not-italic">
              Angelo L. Bracero
            </h5>
            <p>Plumbing</p>
            <p className="lg:hidden">18 Nov 2024</p>
            <p className="lg:hidden">8:00 am </p>
          </div>
        </div>
      </td>
      <td className="hidden lg:table-cell">
        <p className="font-semibold">18 Nov 2024</p>
        <p className="text-gray-300 text-sm italic">8:00 am </p>
      </td>
    </tr>
  );
};

export default DashboardBookingList;
