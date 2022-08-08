
import smileImage from "../../images/smile.png";
import Button from "../general/button";

function AboutMe() {
  return (
    <div
      className="bg-white bg-left bg-no-repeat"
      style={{ backgroundImage: `url(${smileImage})` }}
    >
      <div className="bg-white/[.30] sm:bg-transparent">
        <div className=" p-5 md:p-7 md:pt-14 flex justify-end">
          <div className="min-h-[200px] xsm:max-w-[350px] sm:max-w-[450px] md:max-w-[500px] lg:max-w-[650px] xl:max-w-[750px] flex flex-col justify-center items-end">
            <p className="font-sans text-lg md:text-xl lg:text-2xl font-semibold text-right text-gray-700">
              A little bit about me.
            </p>
            <p className="font-sans text-xl sm:text-2xl md:text-3xl lg:text-5xl font-bold text-right text-black">
              Adeyemo OlaOluwa.
            </p>
            <div className="mt-4 md:mt-8">
              <p className="font-sans text-base md:text-lg lg:text-xl font-normal text-right text-black">
                A little bit about me.A little bit about me. A little bit about
                me. A little bit about me. A little bit about me.A little bit
                about me. A little bit about me.
              </p>
            </div>

            <div className="mt-4 md:mt-8">
            <Button btnText={"Read More"} handleClick={()=>{}}/>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutMe;
