import React from "react";
import "./Card.css";
import { Facebook, Telegram, WhatsApp } from "@mui/icons-material";

function Card(props) {
  return (
    <>
      <div
        className="card-component"
        style={{
          backgroundImage: `url(${props.bg})`,
          backgroundPosition: `${props.bgPos}`,
        }}
      >
        <j />

        <div className="content-box">
          <ul>
            <li>
              <h4>{props.h4}</h4>
            </li>

            <li>
              <strong>{props.p}</strong>
            </li>
          </ul>
        </div>

        <img
          src={props.img}
          alt={props.imgTitle}
          style={{
            // width: `${props.imgWidth}`,
            // height: `${props.imgWidth}`,
            left: `${props.imgLeft}`,
          }}
        />
      </div>
    </>
  );
}

export default Card;
