import Button from "../common/Button";
import { useState, useRef } from "react";
import { addProfessionalService } from "../../util/http";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "react-toastify";

const AddService = ({ isAddServiceOpen, setIsAddServiceOpen, user }) => {
  const queryClient = useQueryClient();
  const [fileName, setFileName] = useState("No file chosen");
  const [selectedCategory, setSelectedCategory] = useState("");
  const [availableServices, setAvailableServices] = useState([]);

  const { mutate, isPending, isError, error } = useMutation({
    mutationFn: addProfessionalService,
    onError: (error) => {
      console.error("Error occurred while adding the service:", error);
      toast.error("Error: " + error.message);
    },
    onSuccess: () => {
      queryClient.invalidateQueries(["professionalServices", user.id]);
      toast.success("Added New Service Successfully!");
      setIsAddServiceOpen(false);
    },
  });

  const initialValues = {
    category: "",
    service: "",
    price: "",
    image: "",
    description: "",
  };

  const [inputValues, setInputValues] = useState(initialValues);

  function handleInputChange(e) {
    const { name, value } = e.target;
    setInputValues((prev) => ({
      ...prev,
      [name]: value,
    }));
  }

  const fileInputRef = useRef(null);

  const categoryOptions = [
    { id: 1, label: "Home and Property Services" },
    { id: 2, label: "Professional Services" },
    { id: 3, label: "Personal Services" },
    { id: 4, label: "Event Services" },
    { id: 5, label: "Technology Services" },
    { id: 6, label: "Automotive Services" },
    { id: 7, label: "Specialized Services" },
  ];

  const servicesByCategory = {
    1: [
      { id: 1, title: "Plumbing" },
      { id: 2, title: "Electrical Work" },
      { id: 3, title: "Cleaning Services" },
      { id: 4, title: "Landscaping" },
      { id: 5, title: "Roofing" },
      { id: 6, title: "HVAC Services" },
      { id: 7, title: "Pest Control" },
      { id: 8, title: "Painting" },
      { id: 9, title: "Carpentry" },
    ],
    2: [
      { id: 10, title: "Tutoring" },
      { id: 11, title: "Consulting" },
      { id: 12, title: "Legal Services" },
      { id: 13, title: "Financial Services" },
    ],
    3: [
      { id: 14, title: "Beauty Services" },
      { id: 15, title: "Fitness Training" },
      { id: 16, title: "Childcare" },
    ],
    4: [
      { id: 17, title: "Catering" },
      { id: 18, title: "Photography" },
      { id: 19, title: "Event Planning" },
    ],
    5: [
      { id: 20, title: "IT Support" },
      { id: 21, title: "Web Development" },
      { id: 22, title: "Graphic Design" },
    ],
    6: [
      { id: 23, title: "Car Repairs" },
      { id: 24, title: "Detailing Services" },
    ],
    7: [
      { id: 25, title: "Pet Services" },
      { id: 26, title: "Moving Services" },
      { id: 27, title: "Interior Design" },
    ],
  };

  const handleCategoryChange = (event) => {
    const categoryId = parseInt(event.target.value, 10);
    setSelectedCategory(categoryId);
    setAvailableServices(servicesByCategory[categoryId] || []);
    setInputValues((prev) => ({
      ...prev,
      category: categoryId,
    }));
  };

  const handleServiceChange = (event) => {
    const serviceId = parseInt(event.target.value, 10);
    setInputValues((prev) => ({
      ...prev,
      service: serviceId,
    }));
  };

  const handleClick = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setFileName(file.name);
      setInputValues((prev) => ({
        ...prev,
        image: file,
      }));
    } else {
      setFileName("No file chosen");
      setInputValues((prev) => ({
        ...prev,
        image: "",
      }));
    }
  };
  function handleLoginOnSubmit(e) {
    e.preventDefault();
    const formData = new FormData();
    formData.append("categoryId", inputValues.category);
    formData.append("serviceId", inputValues.service);
    formData.append("price", inputValues.price);
    formData.append("description", inputValues.description);
    formData.append("image", inputValues.image);
    formData.append("professionalId", user.id);

    mutate(formData);
    setInputValues(initialValues);
    setFileName("No file chosen");
  }

  return (
    <>
      {isAddServiceOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm z-40 flex justify-center items-center">
          <dialog className="fixed z-50 h-[450px] w-[90%] max-w-[500px] bg-darkblue rounded-lg grid text-white ">
            <form action="" onSubmit={handleLoginOnSubmit}>
              <div className="flex flex-col gap-5 justify-center items-start w-[90%] lg:w-[80%] mx-auto my-5">
                <h1 className="text-3xl font-montserrat font-bold self-center">
                  Add New Service
                </h1>
                <div className="flex flex-wrap w-full gap-2">
                  <div className="grid gap-2 flex-1">
                    <label htmlFor="category">Category</label>
                    <select
                      name="category"
                      id="category"
                      className="bg-richblue border-lightblue border-2 rounded-lg p-1"
                      onChange={handleCategoryChange}
                      value={selectedCategory}
                    >
                      <option value="">Select Category</option>
                      {categoryOptions.map((cat) => (
                        <option key={cat.id} value={cat.id}>
                          {cat.label}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div className="grid gap-2 flex-1">
                    <label htmlFor="service">Service</label>
                    <select
                      name="service"
                      id="service"
                      className="bg-richblue border-lightblue border-2 rounded-lg p-1"
                      disabled={!selectedCategory}
                      onChange={handleServiceChange}
                      value={inputValues.service}
                    >
                      <option value="">Select Service</option>
                      {availableServices.map((service) => (
                        <option key={service.id} value={service.id}>
                          {service.title}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div className="grid gap-2 flex-1">
                    <label htmlFor="price">Price</label>
                    <input
                      name="price"
                      type="text"
                      id="price"
                      value={inputValues.price}
                      onChange={handleInputChange}
                      className="bg-richblue border-lightblue border-2 rounded-lg p-1"
                    />
                  </div>
                  <div className="grid gap-2 flex-1">
                    <label htmlFor="image">Image</label>
                    <input
                      ref={fileInputRef}
                      type="file"
                      name="image"
                      id="image"
                      accept="Image/*"
                      className="hidden"
                      onChange={handleFileChange}
                    />
                    <input
                      className="bg-richblue border-lightblue border-2 rounded-lg p-1 cursor-pointer"
                      onClick={handleClick}
                      value={fileName}
                      readOnly
                    />
                  </div>
                  <div className="grid gap-2 flex-1">
                    <label htmlFor="description">Description</label>
                    <textarea
                      rows={3}
                      name="description"
                      id="description"
                      value={inputValues.description}
                      onChange={handleInputChange}
                      className="bg-richblue border-lightblue border-2 rounded-lg p-1 resize-none "
                    ></textarea>
                  </div>
                </div>
                <div className="flex w-full gap-2">
                  <Button className="flex-1 py-1 bg-lightblue rounded-full">
                    Save
                  </Button>
                  <Button
                    className="flex-1 py-1 bg-red-700 rounded-full"
                    onClick={() => setIsAddServiceOpen(false)}
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

export default AddService;
