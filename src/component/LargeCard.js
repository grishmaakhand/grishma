import React from "react";
import { ReactComponent as MySvg } from "../img/thumb-up.svg";

function LargeCard(props) {
  return (
    <div
      className="flex flex-col  justify-center items-center m-2 w-60 h-150  shadow hover:shadow-2xl 
    transition ease-in-out  translate-y-10 delay-150  hover:-translate-y-1 hover:scale-110  duration-300  hover:stroke-svgcolor"
    >
      <MySvg className="stroke-cyan-500 hover:stroke-svgcolor w-20 h-20 m-5" />
      <h3 className="text-center m-1 text-headingcolor font-semibold">
        {props.heading}
      </h3>
      <p className="text-center m-1 mb-5 text-slate-400">{props.para}</p>
    </div>
  );
}
export default LargeCard;
