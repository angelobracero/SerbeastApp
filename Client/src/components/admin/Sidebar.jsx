import { IoMdHome } from "react-icons/io";
import { FaRegCalendar, FaTools } from "react-icons/fa";
import { MdOutlinePending } from "react-icons/md";
import profileImage from "../../assets/images/profile-images/profile-image.webp";

const Sidebar = ({ isMenuMobileOpen, isMenuPcOpen }) => {
  return (
    <aside
      className={`${isMenuMobileOpen ? "translate-x-[0px]" : "translate-x-[-250px]"} md:translate-x-[0px] fixed top-14 bottom-0 left-0 text-xl font-medium text-white bg-darkblue ${isMenuPcOpen ? "w-[250px]" : "w-[50px]"} transition-all md:text-lg font-roboto md:block`}
    >
      <div
        className={`flex flex-col items-center font-montserrat mb-5 ${isMenuPcOpen ? "block" : "hidden"} `}
      >
        <img src={profileImage} alt="" className="w-20 cursor-pointer" />
        <h4 className="text-md font-semibold">Angelo L. Bracero</h4>
        <p className="text-xs text-gray-300">angelobracero35@gmail.com</p>
      </div>

      <div
        className={`grid ${isMenuPcOpen ? "grid-cols-[30px_1fr]" : "grid-cols-1 mt-[145px]"} items-center hover:bg-[#0A3B50] hover:text-white cursor-pointer py-3 relative`}
      >
        <IoMdHome
          className={`h-7 w-7 ${isMenuPcOpen ? "ml-4" : "ml-[11px]"}`}
        />
        <p className={`${isMenuPcOpen ? "block" : "hidden"} pl-7`}>Dashboard</p>
      </div>

      <div className="grid grid-cols-[30px_1fr] items-center hover:bg-[#0A3B50] hover:text-white cursor-pointer py-3 relative">
        <FaTools className={`h-5 w-5 ${isMenuPcOpen ? "ml-4" : "ml-[14px]"}`} />
        <p className={`${isMenuPcOpen ? "block" : "hidden"} pl-7`}>
          My Services
        </p>
      </div>

      <div className="grid grid-cols-[30px_1fr] items-center hover:bg-[#0A3B50] hover:text-white cursor-pointer py-3 relative">
        <FaRegCalendar
          className={`h-5 w-5 ${isMenuPcOpen ? "ml-4" : "ml-[14px]"}`}
        />
        <p className={`${isMenuPcOpen ? "block" : "hidden"} pl-7`}>
          Confirmed Bookings
        </p>
      </div>

      <div className="grid grid-cols-[30px_1fr] items-center hover:bg-[#0A3B50] hover:text-white cursor-pointer py-3 relative">
        <MdOutlinePending
          className={`h-5 w-5 ${isMenuPcOpen ? "ml-4" : "ml-[14px]"}`}
        />
        <p className={`${isMenuPcOpen ? "block" : "hidden"} pl-7`}>
          Pending Bookings
        </p>
      </div>
    </aside>
  );
};

export default Sidebar;
