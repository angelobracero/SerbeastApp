import { useState } from "react";
import Sidebar from "./Sidebar";
import Header from "./Header";
import MyServices from "./MyServices";

const Layout = () => {
  const [isMenuMobileOpen, setIsMenuMobileOpen] = useState(false);
  const [isMenuPcOpen, setIsMenuPcOpen] = useState(true);

  function handleMenuMobileToggle() {
    setIsMenuMobileOpen((prev) => !prev);
  }

  function handleMenuPcToggle() {
    setIsMenuPcOpen((prev) => !prev);
  }

  return (
    <>
      <Header
        handleMenuMobileToggle={handleMenuMobileToggle}
        handleMenuPcToggle={handleMenuPcToggle}
        isMenuPcOpen={isMenuPcOpen}
      />
      <div className="flex">
        <Sidebar
          isMenuMobileOpen={isMenuMobileOpen}
          isMenuPcOpen={isMenuPcOpen}
        />
        <div
          className={`${isMenuPcOpen ? "md:ml-[250px]" : "md:ml-[50px]"} w-full transition-all`}
        >
          <main className="py-8 w-[95%] mx-auto text-white">
            <MyServices />
          </main>
        </div>
      </div>
    </>
  );
};

export default Layout;
