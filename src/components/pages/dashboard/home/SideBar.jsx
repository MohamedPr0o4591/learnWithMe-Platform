import React from "react";
import "./SideBar.css";
import { Link } from "react-router-dom";
import { naviOptions } from "./data";

function SideBar(props) {
  return (
    <div className={`sideBar ${props.openSideBar && "inactive"}`}>
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
                    fontSize: !props.openSideBar && "0",
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
