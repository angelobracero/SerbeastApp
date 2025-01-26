import { Button } from "../common";
import { Link } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { fetchProfessionalInfo } from "../../util/http";
import { useUser } from "../../store/UserContext";
import { Loading, Error } from "../common/index";

const AccountSettings = () => {
  const { user } = useUser();

  const { data, isLoading, isError, error } = useQuery({
    queryKey: ["professional", user.id],
    queryFn: ({ signal }) => fetchProfessionalInfo({ id: user.id, signal }),
  });

  if (isLoading) {
    return <Loading />;
  }

  if (isError) {
    return <Error error={error} />;
  }

  console.log(data);

  return (
    <>
      <h1 className="text-center font-montserrat text-4xl font-bold mb-9">
        Account Settings
      </h1>
      <form className="grid grid-cols-2 gap-x-4 gap-y-3 w-[85%] mx-auto">
        <div className="flex flex-col">
          <label>First Name</label>
          <input
            className="bg-darkblue rounded-sm py-1 px-2"
            type="text"
            value={data.firstName}
            readOnly
          />
        </div>
        <div className="flex flex-col">
          <label>Last Name</label>
          <input
            className="bg-darkblue rounded-sm py-1 px-2"
            type="text"
            value={data.lastName}
            readOnly
          />
        </div>
        <div className="flex flex-col">
          <label>Phone Number</label>
          <input
            className="bg-darkblue rounded-sm py-1 px-2"
            type="phone"
            value={data.phoneNumber}
            readOnly
          />
        </div>
        <div className="flex flex-col">
          <label>Email</label>
          <input
            className="bg-darkblue rounded-sm py-1 px-2"
            type="email"
            value={data.email}
            readOnly
          />
        </div>
        <div className="flex flex-col">
          <label>House/Block/Lot/No.</label>
          <input
            className="bg-darkblue rounded-sm py-1 px-2"
            type="house"
            value={data.houseLotBlockNumber}
            readOnly
          />
        </div>
        <div className="flex flex-col">
          <label>Street</label>
          <input
            className="bg-darkblue rounded-sm py-1 px-2"
            type="street"
            value={data.street}
            readOnly
          />
        </div>
        <div className="flex flex-col">
          <label>Barangay</label>
          <input
            className="bg-darkblue rounded-sm py-1 px-2"
            type="barangay"
            value={data.barangay}
            readOnly
          />
        </div>
        <div className="flex flex-col">
          <label>Birthday &#40;optional&#41;</label>
          <input
            className="bg-darkblue rounded-sm py-1 px-2"
            type="barangay"
            value={data.birthday}
            readOnly
          />
        </div>
        <div className="flex flex-col col-span-full">
          <label>Description</label>
          <textarea
            className="bg-darkblue rounded-sm py-1 px-2 resize-none h-36"
            type="description"
            readOnly
          >
            {data.description}
          </textarea>
        </div>
        <div className="flex justify-center col-span-full">
          <Link to="/p/account-edit">
            <Button className="px-24 py-1 bg-lightblue rounded-full">
              Edit Info
            </Button>
          </Link>
        </div>
      </form>
    </>
  );
};

export default AccountSettings;
