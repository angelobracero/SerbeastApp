import {
  Hero,
  Services,
  HowItWorks,
  About,
  FeaturedProfessionals,
} from "../components/customer/index";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const HomePage = () => {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  return (
    <>
      <Hero />
      <Services />
      <HowItWorks />
      <About />
      {/* <FeaturedProfessionals /> */}
    </>
  );
};

export default HomePage;
