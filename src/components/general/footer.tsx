import {memo} from "react";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <div>
      <div className=" bg-transparent h-1 border-t-[1px] border-t-gray-400 mb-4 md:mb-7"></div>
      <div className="bg-white px-5 py-4 ">
        <div className="flex flex-col justify-between items-start gap-2">
          <Link to="/">
            <span className="text-black text-xl xsm:text-2xl md:text-3xl font-black font-logo cursor-pointer">
              Laolu.dev
            </span>
          </Link>

          <span className="text-gray-600 text-xs xsm:text-sm md:text-base font-normal font-sans">
            Made by&nbsp;
            <a
              href="mailto:olaoluwaadeyemo7@gmail.com"
              className=" font-bold text-black underline decoration-gray-400"
            >
              Adeyemo OlaOluwa
            </a>
            &nbsp;(with React and TailwindCSS)
          </span>
        </div>
      </div>
    </div>
  );
}

export default memo(Footer);
