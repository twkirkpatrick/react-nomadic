import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import Geocode from "react-geocode";
import GoogleMapReact from "google-map-react";
import LocationMarker from "./LocationMarker";
require("dotenv").config();

const Map = ({ center, zoom, location: { locations } }) => {
  /* const [locationInfo, setLocationInfo] = useState({}); */

  const markers = locations.map((location) => (
    <LocationMarker lat={location.latitude} lng={location.longitude} />
  ));

  return (
    <div className="map">
      <GoogleMapReact
        bootstrapURLKeys={{ key: process.env.REACT_APP_MAP_API_KEY }}
        defaultCenter={center}
        defaultZoom={zoom}
      >
        {markers}
      </GoogleMapReact>
    </div>
  );
};

const mapStateToProps = (state) => ({
  location: state.location
});

Map.defaultProps = {
  center: {
    lat: 37.54129,
    lng: -77.434769
  },
  zoom: 2
};

export default connect(mapStateToProps)(Map);
