import { RxHamburgerMenu } from "react-icons/rx";
import { FaPowerOff } from "react-icons/fa6";
import { useUser } from "../../store/UserContext";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const Header = ({
  handleMenuMobileToggle,
  handleMenuPcToggle,
  isMenuPcOpen,
}) => {
  const navigate = useNavigate();
  const { logoutUser } = useUser();

  function handleLogout() {
    toast.success("You have successfully logged out.");
    logoutUser();
    navigate("/");
  }

  return (
    <header className="sticky top-0 bg-darkblue h-14 z-50 flex text-white">
      <div
        className="md:hidden absolute top-0 h-full px-4 flex items-center cursor-pointer hover:bg-[#0A3B50]"
        onClick={handleMenuMobileToggle}
      >
        <RxHamburgerMenu className="h-6 w-6 " />
      </div>
      <div
        className={`font-montserrat font-semibold text-3xl w-full ${isMenuPcOpen ? "md:basis-[250px]" : "md:basis-[50px]"}  grid place-content-center`}
      >
        {isMenuPcOpen && "Serbeast"}
      </div>
      <div className={`items-center flex-1 hidden md:flex transition-all`}>
        <div
          className="flex items-center cursor-pointer hover:bg-[#0A3B50] h-full px-4"
          onClick={handleMenuPcToggle}
        >
          <RxHamburgerMenu className="h-6 w-6" />
        </div>
        <p>Professional Panel</p>
      </div>
      <div
        className="items-center px-4 cursor-pointer hover:bg-[#0A3B50] transition duration-300 hidden md:flex"
        onClick={handleLogout}
      >
        <FaPowerOff />
      </div>
    </header>
  );
};

export default Header;
