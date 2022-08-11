import { memo } from "react";
import contactImage from "../../images/bitmojies/contact.png";

function Contact() {
  return (
    <div
      className="bg-main bg-right-bottom md:bg-right bg-no-repeat"
      style={{ backgroundImage: `url(${contactImage})` }}
    >
      <div className="bg-white/[.30] sm:bg-transparent">
        <div className="p-5 md:p-7 md:pt-14">
          <div className=" min-h-[200px] xsm:max-w-[350px] sm:max-w-[450px] md:max-w-[500px] lg:max-w-[650px] xl:max-w-[750px] flex flex-col justify-center">
            <p className="font-sans text-lg md:text-xl lg:text-2xl font-semibold text-left text-gray-700">
              Want to say hi?
            </p>
            <p className="font-sans text-xl sm:text-2xl md:text-3xl lg:text-5xl font-bold text-left text-black">
              Reach out to me if you're looking for a developer, have a
              question, or just want to connect.
            </p>

            <div className="mt-4 md:mt-8">
              <p className="font-sans text-base md:text-lg lg:text-xl font-medium text-left text-black">
                Email:{" "}
                <a
                  href="mailto:olaoluwaadeyemo7@gmail.com"
                  className=" font-bold underline underline-offset-2 decoration-gray-400"
                >
                  olaoluwaadeyemo7@gmail.com
                </a>
                <br />
                Github:&nbsp;
                <a
                  href="https://github.com/Ola4606"
                  target="_blank"
                  rel="noopener noreferrer"
                  className=" font-bold underline underline-offset-2 decoration-gray-400"
                >
                  @Ola4606
                </a>
                <br />
                Twitter:&nbsp;
                <a
                  href="https://twitter.com/4real_Dev"
                  target="_blank"
                  rel="noopener noreferrer"
                  className=" font-bold underline underline-offset-2 decoration-gray-400"
                >
                  @4real_Dev
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default memo(Contact);
