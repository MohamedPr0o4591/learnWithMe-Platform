import React, { useState } from "react";
import "./Home.css";
import { Outlet } from "react-router";
import SideBar from "../../../components/pages/dashboard/home/SideBar";

function Home(props) {
  return (
    <div
      className={`dashboard-home ${props.openSideBar ? "active" : "inactive"}`}
    >
      <SideBar
        setOpenSideBar={props.setOpenSideBar}
        openSideBar={props.openSideBar}
      />

      <div className="content">
        <Outlet />
      </div>
    </div>
  );
}

export default Home;
