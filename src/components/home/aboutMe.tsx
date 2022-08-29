import { memo } from "react";
import smileImage from "../../images/bitmojies/smile.png";
import Button from "../general/button";

function AboutMe() {
  function downloadResume() {
    fetch("resume.pdf").then((response) => {
      response.blob().then((blob) => {
        const fileURL = window.URL.createObjectURL(blob);

        let alink = document.createElement("a");
        alink.href = fileURL;
        alink.download = "Adeyemo OlaOluwa (Resume).pdf";
        alink.click();
      });
    });
  }

  return (
    <div
      className="bg-white bg-left bg-no-repeat"
      style={{ backgroundImage: `url(${smileImage})` }}
    >
      <div className="bg-white/[.50] sm:bg-transparent">
        <div className=" p-5 md:p-7 md:pt-14 flex justify-end">
          <div className="min-h-[200px] xsm:max-w-[350px] sm:max-w-[450px] md:max-w-[500px] lg:max-w-[650px] xl:max-w-[750px] flex flex-col justify-center items-end">
            <p className="font-sans text-lg md:text-xl lg:text-2xl font-semibold text-right text-gray-700">
              A little bit about me
            </p>
            <p className="font-sans text-xl sm:text-2xl md:text-3xl lg:text-5xl font-bold text-right text-black">
              Adeyemo OlaOluwa.
            </p>
            <div className="mt-4 md:mt-8">
              <p className="font-sans text-base md:text-lg lg:text-xl font-medium text-right text-black">
                I am a fullstack software developer, currently studying
                Economics. I am always open to learning new skills, and working
                with others in a team to create software products that solve
                problems.
                <br />
                <br />
                In my free time, I play video games and watch movies.
              </p>
            </div>

            <div className="mt-4 md:mt-8 flex justify-end flex-wrap gap-4">
              <Button btnText={"Resume"} handleClick={downloadResume} />
              <a
                href="https://4realdev.hashnode.dev/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button btnText={"Blog"} handleClick={() => {}} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default memo(AboutMe);
