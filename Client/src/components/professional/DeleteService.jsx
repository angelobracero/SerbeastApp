import Button from "../common/Button";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deleteProfessionalService } from "../../util/http";
import { toast } from "react-toastify";

const DeleteService = ({
  isDeleteServiceOpen,
  setIsDeleteServiceOpen,
  serviceId,
  user,
}) => {
  const queryClient = useQueryClient();

  const { mutate, isLoading } = useMutation({
    mutationFn: () => deleteProfessionalService(serviceId),
    onSuccess: () => {
      queryClient.invalidateQueries(["professionalServices", user.id]);
      setIsDeleteServiceOpen(false);
      toast.success("Remove one service successfully!");
    },
    onError: (error) => {
      console.error("Error deleting service:", error);
      setIsDeleteServiceOpen(false);
    },
  });

  const handleDeleteService = () => {
    if (serviceId) {
      mutate();
      setIsDeleteServiceOpen(false);
    }
  };

  return (
    <>
      {isDeleteServiceOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm z-40 flex justify-center items-center">
          <dialog className="fixed z-50 h-[200px] w-[90%] max-w-[500px] bg-darkblue rounded-lg grid text-white ">
            <form action="">
              <div className="flex flex-col gap-5 justify-center items-start w-[90%] lg:w-[80%] mx-auto my-5">
                <h1 className="text-3xl font-montserrat font-bold self-center">
                  Confirm Deletion
                </h1>
                <p className="italic">
                  Are you sure you want to delete this service? This action
                  cannot be undone.
                </p>
                <div className="flex w-full gap-2">
                  <Button
                    className="flex-1 py-1 bg-red-700 rounded-full"
                    onClick={handleDeleteService}
                    disabled={isLoading}
                  >
                    Delete
                  </Button>
                  <Button
                    className="flex-1 py-1 bg-lightblue rounded-full "
                    onClick={() => setIsDeleteServiceOpen(false)}
                  >
                    Cancel
                  </Button>
                </div>
              </div>
            </form>
          </dialog>
        </div>
      )}
    </>
  );
};

export default DeleteService;
