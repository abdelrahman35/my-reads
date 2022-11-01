import React from "react";

const AboutUs = () => {
  return (
    <div className="relative">
      <img className="" src="./assets/aboutusBackground.jpg" alt="img" />
      <p className="absolute font-Montserrat  text-9xl font-extrabold top-0 left-0 text-center pt-10  text-white backdrop-brightness-50  bg-transparent w-full h-full  ">
        <span className="border-b-2 border-white">My Reads</span>
        <p className="font-Ubuntu text-base leading-5 italic mt-10">
          “A reader lives a thousand lives before he dies, said Jojen. The man
          who never reads lives only one.”
        </p>
      </p>
    </div>
  );
};

export default AboutUs;
