import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import Geocode from "react-geocode";
import GoogleMapReact from "google-map-react";
import LocationMarker from "./LocationMarker";
require("dotenv").config();

const Map = ({ center, zoom, location: { locations } }) => {
  const [coordinates, setCoordinates] = useState([]);

  useEffect(() => {
    findCoordinates();
  }, [locations]);

  const onClick = () => {
    console.log("hi");
  };

  const findCoordinates = async () => {
    const addresses = await locations.map((location) => {
      return `${location.city},${location.state}`;
    });

    await addresses.forEach((address) => {
      Geocode.setApiKey(process.env.REACT_APP_GEO_API_KEY);
      Geocode.fromAddress(address).then((res) => {
        const { lat, lng } = res.results[0].geometry.location;
        setCoordinates((prev) => [...prev, { lat: lat, lng: lng }]);
      });
    });
  };

  return (
    <div className="map">
      <GoogleMapReact
        bootstrapURLKeys={{ key: process.env.REACT_APP_MAP_API_KEY }}
        defaultCenter={center}
        defaultZoom={zoom}
      >
        {coordinates.length > 0 &&
          coordinates.map((coordinate) => (
            <LocationMarker
              lat={coordinate.lat}
              lng={coordinate.lng}
              onClick={onClick}
            />
          ))}
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
