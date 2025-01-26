import { IoMdHome, IoMdCheckmarkCircleOutline } from "react-icons/io";
import { FaRegCalendar, FaTools } from "react-icons/fa";
import { MdOutlinePending } from "react-icons/md";
import profileImage from "../../assets/images/profile-images/profile-image.webp";
import { Link } from "react-router-dom";
import { useUser } from "../../store/UserContext";

const Sidebar = ({ isMenuMobileOpen, isMenuPcOpen }) => {
  const { user } = useUser();

  return (
    <aside
      className={`${isMenuMobileOpen ? "translate-x-[0px]" : "translate-x-[-250px]"} md:translate-x-[0px] fixed top-14 bottom-0 left-0 text-xl z-40 font-medium text-white bg-darkblue ${isMenuPcOpen ? "w-[250px]" : "w-[50px]"} transition-all md:text-lg font-roboto md:block`}
    >
      <div
        className={`flex flex-col items-center font-montserrat mb-5 ${isMenuPcOpen ? "block" : "hidden"} `}
      >
        <Link to="/p/account">
          <img src={profileImage} alt="" className="w-20 cursor-pointer" />
        </Link>
        <h4 className="text-md font-semibold">
          {user.firstname + " " + user.lastname}
        </h4>
        <p className="text-xs text-gray-300">{user.email}</p>
      </div>

      <Link
        to="/p"
        className={`grid ${isMenuPcOpen ? "grid-cols-[30px_1fr]" : "grid-cols-1 mt-[145px]"} items-center hover:bg-[#0A3B50] hover:text-white cursor-pointer py-3 relative`}
      >
        <IoMdHome
          className={`h-7 w-7 ${isMenuPcOpen ? "ml-4" : "ml-[11px]"}`}
        />
        <p className={`${isMenuPcOpen ? "block" : "hidden"} pl-7`}>Dashboard</p>
      </Link>
      <Link
        to="/p/services"
        className="grid grid-cols-[30px_1fr] items-center hover:bg-[#0A3B50] hover:text-white cursor-pointer py-3 relative"
      >
        <FaTools className={`h-5 w-5 ${isMenuPcOpen ? "ml-4" : "ml-[14px]"}`} />
        <p className={`${isMenuPcOpen ? "block" : "hidden"} pl-7`}>
          My Services
        </p>
      </Link>

      <Link
        to="/p/pending-bookings"
        className="grid grid-cols-[30px_1fr] items-center hover:bg-[#0A3B50] hover:text-white cursor-pointer py-3 relative"
      >
        <MdOutlinePending
          className={`h-5 w-5 ${isMenuPcOpen ? "ml-4" : "ml-[14px]"}`}
        />
        <p className={`${isMenuPcOpen ? "block" : "hidden"} pl-7`}>
          Pending Bookings
        </p>
      </Link>

      <Link
        to="/p/confirmed-bookings"
        className="grid grid-cols-[30px_1fr] items-center hover:bg-[#0A3B50] hover:text-white cursor-pointer py-3 relative"
      >
        <FaRegCalendar
          className={`h-5 w-5 ${isMenuPcOpen ? "ml-4" : "ml-[14px]"}`}
        />
        <p className={`${isMenuPcOpen ? "block" : "hidden"} pl-7`}>
          Confirmed Bookings
        </p>
      </Link>

      <Link
        to="/p/completed-bookings"
        className="grid grid-cols-[30px_1fr] items-center hover:bg-[#0A3B50] hover:text-white cursor-pointer py-3 relative"
      >
        <IoMdCheckmarkCircleOutline
          className={`h-5 w-5 ${isMenuPcOpen ? "ml-4" : "ml-[14px]"}`}
        />
        <p className={`${isMenuPcOpen ? "block" : "hidden"} pl-7`}>
          Completed Bookings
        </p>
      </Link>
    </aside>
  );
};

export default Sidebar;
