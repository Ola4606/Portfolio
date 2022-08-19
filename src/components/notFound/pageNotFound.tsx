import { memo } from "react";
import { Link } from "react-router-dom";
import errorImage from "../../images/bitmojies/error.png";
import Button from "../general/button";

function PageNotFound() {
  return (
    <div className="bg-main min-h-[100vh]">
      <div className="bg-white/[.30] sm:bg-transparent">
        <div className="flex flex-col justify-center items-center min-h-[100vh] p-5 md:p-7">
          <img src={errorImage} alt="" />

          <p className="font-sans text-xl sm:text-2xl md:text-3xl lg:text-5xl font-bold text-center text-black mt-4 md:mt-8">
              Oops.. Seems like this page does not exist.
            </p>

          <div className="mt-4 md:mt-8 flex justify-center">
            <Link to="/">
              <Button btnText={"Go to Home Page"} handleClick={() => {}} />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default memo(PageNotFound);
