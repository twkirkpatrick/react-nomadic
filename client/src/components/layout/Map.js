import React from "react";
import GoogleMapReact from "google-map-react";
require("dotenv").config();

const Map = ({ center, zoom }) => {
  return (
    <div className="map">
      <GoogleMapReact
        bootstrapURLKeys={{ key: process.env.REACT_APP_MAP_API_KEY }}
        defaultCenter={center}
        defaultZoom={zoom}
      ></GoogleMapReact>
    </div>
  );
};

Map.defaultProps = {
  center: {
    lat: 37.54129,
    lng: -77.434769
  },
  zoom: 2
};

export default Map;
