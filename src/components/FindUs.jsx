import React from "react";
import { FaFacebook, FaTwitter } from "react-icons/fa";
import { ImInstagram } from "react-icons/im";

const FindUs = () => {
  return (
    <div>
      <h2 className="font-semibold mt-4 *:space-y-4 mb-4">Find Us On</h2>
      <div>
        <div className="join flex w-full join-vertical  *:bg-base-100">
          <button className="btn join-item justify-start"><FaFacebook className="text-blue-500"></FaFacebook> Facebook</button>
          <button className="btn join-item justify-start">  
        <FaTwitter className="text-blue-500"></FaTwitter>
        Twitter</button>
          <button className="btn join-item justify-start">
            <ImInstagram className="text-[#DD3F78]"></ImInstagram>
             Instagram</button>
        </div>
      </div>
    </div>
  );
};

export default FindUs;
