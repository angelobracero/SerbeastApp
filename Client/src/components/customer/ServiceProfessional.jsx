import { FaStar } from "react-icons/fa";
import { PiMapPinFill } from "react-icons/pi";
import { Link } from "react-router-dom";

const ServiceProfessional = ({
  img,
  name,
  description,
  barangay,
  rating,
  id,
  phone,
}) => {
  return (
    <div className="border-[3px] border-lightblue w-[229px] h-[300px] rounded-lg">
      <div className="flex items-center flex-col relative w-[90%] mx-auto h-full pt-14 pb-5 gap-8 ">
        <img src={img} alt="profile image" className="absolute top-[-3.5em]" />
        <h3 className="text-md font-semibold ">{name}</h3>
        {/* <div className="flex gap-2 ">
          <FaStar className="text-[#fffc37] h-5 w-5" />
          <FaStar className="text-[#fffc37] h-5 w-5" />
          <FaStar className="text-[#fffc37] h-5 w-5" />
          <FaStar className="text-[#fffc37] h-5 w-5" />
          <FaStar className="text-[#fffc37] h-5 w-5" />
        </div> */}
        <p className="font-semibold">{phone}</p>
        <div className="flex items-center gap-1">
          <PiMapPinFill className="text-red-600 h-6 w-6" />
          <p className="font-semibold text-sm">Location: {barangay}</p>
        </div>
        {/* <p className="font-roboto text-start text-sm flex-auto overflow-hidden text-ellipsis line-clamp-3">
          {description}
        </p> */}
        <Link
          to={`/professionals/${id}`}
          className="bg-lightblue hover:brightness-100 py-1 px-5 rounded-full"
        >
          View Profile
        </Link>
      </div>
    </div>
  );
};

export default ServiceProfessional;
