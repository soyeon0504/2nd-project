import React, { useEffect, useState } from "react";
import { Map } from "react-kakao-maps-sdk";

const MyMap = () => {
  const [position, setPosition] = useState({ lat: 33.450701, lng: 126.570667 });

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        ({ coords }) => {
          setPosition({ lat: coords.latitude, lng: coords.longitude });
        },
        error => {
          console.error(error);
        },
      );
    } else {
      console.error("Geolocation is not supported by this browser.");
    }
  }, []);

  return (
    <div
      style={{
        width: "100%",
        position: "relative",
        marginTop: "65px",
        marginBottom: "100px",
      }}
    >
      <Map
        center={position}
        level={3}
        style={{ width: "100%", height: "400px", position: "relative" }}
        apiKey="0a7b875855336bf31181760c0e9ea9b1"
      />
    </div>
  );
};

export default MyMap;
