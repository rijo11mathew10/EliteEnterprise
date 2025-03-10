import React from "react";

function Video() {
  return (
    <div className="relative w-full h-screen overflow-hidden ">
      <video
        className="absolute top-0 left-0 w-full h-full object-cover border-b-8 border-b-[#E8D858]"
        autoPlay
        loop
        muted
      >
        <source src="/about/elite.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      {/* Optionally, add content over the video */}
      <div className="absolute top-0 left-0 w-full h-full flex justify-center items-center text-white"></div>
    </div>
  );
}

export default Video;
