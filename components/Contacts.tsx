import React from "react";
import SocialLink from "./SocialLink";


const Contacts = () => {
  return (
    <div className="wrapper ">
      <div className="max-w-5xl mx-auto flex flex-col gap-4 items-center justify-center">
        <h2 className="text-3xl font-bold">Lets create awesome products</h2>
        <p className="text-lg tracking-wide font-medium text-center">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book
        </p>
        <button className="w-52 h-14 bg-gradient-to-r from-blue-600 via-blue-700 to-indigo-950 text-lg rounded-lg text-white font-bold hover:from-indigo-950 hover:to-blue-600 duration-300">
          Say Hello
        </button>
      </div>
      <div className="mt-8 flex items-center flex-wrap gap-8 justify-center">
        <SocialLink title='Github'></SocialLink>
        <SocialLink title='Facebook'></SocialLink>
        <SocialLink title='Facebook'></SocialLink>
        <SocialLink title='LinkedIn'></SocialLink>
        <SocialLink title='Next.js'></SocialLink>
      </div>

    </div>
  );
};

export default Contacts;
