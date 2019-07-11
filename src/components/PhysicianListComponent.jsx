import React from "react";

const PhysicianList = ({ physicians, fetchAppointments }) => {
  const physicianNames = physicians.map(name => {
    return <div onClick={fetchAppointments}>{name}</div>;
  });

  return (
    <div className="physician-list-container">
      <div>Notable</div>
      <div>PHYSICIANS</div>
      <div>{physicianNames}</div>
      <div className="logout-btn">Logout</div>
    </div>
  );
};

export default PhysicianList;
