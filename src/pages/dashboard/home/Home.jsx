import React, { useState } from "react";
import "./Home.css";
import { Outlet } from "react-router";
import SideBar from "../../../components/pages/dashboard/home/SideBar";

function Home() {
  const [openSideBar, setOpenSideBar] = useState(false);

  return (
    <div className={`dashboard-home ${openSideBar ? "active" : "inactive"}`}>
      <SideBar setOpenSideBar={setOpenSideBar} openSideBar={openSideBar} />

      <div className="content">
        <Outlet />
      </div>
    </div>
  );
}

export default Home;
