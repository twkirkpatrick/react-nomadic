import React from "react";
import { Icon } from "@iconify/react";
import locationPin from "@iconify-icons/grommet-icons/location-pin";

const LocationMarker = () => {
  return (
    <div>
      <Icon icon={locationPin} className="location-icon" />
    </div>
  );
};

export default LocationMarker;
