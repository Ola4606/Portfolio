import React from "react";
import waveImage from "../../images/bitmojies/wave-right.png";
import SocialTags from "./socialTags";

function Intro() {
  return (
    <div
      className="bg-main bg-right-bottom md:bg-right bg-no-repeat"
      style={{ backgroundImage: `url(${waveImage})` }}
    >
      <div className="bg-white/[.30] sm:bg-transparent">
        <div className="p-5 md:p-7 md:pt-14">
          <div className=" min-h-[200px] xsm:max-w-[350px] sm:max-w-[450px] md:max-w-[500px] lg:max-w-[650px] xl:max-w-[750px] flex flex-col justify-center">
            <p className="font-sans text-lg md:text-xl lg:text-2xl font-semibold text-left text-gray-700">
              Hello 👋, I'm OlaOluwa
            </p>
            <p className="font-sans text-xl sm:text-2xl md:text-3xl lg:text-5xl font-bold text-left text-black">
              A Fullstack Web and Mobile Developer, Student, Gamer.
            </p>

            <div className="mt-4 md:mt-8">
              <SocialTags />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Intro;
