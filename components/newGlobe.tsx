"use client";
import React, { useEffect, useRef } from "react";
import Globe from "globe.gl";

const NewGlobe = () => {
  const globeContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!globeContainerRef.current) return;

    const myGlobe = Globe()(globeContainerRef.current);

    myGlobe
      .globeImageUrl(
        "//unpkg.com/three-globe/example/img/earth-blue-marble.jpg"
      ) 
      .bumpImageUrl("//unpkg.com/three-globe/example/img/earth-topology.png") 
      .pointsData([
        { lat: 40.7128, lng: -74.006, size: 5, color: "red" },
        { lat: 34.0522, lng: -118.2437, size: 5, color: "blue" },
      ])
      .pointAltitude("size")
      .pointColor("color");

    myGlobe.backgroundColor("#000"); 

    return () => {
      myGlobe.pauseAnimation();
    };
  }, []);

  return (
    <div
      ref={globeContainerRef}
      style={{ width: "100%", height: "600px" }}
      className="globe-container"
    ></div>
  );
};

export default NewGlobe;
