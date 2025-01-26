import { forwardRef, useImperativeHandle, useRef, useState } from "react";
import { FaTimes, FaRegEye, FaRegEyeSlash } from "react-icons/fa";
import Button from "../common/Button";
import { barangay } from "../../util/barangay";
import Input from "../common/Input";

import { jwtDecode } from "jwt-decode";
import { useNavigate } from "react-router-dom";

import { createNewUser, login } from "../../util/http";
import { useMutation } from "@tanstack/react-query";
import { useUser } from "../../store/UserContext";
import { toast } from "react-toastify";

const LoginRegisterModal = forwardRef((props, ref) => {
  const { loginUser } = useUser();
  const navigate = useNavigate();

  const {
    mutate: createUserMutate,
    data: createUserData,
    isPending: isCreatingUser,
  } = useMutation({
    mutationFn: createNewUser,
    onSuccess: () => {
      toast.success("Signup successful! Please log in to continue.");
      closeModal();
      setEnteredSignupValues(initialSignupValues);
      setConfirmPassword("");
    },
  });

  const {
    mutate: loginMutate,
    data: loginData,
    isPending: isLoggingIn,
  } = useMutation({
    mutationFn: login,
    onSuccess: (data) => {
      if (data?.result) {
        const { token } = data.result;
        const decodedUser = jwtDecode(token);
        const { id, email, firstname, middleinitial, lastname, role } =
          decodedUser;

        localStorage.setItem("token", token);

        loginUser({
          id,
          email,
          firstname,
          middleinitial,
          lastname,
          role,
          token,
        });
        closeModal();

        if (role === "professional") {
          navigate("/p");
        } else {
          navigate("/");
        }
      }
      setEnteredLoginValues(initialLoginValues);
      toast.success("Logged in successfully!");
    },
    onError: (error) => {
      const errorMessage =
        error?.response?.data?.message || error.message || "An error occurred";
      toast.error(errorMessage);
      closeModal();
    },
  });

  const dialogRef = useRef();
  const [isOpen, setIsOpen] = useState(false);
  const [isLogin, setLogin] = useState(true);

  function closeModal() {
    setIsOpen(false);
    dialogRef.current.close();
  }

  useImperativeHandle(ref, () => ({
    showModal: () => {
      if (dialogRef.current) {
        dialogRef.current.showModal();
        setIsOpen(true);
      }
    },
  }));

  //handling password toggle
  const [passwordVisibility, setPasswordVisibility] = useState({
    login: false,
    register: false,
    confirm: false,
  });

  function handleChangePasswordType(passwordType) {
    setPasswordVisibility((prev) => ({
      ...prev,
      [passwordType]: !prev[passwordType],
    }));
  }

  //handle for changing to Login Form and vise versa
  function handleLogin() {
    setLogin((isLogin) => !isLogin);
  }

  const [selectedRole, setSelectedRole] = useState("customer");

  const initialSignupValues = {
    email: "",
    firstName: "",
    lastName: "",
    phoneNumber: "",
    password: "",
    barangay: "",
    houseLotBlockNumber: "",
    street: "",
  };

  const initialLoginValues = {
    email: "",
    password: "",
  };

  //Signup state
  const [enteredSignupValues, setEnteredSignupValues] =
    useState(initialSignupValues);

  //Login state
  const [enteredLoginValues, setEnteredLoginValues] =
    useState(initialLoginValues);

  //handling the signup form data
  function handleSignupInputChange(e) {
    const { name, value } = e.target;
    setEnteredSignupValues((prev) => ({
      ...prev,
      [name]: value,
    }));
  }

  //handling the login form data
  function handleLoginInputChange(e) {
    const { name, value } = e.target;
    setEnteredLoginValues((prev) => ({
      ...prev,
      [name]: value,
    }));
  }

  function handleRoleChange(e) {
    setSelectedRole(e.target.id);
  }

  const [confirmPassword, setConfirmPassword] = useState("");

  function handleConfirmPasswordChange(e) {
    setConfirmPassword(e.target.value);
  }

  function handleSignUpOnSubmit(e) {
    e.preventDefault();

    if (enteredSignupValues.password !== confirmPassword) {
      toast.error("Passwords do not match");
      closeModal();
      return;
    }

    const endpoint =
      selectedRole === "professional"
        ? "https://localhost:7134/api/auth/register/professional"
        : "https://localhost:7134/api/auth/register/customer";

    createUserMutate({ userData: enteredSignupValues, endpoint });
  }

  function handleLoginOnSubmit(e) {
    e.preventDefault();
    loginMutate(enteredLoginValues);
  }

  return (
    <>
      {isOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm z-40" />
      )}
      <dialog
        className="fixed z-50 h-[600px] w-[968px] rounded-lg"
        ref={dialogRef}
        open={isOpen}
      >
        <div className="grid md:grid-cols-2 h-full text-white">
          <div
            className={`bg-lightblue h-full hidden md:block ${isLogin && "order-1"}`}
          >
            <span>Light Blue Content</span>
          </div>
          <div className="h-full relative bg-darkblue py-10">
            {!isLogin && (
              <div className="w-[90%] lg:w-[80%] mx-auto">
                <button
                  onClick={closeModal}
                  className="text-white absolute right-7 top-4"
                >
                  <FaTimes className="h-6 w-6" />
                </button>
                <h1 className="text-3xl mb-5 text-center">
                  Create Your Account
                </h1>
                <form action="" method="post" onSubmit={handleSignUpOnSubmit}>
                  <label htmlFor="role">Register As:</label>
                  <div className="flex my-2">
                    <div className="flex-1 flex justify-center gap-1 group">
                      <input
                        type="radio"
                        name="role"
                        id="customer"
                        className="peer cursor-pointer"
                        checked={selectedRole === "customer"}
                        onChange={handleRoleChange}
                      />
                      <label
                        htmlFor="customer"
                        className="text-gray-400  peer-checked:text-white cursor-pointer"
                      >
                        Customer
                      </label>
                    </div>
                    <div className="flex-1 flex justify-center gap-1 group">
                      <input
                        type="radio"
                        name="role"
                        id="professional"
                        className="peer cursor-pointer"
                        checked={selectedRole === "professional"}
                        onChange={handleRoleChange}
                      />
                      <label
                        htmlFor="professional"
                        className="text-gray-400 peer-checked:text-white cursor-pointer"
                      >
                        Professional
                      </label>
                    </div>
                  </div>
                  <div className="grid gap-5">
                    <div className="grid grid-cols-2 gap-2">
                      <Input
                        type="text"
                        name="firstName"
                        value={enteredSignupValues.firstName}
                        onChange={handleSignupInputChange}
                        placeholder="First Name"
                      />
                      <Input
                        type="text"
                        name="lastName"
                        value={enteredSignupValues.lastName}
                        onChange={handleSignupInputChange}
                        placeholder="Last Name"
                      />
                    </div>
                    <div className="grid grid-cols-2 gap-2">
                      <Input
                        type="email"
                        name="email"
                        value={enteredSignupValues.email}
                        onChange={handleSignupInputChange}
                        placeholder="Email"
                      />
                      <div className="relative">
                        <Input
                          type="text"
                          name="phoneNumber"
                          value={enteredSignupValues.phoneNumber}
                          onChange={handleSignupInputChange}
                          placeholder="Phone number"
                        />
                      </div>
                    </div>
                    <div className="grid grid-cols-2 gap-2">
                      <Input
                        type="text"
                        name="houseLotBlockNumber"
                        value={enteredSignupValues.houseLotBlockNumber}
                        onChange={handleSignupInputChange}
                        placeholder="House/Lot/Block"
                      />
                      <Input
                        type="text"
                        name="street"
                        value={enteredSignupValues.street}
                        onChange={handleSignupInputChange}
                        placeholder="Street"
                      />
                    </div>
                    <select
                      name="barangay"
                      className="bg-darkblue cursor-pointer text-gray-400 hover:text-white border-gray-400 border-b-2 py-2 px-3 rounded focus:outline-none focus:border-white"
                      defaultValue=""
                      onChange={handleSignupInputChange}
                    >
                      <option value="" disabled className="text-xs md:text-lg">
                        Choose Barangay
                      </option>
                      {barangay.map((barangayName) => (
                        <option
                          key={barangayName}
                          value={barangayName}
                          className="text-xs md:text-lg"
                        >
                          {barangayName}
                        </option>
                      ))}
                    </select>
                    <div className="flex relative">
                      <input
                        type={passwordVisibility.register ? "text" : "password"}
                        name="password"
                        value={enteredSignupValues.password}
                        onChange={handleSignupInputChange}
                        placeholder="Password"
                        className="bg-transparent border-gray-400 border-b-2 py-2 focus-within:outline-none focus-within:border-white flex-1"
                        required
                      />
                      {passwordVisibility.register === "password" ? (
                        <FaRegEyeSlash
                          className="absolute right-2 top-3 cursor-pointer"
                          onClick={() => handleChangePasswordType("register")}
                        />
                      ) : (
                        <FaRegEye
                          className="absolute right-2 top-3 cursor-pointer"
                          onClick={() => handleChangePasswordType("register")}
                        />
                      )}
                      {/* {passwordInvalid && (
                        <span className="absolute bottom-[-20px] left-0 italic text-xs text-[#FF3B3B]">
                          *Password must have atleast 6 items
                        </span>
                      )} */}
                    </div>
                    <div className="flex relative">
                      <input
                        type={passwordVisibility.confirm ? "text" : "password"}
                        name="cpassword"
                        value={confirmPassword}
                        onChange={handleConfirmPasswordChange}
                        placeholder="Confirm Password"
                        className="bg-transparent border-gray-400 border-b-2 py-2 focus-within:outline-none focus-within:border-white flex-1"
                        required
                      />
                      {passwordVisibility.confirm === "password" ? (
                        <FaRegEyeSlash
                          className="absolute right-2 top-3 cursor-pointer"
                          onClick={() => handleChangePasswordType("confirm")}
                        />
                      ) : (
                        <FaRegEye
                          className="absolute right-2 top-3 cursor-pointer"
                          onClick={() => handleChangePasswordType("confirm")}
                        />
                      )}
                      {/* {confirmPasswordInvalid && (
                        <span className="absolute bottom-[-20px] left-0 italic text-xs text-[#FF3B3B]">
                          *Password must match
                        </span>
                      )} */}
                    </div>
                  </div>
                  <div className="flex py-5 gap-2">
                    <input
                      type="checkbox"
                      name=""
                      id=""
                      className="cursor-pointer"
                      required
                    />
                    <p className="italic text-[10px] md:text-sm">
                      I Agree to the{" "}
                      <span className="font-bold not-italic">
                        Terms and Conditions
                      </span>{" "}
                      and{" "}
                      <span className="font-bold not-italic">
                        Privacy Policy
                      </span>
                    </p>
                  </div>
                  <Button className="rounded-sm bg-lightblue w-full py-1">
                    Register
                  </Button>
                  <p className="italic text-[10px] md:text-sm font-normal py-4">
                    Already have an account?{" "}
                    <button className="hover:underline" onClick={handleLogin}>
                      Click here
                    </button>
                  </p>
                </form>
                <div className="flex items-center mb-4">
                  <hr className="flex-grow border-t" />
                  <span className="px-4">Or</span>
                  <hr className="flex-grow border-t" />
                </div>
                <form action="" method="post">
                  <Button className="rounded-sm w-full border-lightblue border-2 py-1">
                    Sign in With Google
                  </Button>
                </form>
              </div>
            )}

            {isLogin && (
              <div className="w-[90%] lg:w-[80%] mx-auto">
                <button
                  onClick={closeModal}
                  className="text-white absolute right-7 top-4"
                >
                  <FaTimes className="h-6 w-6" />
                </button>
                <h1 className="text-2xl font-bold my-5 text-center">
                  Login to Your Account
                </h1>
                <form action="" method="post" onSubmit={handleLoginOnSubmit}>
                  <div className="grid gap-5 mt-10">
                    <Input
                      type="email"
                      name="email"
                      placeholder="Email"
                      value={enteredLoginValues.email}
                      onChange={handleLoginInputChange}
                    />
                    <div className="flex relative">
                      <input
                        type={passwordVisibility.login ? "text" : "password"}
                        name="password"
                        value={enteredLoginValues.password}
                        onChange={handleLoginInputChange}
                        placeholder="Password"
                        className="bg-transparent border-gray-400 border-b-2 py-2 focus-within:outline-none focus-within:border-white flex-1"
                      />
                      {passwordVisibility.login === "password" ? (
                        <FaRegEyeSlash
                          className="absolute right-2 top-3 cursor-pointer"
                          onClick={() => handleChangePasswordType("login")}
                        />
                      ) : (
                        <FaRegEye
                          className="absolute right-2 top-3 cursor-pointer"
                          onClick={() => handleChangePasswordType("login")}
                        />
                      )}
                    </div>
                  </div>
                  <div className="flex py-4 gap-2">
                    <input
                      type="checkbox"
                      name=""
                      id=""
                      className="cursor-pointer"
                    />
                    <p className="italic text-sm text-gray-400">Remember Me</p>
                  </div>
                  <p className="italic text-[10px] md:text-sm font-normal py-4">
                    Don't have an account?{" "}
                    <button className="hover:underline" onClick={handleLogin}>
                      Sign up
                    </button>
                  </p>
                  <Button className="rounded-sm bg-lightblue w-full py-1">
                    Login
                  </Button>
                </form>
                <div className="flex items-center my-4">
                  <hr className="flex-grow border-t" />
                  <span className="px-4">Or</span>
                  <hr className="flex-grow border-t" />
                </div>
                <form action="" method="post">
                  <Button className="rounded-sm w-full border-lightblue border-2 py-1 ">
                    Login in With Google
                  </Button>
                </form>
              </div>
            )}
          </div>
        </div>
      </dialog>
    </>
  );
});

export default LoginRegisterModal;
