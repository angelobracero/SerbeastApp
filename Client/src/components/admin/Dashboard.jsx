import serviceIcon from "../../assets/images/icons/service-icon.png";
import MoneyIcon from "../../assets/images/icons/money-icon.png";
import calendarIcon from "../../assets/images/icons/calendar-icon.png";
import gearsIcon from "../../assets/images/icons/gears-icon.png";
import DashboardMetricCard from "./DashboardMetricCard";

import DashboardBookingList from "./DashboardBookingList";

const Dashboard = ({ isMenuPcOpen }) => {
  return (
    <>
      <h1 className="text-xl text-center md:text-left md:text-3xl font-montserrat font-bold">
        Welcome, Angelo L. Bracero
      </h1>
      <div className="flex gap-4 pt-4 flex-wrap 2xl:justify-center">
        <DashboardMetricCard
          icon={serviceIcon}
          title="TOTAL SERVICE OFFERED"
          value="1"
        />
        <DashboardMetricCard
          icon={calendarIcon}
          title="NO. OF ACTIVE BOOKINGS"
          value="5"
          gradient="bg-gradient-to-r from-[#0092F8] via-[#0092F8] to-[#00D5EF]"
        />
        <DashboardMetricCard
          icon={MoneyIcon}
          title="TOTAL EARNINGS"
          value="₱20,485"
          gradient="bg-gradient-to-r from-[#E97F00] to-[#D6AC46]"
        />
        <DashboardMetricCard
          icon={gearsIcon}
          title="COMPLETED SERVICES"
          value="22"
          gradient="bg-gradient-to-r from-[#0092F8] via-[#0092F8] to-[#00D5EF]"
        />
      </div>
      <div className="flex flex-col sm:flex-row mt-4 gap-4">
        <div className="flex-grow-[2] basis-10 bg-[#1b204a] rounded-lg min-h-60"></div>

        <div className="flex-1 basis-10 md:max-w-[416px] bg-lightblue rounded-lg min-h-80 max-h-[458px]">
          <div className="w-[90%] mx-auto">
            <h4 className="text-center font-bold pt-2 pb-5">
              UPCOMING BOOKINGS
            </h4>
            <table className="w-full mb-4">
              <thead>
                <tr className="border-b-2 border-gray-400">
                  <th className="hidden lg:table-cell">Name</th>
                  <th className="hidden lg:table-cell">Date</th>
                </tr>
              </thead>
              <tbody>
                <DashboardBookingList />
                <DashboardBookingList />
                <DashboardBookingList />
                <DashboardBookingList />
                <DashboardBookingList />
                <DashboardBookingList />
                <DashboardBookingList />
                <DashboardBookingList />
                <DashboardBookingList />
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
