import { Outlet } from "react-router-dom";
import DashFooter from "./persists/DashFooter";
import DashHeader from "./persists/DashHeader";

const DashLayout = () => {
  return (
    <>
      <DashHeader />
      <div className="dash-container">
        <Outlet />
      </div>
      <DashFooter />
    </>
  );
};
export default DashLayout;
