import React from "react";
import { openLocationModal } from "../../redux/actions/locationActions";
import { connect } from "react-redux";
import { Icon } from "@iconify/react";
import globeAdd24Regular from "@iconify-icons/fluent/globe-add-24-regular";

const AddLocationBtn = ({ openLocationModal }) => {
  return (
    <div>
      <Icon
        icon={globeAdd24Regular}
        className="location-btn"
        onClick={() => openLocationModal()}
      />
    </div>
  );
};

export default connect(null, { openLocationModal })(AddLocationBtn);
