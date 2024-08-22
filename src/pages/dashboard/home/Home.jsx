import React, { useState } from "react";
import "./Home.css";
import { Outlet } from "react-router";
import SideBar from "../../../components/pages/dashboard/home/SideBar";
import { Container } from "react-bootstrap";

function Home() {
  const [openSideBar, setOpenSideBar] = useState(false);

  return (
    <div className={`dashboard-home ${openSideBar ? "active" : "inactive"}`}>
      <SideBar setOpenSideBar={setOpenSideBar} openSideBar={openSideBar} />

      <Container className="content">
        <Outlet />
      </Container>
    </div>
  );
}

export default Home;
