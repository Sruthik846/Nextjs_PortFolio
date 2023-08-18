import React from "react";
import profileImg from '../public/img/profileImg.jpg'
import Image from "next/image";

export default function Banner() {
  return <main className="wrapper flex flex-col md:flex-row items-center gap-10">
    {/* Image */}
    <div className="w-44 h-44 rounded-full bg-black">
        <Image className="w-full h-full rounded-full border-[1px] border-indigo-800 p-2 object-cover" src={profileImg} alt='Profileimage'></Image>
    </div>
    {/* Description */}
    <div className="w-3/4 flex flex-col items-center md:items-start gap-2">
        <h1 className="font-bold text-5xl text-white">Unknown</h1>
        <h3 className="text-xl md:text-2xl font-semibold bg-clip-text text-transparent bg-gradient-to-r from-blue-300 via-red-300 to-indigo-300 tracking-wide">Software Developer</h3>
        <p className="text-base tracking-wide text-center md:text-left">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book</p>
    </div>
  </main>;
}
