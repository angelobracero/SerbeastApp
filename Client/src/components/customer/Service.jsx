const Service = ({ title, img, description }) => {
  return (
    <div className="flex flex-col items-center p-4 gap-5">
      <h6 className="font-bold">{title}</h6>
      <img src={img} alt={`${title} icon`} className="size-11" />
      <p className="text-start md:text-center">{description}</p>
    </div>
  );
};

export default Service;
