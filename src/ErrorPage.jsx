import { Link, useRouteError } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";

export default function ErrorPage() {
  const error = useRouteError();

  return (
    <div id="error-page" className="bg-[#D9EDEE] min-h-[100vh] text-center" >
      <div className="flex justify-center">
      <img src="https://i.ibb.co.com/L8RnNrg/creative-404-error-page-design-marketing-assets.jpg" alt="" />

      </div>
      <p className="text-3xl mb-2 text-[#3A4350]">
        <i>{error.statusText || error.message}</i>
      </p>
      <div className="text-center">

      <Link to="/"><button className="btn btn-ghost border-[#57DDA3] rounded-full text-[#3A4350]"><FaArrowLeft></FaArrowLeft>Go Back To Your Home Page</button></Link>
      </div>
    </div>
  );
}
