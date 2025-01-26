import { RxHamburgerMenu, RxTriangleDown } from "react-icons/rx";
import profileImage from "../../assets/images/profile-images/profile-image.webp";

const Header = ({
  handleMenuMobileToggle,
  handleMenuPcToggle,
  isMenuPcOpen,
}) => {
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
        <p>Admin Panel</p>
      </div>
      <div className="items-center px-4 cursor-pointer hover:bg-[#0A3B50] transition duration-300 hidden md:flex">
        <img src={profileImage} alt="" className="w-12" />
        <p>Angelo</p>
        <RxTriangleDown />
      </div>
    </header>
  );
};

export default Header;
