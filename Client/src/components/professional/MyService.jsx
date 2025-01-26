import plumbingImg from "../../assets/images/bg-images/plumbing.jpg";
import Button from "../common/Button";

const MyService = ({
  setIsDeleteServiceOpen,
  setIsEditServiceOpen,
  service,
}) => {
  return (
    <div className="w-[250px] h-[333px] md:w-[330px] md:h-[373px] bg-darkblue border-2 border-lightblue rounded-lg font-roboto">
      <img
        src={plumbingImg}
        alt=""
        className="w-[246px] h-[120px] md:w-[326px] md:h-[160px] object-cover rounded-t-md"
      />
      <div className="w-[90%] mx-auto">
        <h4 className="text-center text-md md:text-lg font-bold font- montserrat mt-2">
          {service.serviceName}
        </h4>
        <div className="text-sm grid gap-1">
          <div className="grid grid-cols-[80px_1fr]">
            <h5>Category</h5>
            <p className="italic text-gray-300">{service.categoryName}</p>
          </div>
          <div className="grid grid-cols-[80px_1fr]">
            <h5>Price</h5>
            <p className="italic text-gray-300">P{service.price}</p>
          </div>
          <div>
            <h5>Description</h5>
            <p className="italic text-gray-300">{service.description}</p>
          </div>
        </div>
        <div className="flex gap-4 mt-1">
          <Button
            className="py-1 w-[149px] bg-lightblue rounded-full"
            onClick={() => setIsEditServiceOpen(true)}
          >
            Edit
          </Button>

          <Button
            className="py-1 w-[149px] bg-red-800 rounded-full"
            onClick={() => setIsDeleteServiceOpen(true)}
          >
            Delete
          </Button>
        </div>
      </div>
    </div>
  );
};

export default MyService;
