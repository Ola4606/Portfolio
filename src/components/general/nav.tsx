import {memo} from "react";
import { Link } from "react-router-dom";

function Nav() {
  return (
    <div className="bg-main px-5 md:px-7 py-2 flex justify-start items-center">
      <Link to="/">
      <span className="text-black text-xl xsm:text-2xl md:text-3xl font-black font-logo cursor-pointer">
        Laolu.dev
      </span>
      </Link>
    </div>
  );
}

export default memo(Nav);
