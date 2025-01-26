import { IoCallOutline } from "react-icons/io5";
import { CiMail } from "react-icons/ci";
import { FaFacebook, FaInstagram, FaXTwitter, FaGithub } from "react-icons/fa6";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="text-white font-roboto text-sm py-10 text-center grid gap-2 bg-[#121212]">
      <div className="w-[90%] md:w-[80%] mx-auto ">
        <div className="grid gap-4 lg:grid-cols-footer lg:text-start">
          <div>
            <a href="#" className="font-montserrat text-3xl font-bold">
              SERBEAST
            </a>
            <p className="pt-2">"Connecting you with trusted local experts."</p>
          </div>
          <div className="grid gap-4 md:gap-10 md:grid-cols-2 lg:pl-8 xl:pl-32">
            <div>
              <h2 className="font-bold md:pb-2 lg:pb-3">Quick Links</h2>
              <ul className="grid md:gap-1 lg:gap-3 text-gray-200">
                <li>
                  <Link to="/" className="hover:text-white">
                    Home
                  </Link>
                </li>
                <li>
                  <Link to="/professionals" className="hover:text-white">
                    Professionals
                  </Link>
                </li>
                <li>
                  <button className="hover:text-white">Services</button>
                </li>
                <li>
                  <Link to="/" className="hover:text-white">
                    About Us
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="font-bold md:pb-2 lg:pb-3">Popular Services</h2>
              <ul className="grid md:gap-1 lg:gap-3 text-gray-200">
                <li>
                  <Link to="/services/1" className="hover:text-white">
                    Plumbing
                  </Link>
                </li>
                <li>
                  <Link to="/services/2" className="hover:text-white">
                    Electrical
                  </Link>
                </li>
                <li>
                  <Link to="/services/10" className="hover:text-white">
                    Tutoring
                  </Link>
                </li>
                <li>
                  <Link to="/services/3" className="hover:text-white">
                    Cleaning
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="flex justify-center xl:justify-end">
            <div className="w-fit flex flex-col md:gap-1 lg:gap-3">
              <h2 className="font-bold md:pb-2 lg:pb-3">Contact Us</h2>
              <div className="flex items-center justify-center gap-2 lg:justify-start text-gray-200">
                <CiMail className="h-6 w-6" />
                <a
                  href="mailto:support@serbeast.com"
                  className="hover:text-white"
                >
                  support@serbeast.com
                </a>
              </div>
              <div className="flex items-center justify-center gap-2 lg:justify-start text-gray-200">
                <IoCallOutline className="h-6 w-6" />
                <a href="tel:+639774170997" className="hover:text-white">
                  +63 (977) 417 0997
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="border-t-2 pt-2 grid gap-2 md:grid-cols-3 lg:pt-3 lg:mt-3">
          <div className="flex justify-center md:justify-start items-center">
            <p>© 2024 SerBeast. All Rights Reserved</p>
          </div>
          <div className="flex gap-4 justify-center items-center text-gray-200">
            <a href="#" aria-label="Facebook">
              <FaFacebook className="h-5 w-5 hover:text-white hover:scale-105" />
            </a>
            <a href="#" aria-label="Instagram">
              <FaInstagram className="h-6 w-6 hover:text-white hover:scale-105" />
            </a>
            <a href="#" aria-label="Twitter">
              <FaXTwitter className="h-5 w-5 hover:text-white hover:scale-105" />
            </a>
            <a href="#" aria-label="Github">
              <FaGithub className="h-5 w-5 hover:text-white hover:scale-105" />
            </a>
          </div>
          <div>
            <ul className="flex justify-center gap-4 md:justify-end items-center text-gray-200">
              <li>
                <a href="#" className="hover:text-white">
                  Privacy
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  Terms of Service
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
