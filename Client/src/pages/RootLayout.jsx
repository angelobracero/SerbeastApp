import { Header, Footer } from "../components/customer/index";
import { Outlet } from "react-router-dom";

const RootLayout = () => {
  return (
    <>
      <Header />
      <main className="text-gray-200 grid">
        <Outlet />
      </main>
      <Footer />
    </>
  );
};

export default RootLayout;
