import { useMemo, memo } from "react";
import swagImage from "../../images/bitmojies/swag.png";
import TechIcon from "../general/techIcon";
import TechStackData from "../../data/techStack";

function Skills() {
  const techStackElements = useMemo(() => {
    return TechStackData.map((i, index) => {
      return (
        <div key={index}>
          <TechIcon techLogo={i.logoUrl} techName={i.name} />
        </div>
      );
    });
  }, []);

  return (
    <div
      className="bg-main bg-right-bottom md:bg-right bg-no-repeat"
      style={{ backgroundImage: `url(${swagImage})` }}
    >
      <div className="bg-white/[.30] sm:bg-transparent">
        <div className="p-5 md:p-7 md:pt-14">
          <div className=" min-h-[200px] xsm:max-w-[350px] sm:max-w-[450px] md:max-w-[500px] lg:max-w-[650px] xl:max-w-[750px] flex flex-col justify-center">
            <p className="font-sans text-lg md:text-xl lg:text-2xl font-semibold text-left text-gray-700">
              My fullstack arsenal
            </p>
            <p className="font-sans text-xl sm:text-2xl md:text-3xl lg:text-5xl font-bold text-left text-black">
              Programming Languages and Technologies I use.
            </p>

            <div className="mt-4 md:mt-8 grid grid-cols-3 md:grid-cols-5 gap-4 md:gap-5">{techStackElements}</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default memo(Skills);
