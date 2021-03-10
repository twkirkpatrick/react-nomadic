import React from "react";
import { Icon } from "@iconify/react";
import locationPin from "@iconify-icons/grommet-icons/location-pin";

const LocationMarker = ({ onClick }) => {
  return (
    <div>
      <Icon icon={locationPin} className="location-icon" onClick={onClick} />
    </div>
  );
};

export default LocationMarker;
