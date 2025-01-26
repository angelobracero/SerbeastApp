import { FaStar } from "react-icons/fa";
import { Button } from "../common/index";

const FeaturedProfessional = ({ img, name, description }) => {
  return (
    <div className="bg-lightblue w-[249px] h-[312px] rounded-lg">
      <div className="flex flex-col items-center relative w-[90%] mx-auto gap-6">
        <img src={img} alt="profile image" className="absolute top-[-3.5em]" />
        <h3 className="text-2xl font-semibold pt-12">{name}</h3>
        <div className="flex gap-2">
          <FaStar className="text-[#fffc37] h-6 w-6" />
          <FaStar className="text-[#fffc37] h-6 w-6" />
          <FaStar className="text-[#fffc37] h-6 w-6" />
          <FaStar className="text-[#fffc37] h-6 w-6" />
          <FaStar className="text-[#fffc37] h-6 w-6" />
        </div>
        <p className="font-roboto text-base font-medium">{description}</p>
        <Button className="bg-[#D0CCD0] text-lightblue hover:brightness-100  px-6 py-2 rounded-full">
          View Profile
        </Button>
      </div>
    </div>
  );
};

export default FeaturedProfessional;
