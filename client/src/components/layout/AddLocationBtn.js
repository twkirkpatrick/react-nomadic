import React from "react";
import { Icon } from "@iconify/react";
import globeAdd24Regular from "@iconify-icons/fluent/globe-add-24-regular";

const AddLocationBtn = () => {
  return (
    <div>
      <Icon icon={globeAdd24Regular} className="location-btn" />
    </div>
  );
};

export default AddLocationBtn;
