const DashboardMetricCard = ({
  icon,
  title,
  value,
  gradient = "bg-gradient-to-r from-[#4737DD] via-[#8549CF] to-[#CE5EC8]",
}) => {
  return (
    <div
      className={`w-[266px] h-[129px] rounded-lg font-semibold grid grid-cols-[1fr_90px] ${gradient} flex-1`}
    >
      <div className="pl-5 grid grid-rows-[1fr_1fr]">
        <h3 className="pt-2">{title}</h3>
        <h2 className="text-center text-2xl">{value}</h2>
      </div>
      <div className="flex items-center">
        <img src={icon} alt="" />
      </div>
    </div>
  );
};

export default DashboardMetricCard;
