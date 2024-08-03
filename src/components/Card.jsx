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
        <div className="content-box">
          <ul>
            <li>
              <h4>{props.h4}</h4>
            </li>

            <li>
              <p>{props.p}</p>
            </li>

            <li>
              <ol>
                <li>
                  <a href={props.waLink} target="_blank" id="whatsapp">
                    <WhatsApp />
                  </a>
                </li>

                <li>
                  <a href={props.fbLink} target="_blank" id="fb">
                    <Facebook />
                  </a>
                </li>

                <li>
                  <a href={props.tgLink} target="_blank" id="telegram">
                    <Telegram />
                  </a>
                </li>
              </ol>
            </li>
          </ul>
        </div>

        <img
          src={props.img}
          alt={props.imgTitle}
          style={{
            width: `${props.imgWidth}`,
            height: `${props.imgWidth}`,
            left: `${props.imgLeft}`,
          }}
        />
      </div>
    </>
  );
}

export default Card;
