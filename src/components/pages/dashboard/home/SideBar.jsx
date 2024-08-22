import React from "react";
import "./SideBar.css";
import { IconButton } from "@mui/material";
import { ArrowLeft, ArrowRight, Close, Menu } from "@mui/icons-material";
import { Link } from "react-router-dom";
import { naviOptions } from "./data";

function SideBar(props) {
  return (
    <div className="sideBar">
      <div
        className="iconClosing"
        style={{
          justifyContent: !props.openSideBar && "center",
        }}
      >
        <IconButton
          color="inherit"
          sx={{
            borderRadius: "5px",
          }}
          onClick={() => props.setOpenSideBar(!props.openSideBar)}
        >
          <Menu fontSize="medium" color="inherit" />
        </IconButton>
      </div>

      <ul>
        {naviOptions.map((item, index) => {
          return (
            <li key={index}>
              <Link
                to={item.path}
                className={`${location.pathname === item.path ? "active" : ""}`}
              >
                <div className="icon">{item.icon}</div>
                <span
                  style={{
                    fontSize: !props.openSideBar && "0px",
                  }}
                >
                  {item.title}
                </span>
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default SideBar;
