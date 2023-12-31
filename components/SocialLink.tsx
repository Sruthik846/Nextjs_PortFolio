import React from "react";
import { FiArrowUpRight } from "react-icons/fi";
interface Props{
    title:string;
}

const SocialLink = ({title}: Props) => {
  return (
    <div className="flex items-center justify-center  gap-2 text-xl text-gray-400 font-semibold group">
      <p className="group-hover:text-white">{title}</p>
      <FiArrowUpRight className="translate-x-0 translate-y-0 group-hover:translate-x-2 group-hover:-translate-y-2 transition-transform duration-500"></FiArrowUpRight>
    </div>
  );
};

export default SocialLink;
