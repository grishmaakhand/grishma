import React from "react";
import { ReactComponent as MySvg } from "../img/settings-gear-icon.svg";

function SmallCard(props) {
  return (
    <div
      className="flex  justify-center items-center m-2 w-60 h-150  shadow hover:shadow-2xl
    transition ease-in-out delay-150  transform ${
       translate-y-10 opacity-100 hover:-translate-y-1 hover:scale-110  duration-300  hover:stroke-svgcolor"
    >
      <MySvg className="stroke-cyan-500 fill-blue-500 hover:stroke-svgcolor w-20 h-20 m-5" />
      <h2 className="text-center m-1 text-headingcolor font-semibold">
        {props.heading}
      </h2>
    </div>
  );
}
export default SmallCard;
