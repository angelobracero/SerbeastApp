import Button from "../common/Button";
import { useState, useRef, useEffect } from "react";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { updateProfessionalService } from "../../util/http";

const EditService = ({
  isEditServiceOpen,
  setIsEditServiceOpen,
  service,
  user,
}) => {
  const queryClient = useQueryClient();

  const [selectedCategory, setSelectedCategory] = useState("");
  const [availableServices, setAvailableServices] = useState([]);

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

  const [formData, setFormData] = useState({
    category: service?.categoryName || "",
    serviceName: service?.serviceName || "",
    price: service?.price || "",
    description: service?.description || "",
  });

  useEffect(() => {
    if (service) {
      setFormData({
        category: service.categoryName,
        serviceName: service.serviceName,
        price: service.price,
        description: service.description,
      });
    }
  }, [service]);

  const { mutate, isPending, isError } = useMutation({
    mutationFn: () => (userId, updatedData) =>
      updateProfessionalService(userId, updatedData),
    onSuccess: () => {
      queryClient.invalidateQueries(["professionalServices", user.id]);
      setIsEditServiceOpen(false);
    },
  });

  const handleCategoryChange = (event) => {
    const categoryId = parseInt(event.target.value, 10);
    setSelectedCategory(categoryId);
    setAvailableServices(servicesByCategory[categoryId] || []);
    setFormData((prev) => ({
      ...prev,
      category: categoryId,
    }));
  };

  const handleServiceChange = (event) => {
    const serviceId = parseInt(event.target.value, 10);
    setFormData((prev) => ({
      ...prev,
      serviceName:
        servicesByCategory[selectedCategory]?.find(
          (service) => service.id === serviceId
        )?.title || "",
    }));
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const fileInputRef = useRef(null);

  const handleClick = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setFormData((prevData) => ({
        ...prevData,
        image: file.name,
      }));
    }
  };

  function handleSubmit(e) {
    e.preventDefault();

    const selectedCategoryObj = categoryOptions.find(
      (category) => category.id === selectedCategory
    );
    const selectedService = servicesByCategory[selectedCategory]?.find(
      (service) => service.title === formData.serviceName
    );

    const updatedData = {
      CategoryId: selectedCategory,
      ServiceId: selectedService ? selectedService.id : null,
      Price: formData.price,
      Description: formData.description,
    };

    if (formData.image) {
      updatedData.Image = formData.image;
    }

    const isEmpty =
      !updatedData.CategoryId &&
      !updatedData.ServiceId &&
      !updatedData.Price &&
      !updatedData.Description &&
      !updatedData.Image;

    if (isEmpty) {
      console.log("No data to submit");
      return;
    }

    console.log("Submitting the update: ", updatedData);
    mutate();
  }

  return (
    <>
      {isEditServiceOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm z-50 flex justify-center items-center">
          <dialog className="fixed z-50 h-[450px] w-[90%] max-w-[500px] bg-darkblue rounded-lg grid text-white">
            <form onSubmit={handleSubmit}>
              <div className="text-sm md:text-base flex flex-col gap-5 justify-center items-start w-[90%] lg:w-[80%] mx-auto my-5">
                <h1 className="text-3xl font-montserrat font-bold self-center">
                  Edit Service
                </h1>
                <div className="flex flex-wrap w-full gap-2">
                  <div className="grid gap-2 flex-1">
                    <label htmlFor="category">Category</label>
                    <select
                      name="category"
                      id="category"
                      className="bg-richblue border-lightblue border-2 rounded-lg p-1"
                      onChange={handleCategoryChange}
                      value={formData.category}
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
                      value={formData.serviceName}
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
                      id="price"
                      value={formData.price}
                      onChange={handleChange}
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
                      value={formData.image || "No file chosen"}
                      readOnly
                    />
                  </div>
                  <div className="grid gap-2 basis-full">
                    <label htmlFor="description">Description</label>
                    <textarea
                      rows={3}
                      name="description"
                      id="description"
                      value={formData.description}
                      onChange={handleChange}
                      className="bg-richblue border-lightblue border-2 rounded-lg p-1 resize-none"
                    ></textarea>
                  </div>
                </div>
                <div className="flex w-full gap-2">
                  <Button className="flex-1 py-1 bg-lightblue rounded-full">
                    Update
                  </Button>
                  <Button
                    className="flex-1 py-1 bg-red-700 rounded-full"
                    onClick={() => setIsEditServiceOpen(false)}
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

export default EditService;
