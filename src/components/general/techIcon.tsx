type TechIconPropType = {
  techLogo: string;
  techName: String;
};

function TechIcon({ techLogo, techName }: TechIconPropType) {
  return (
    <div className="flex flex-col gap-1 justify-center items-center ">
      <div>
        <img src={techLogo} alt="techLogo" width={40} height={40} />
      </div>
      <p className="font-sans text-base md:text-lg lg:text-xl font-medium text-center text-black">
        {techName}
      </p>
    </div>
  );
}

export default TechIcon;
