import React from "react";

const AppointmentList = ({ appointments }) => {
  if (!appointments) {
    return null;
  } else {
    return (
      <div className="appointment-list-container">
        <div>{`Dr. ${appointments.firstName} ${appointments.lastName}`}</div>
      </div>
    );
  }
};

export default AppointmentList;
