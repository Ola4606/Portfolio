import { memo } from "react";


type TechIconPropType = {
  techLogo: string;
  techName: String;
};

function TechIcon({ techLogo, techName }: TechIconPropType) {
  return (
    <div className="flex flex-col justify-center items-center ">
      <div>
        <img src={techLogo} alt="techLogo" className="w-[30px] h-[30px] md:w-[40px] md:h-[40px]" />
      </div>
      <p className="font-sans text-sm md:text-lg font-medium text-center text-black">
        {techName}
      </p>
    </div>
  );
}

export default memo(TechIcon);
